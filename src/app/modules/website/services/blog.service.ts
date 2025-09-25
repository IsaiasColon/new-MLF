import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  featuredImage: string;
  url: string;
  content?: {
    paragraphs: string[];
    lists: Array<{
      type: string;
      items: string[];
    }>;
    headings: Array<{
      level: number;
      text: string;
    }>;
    images: Array<{
      src: string;
      alt: string;
    }>;
  };
  extractedAt?: string;
}

export interface BlogIndex {
  articles: BlogArticle[];
  totalArticles: number;
  lastUpdated: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly BASE_URL = 'assets/data/blog-articles';
  private articlesSubject = new BehaviorSubject<BlogArticle[]>([]);
  private indexSubject = new BehaviorSubject<BlogIndex | null>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public articles$ = this.articlesSubject.asObservable();
  public index$ = this.indexSubject.asObservable();
  public loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadBlogIndex();
  }

  /**
   * Carga el índice de todos los artículos
   */
  public loadBlogIndex(): void {
    this.loadingSubject.next(true);
    
    this.http.get<BlogIndex>(`${this.BASE_URL}/index.json`)
      .pipe(
        tap(index => {
          this.indexSubject.next(index);
          this.articlesSubject.next(index.articles);
        }),
        catchError(error => {
          console.error('Error loading blog index:', error);
          this.loadingSubject.next(false);
          return of(null);
        })
      )
      .subscribe(() => {
        this.loadingSubject.next(false);
      });
  }

  /**
   * Obtiene todos los artículos
   */
  public getArticles(): Observable<BlogArticle[]> {
    return this.articles$;
  }

  /**
   * Obtiene un artículo específico por slug
   */
  public getArticleBySlug(slug: string): Observable<BlogArticle | null> {
    return this.http.get<BlogArticle>(`${this.BASE_URL}/${slug}.json`)
      .pipe(
        catchError(error => {
          console.error(`Error loading article ${slug}:`, error);
          return of(null);
        })
      );
  }

  /**
   * Obtiene artículos por página (paginación)
   */
  public getArticlesByPage(page: number = 1, pageSize: number = 10): Observable<{
    articles: BlogArticle[];
    totalPages: number;
    currentPage: number;
    totalArticles: number;
  }> {
    return this.articles$.pipe(
      map(articles => {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedArticles = articles.slice(startIndex, endIndex);
        const totalPages = Math.ceil(articles.length / pageSize);

        return {
          articles: paginatedArticles,
          totalPages,
          currentPage: page,
          totalArticles: articles.length
        };
      })
    );
  }

  /**
   * Busca artículos por término
   */
  public searchArticles(searchTerm: string): Observable<BlogArticle[]> {
    return this.articles$.pipe(
      map(articles => {
        if (!searchTerm.trim()) {
          return articles;
        }

        const term = searchTerm.toLowerCase();
        return articles.filter(article => 
          article.title.toLowerCase().includes(term) ||
          article.description.toLowerCase().includes(term) ||
          article.author.toLowerCase().includes(term)
        );
      })
    );
  }

  /**
   * Obtiene artículos relacionados basados en palabras clave
   */
  public getRelatedArticles(currentSlug: string, limit: number = 3): Observable<BlogArticle[]> {
    return this.getArticleBySlug(currentSlug).pipe(
      map(currentArticle => {
        if (!currentArticle) return [];

        // Obtener palabras clave del título actual
        const keywords = currentArticle.title.toLowerCase()
          .split(' ')
          .filter(word => word.length > 3);

        return this.articlesSubject.value
          .filter(article => article.slug !== currentSlug)
          .map(article => {
            // Calcular similitud basada en palabras clave
            const articleKeywords = article.title.toLowerCase().split(' ');
            const matches = keywords.filter(keyword => 
              articleKeywords.some(articleKeyword => 
                articleKeyword.includes(keyword) || keyword.includes(articleKeyword)
              )
            ).length;

            return { article, score: matches };
          })
          .filter(item => item.score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, limit)
          .map(item => item.article);
      })
    );
  }

  /**
   * Obtiene artículos por fecha (más recientes primero)
   */
  public getRecentArticles(limit: number = 5): Observable<BlogArticle[]> {
    return this.articles$.pipe(
      map(articles => 
        articles
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, limit)
      )
    );
  }

  /**
   * Obtiene artículos por autor
   */
  public getArticlesByAuthor(author: string): Observable<BlogArticle[]> {
    return this.articles$.pipe(
      map(articles => 
        articles.filter(article => 
          article.author.toLowerCase().includes(author.toLowerCase())
        )
      )
    );
  }

  /**
   * Obtiene estadísticas del blog
   */
  public getBlogStats(): Observable<{
    totalArticles: number;
    totalAuthors: number;
    lastUpdated: string;
    mostRecentArticle: BlogArticle | null;
  }> {
    return this.articles$.pipe(
      map(articles => {
        const authors = new Set(articles.map(article => article.author));
        const sortedArticles = articles.sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        return {
          totalArticles: articles.length,
          totalAuthors: authors.size,
          lastUpdated: this.indexSubject.value?.lastUpdated || '',
          mostRecentArticle: sortedArticles[0] || null
        };
      })
    );
  }

  /**
   * Actualiza el índice del blog
   */
  public refreshIndex(): void {
    this.loadBlogIndex();
  }

  /**
   * Verifica si un artículo existe
   */
  public articleExists(slug: string): Observable<boolean> {
    return this.getArticleBySlug(slug).pipe(
      map(article => article !== null)
    );
  }
}