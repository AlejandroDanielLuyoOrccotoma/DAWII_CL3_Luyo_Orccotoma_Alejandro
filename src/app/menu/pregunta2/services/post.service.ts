import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) { }

  getCommentsWithDomain(domain: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl).pipe(
      map(comments => comments.filter(comment => comment.email.endsWith(`@${domain}`)))
    );
  }
}
