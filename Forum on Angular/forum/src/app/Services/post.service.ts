import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { IPost } from '../Models/post';

@Injectable({ providedIn: 'root' })
export class PostService {

  private apiServer = "http://localhost:4200/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.apiServer + '/posts/')
    .pipe(
      catchError(this.handleError)
    )
  }

  getPost(id): Observable<IPost> {
    return this.httpClient.get<IPost>(this.apiServer + '/posts/' + id)
    .pipe(
      catchError(this.handleError)
    )
  }

  createPost(post): Observable<IPost> {
    return this.httpClient.post<IPost>(this.apiServer + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  } 
  
  updatePost(id, post): Observable<IPost> {
    return this.httpClient.put<IPost>(this.apiServer + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }
  
  private handleError(error: HttpResponse<Error>) {
    return throwError(error);
}
}