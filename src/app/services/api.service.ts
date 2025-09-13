import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export const API_URI = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public userEmitter = new BehaviorSubject(null);
  public userObservable = this.userEmitter.asObservable();

  constructor(private _http: HttpClient) {}

  /** GET REQUEST */
  public get(url: string, guest: boolean = false): Observable<any> {
    return this._http.get(`${API_URI}/${url}`, this._getOptions(guest));
  }

  /** POST REQUEST */
  public post(
    url: string,
    params: any,
    guest: boolean = false
  ): Observable<any> {
    return this._http.post(
      `${API_URI}/${url}`,
      params,
      this._getOptions(guest)
    );
  }

  /** PUT REQUEST */
  public put(
    url: string,
    params: any,
    guest: boolean = false
  ): Observable<any> {
    return this._http.put(`${API_URI}/${url}`, params, this._getOptions(guest));
  }

  /** DELETE REQUEST */
  public delete(url: string, guest: boolean = false): Observable<any> {
    return this._http.delete(`${API_URI}/${url}`, this._getOptions(guest));
  }

  /** HTTP HEADERS */
  private _getOptions(guest: boolean = false) {
    let token: string | null = !!guest
      ? environment.apiToken
      : localStorage.getItem('token');

    let httpOptions = {
      headers: new HttpHeaders({
        observe: 'response',
        responseType: 'json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return httpOptions;
  }

  private _getBlobOptions(guest: boolean = false) {
    let token: string | null = !!guest
      ? environment.apiToken
      : localStorage.getItem('token');

    let httpOptions = {
      Authorization: `Bearer ${token}`,
    };
    return httpOptions;
  }

  public getImage(url: string, guest: boolean = false): Observable<any> {
    return this._http.get(`${API_URI}/${url}`, {
      headers: this._getBlobOptions(guest),
      responseType: 'blob',
    });
  }
}
