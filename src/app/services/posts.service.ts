import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(
        `https://ngrx-counter-27367-default-rtdb.europe-west1.firebasedatabase.app/posts.json`
      )
      .pipe(
        map((data) => {
          const posts: Post[] = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }

  addPost(post: Post): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `https://ngrx-counter-27367-default-rtdb.europe-west1.firebasedatabase.app/posts.json`,
      post
    );
  }

  updatePost(post: Post) {
    const postData = {
      [post.id as string]: { title: post.title, description: post.description },
    };
    return this.http.patch(
      `https://ngrx-counter-27367-default-rtdb.europe-west1.firebasedatabase.app/posts.json`,
      postData
    );
  }

  deletePost(id: string) {
    return this.http.delete(
      `https://ngrx-counter-27367-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`
    );
  }
}
