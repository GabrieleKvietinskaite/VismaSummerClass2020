import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { IPost } from '../Models/post.interface';
import { ConstantsService } from '../Helpers/constants.service';

@Injectable({ providedIn: 'root' })
export class PostService {
  private apiServer: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient,
              private constants: ConstantsService) {
    this.apiServer = this.constants.apiServer;
  }

  public getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.apiServer + '/posts/')
                          .pipe(catchError(this.handleError))
  }

  public getPost(id): Observable<IPost> {
    return this.httpClient.get<IPost>(this.apiServer + `/posts/${id}`)
                          .pipe(catchError(this.handleError))
  }

  public createPost(post): Observable<IPost> {
    return this.httpClient.post<IPost>(this.apiServer + '/posts/', post, this.httpOptions)
                          .pipe(catchError(this.handleError))
  } 
  
  public updatePost(id, post): Observable<IPost> {
    return this.httpClient.put<IPost>(this.apiServer + `/posts/${id}`, post, this.httpOptions)
                          .pipe(catchError(this.handleError))
  }

  public deletePost(id){
    return this.httpClient.delete<IPost>(this.apiServer + `/posts/${id}`, this.httpOptions)
                          .pipe(catchError(this.handleError))
  }
  
  private handleError(error: HttpResponse<Error>) {
    return throwError(error);
  }
}