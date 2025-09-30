import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { BlogService, BlogArticle } from '../../services/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  public articles: BlogArticle[] = [];
  public filteredArticles: BlogArticle[] = [];
  public loading = false;
  public searchTerm = '';
  public currentPage = 1;
  public pageSize = 9;
  public totalPages = 0;
  public totalArticles = 0;
  
  // Filtros
  public selectedAuthor = '';
  public selectedYear = '';
  public authors: string[] = [];
  public years: string[] = [];

  constructor(
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadArticles();
    this.setupSearch();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadArticles(): void {
    this.loading = true;
    
    this.blogService.getArticles()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (articles) => {
          this.articles = articles;
          this.filteredArticles = articles;
          this.totalArticles = articles.length;
          this.totalPages = Math.ceil(this.totalArticles / this.pageSize);
          
          // Extraer autores y años únicos
          this.extractFilters(articles);
          
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading articles:', error);
          this.loading = false;
        }
      });
  }

  private extractFilters(articles: BlogArticle[]): void {
    // Extraer autores únicos
    const authorSet = new Set<string>();
    const yearSet = new Set<string>();
    
    articles.forEach(article => {
      if (article.author) {
        authorSet.add(article.author);
      }
      
      if (article.date) {
        const year = new Date(article.date).getFullYear().toString();
        yearSet.add(year);
      }
    });
    
    this.authors = Array.from(authorSet).sort();
    this.years = Array.from(yearSet).sort((a, b) => b.localeCompare(a));
  }

  private setupSearch(): void {
    // Implementar búsqueda con debounce
    // Esto se puede conectar a un input de búsqueda en el template
  }

  public onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.applyFilters();
  }

  public onAuthorFilter(author: string): void {
    this.selectedAuthor = author;
    this.applyFilters();
  }

  public onYearFilter(year: string): void {
    this.selectedYear = year;
    this.applyFilters();
  }

  public clearFilters(): void {
    this.searchTerm = '';
    this.selectedAuthor = '';
    this.selectedYear = '';
    this.applyFilters();
  }

  public clearSearch(): void {
    this.searchTerm = '';
    this.applyFilters();
  }

  public clearAuthorFilter(): void {
    this.selectedAuthor = '';
    this.applyFilters();
  }

  public clearYearFilter(): void {
    this.selectedYear = '';
    this.applyFilters();
  }

  public getActiveFiltersCount(): number {
    let count = 0;
    if (this.searchTerm.trim()) count++;
    if (this.selectedAuthor) count++;
    if (this.selectedYear) count++;
    return count;
  }

  private applyFilters(): void {
    let filtered = [...this.articles];

    // Aplicar búsqueda
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(term) ||
        article.description.toLowerCase().includes(term) ||
        article.author.toLowerCase().includes(term)
      );
    }

    // Aplicar filtro de autor
    if (this.selectedAuthor) {
      filtered = filtered.filter(article =>
        article.author === this.selectedAuthor
      );
    }

    // Aplicar filtro de año
    if (this.selectedYear) {
      filtered = filtered.filter(article => {
        const articleYear = new Date(article.date).getFullYear().toString();
        return articleYear === this.selectedYear;
      });
    }

    this.filteredArticles = filtered;
    this.totalArticles = filtered.length;
    this.totalPages = Math.ceil(this.totalArticles / this.pageSize);
    this.currentPage = 1; // Reset a la primera página
  }

  public getPaginatedArticles(): BlogArticle[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredArticles.slice(startIndex, endIndex);
  }

  public goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  public goToArticle(article: BlogArticle): void {
    this.router.navigate(['/blog', article.slug]);
  }

  public getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  public formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  public getArticleExcerpt(description: string, maxLength: number = 150): string {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  }
}