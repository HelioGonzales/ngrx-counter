import { loadPosts } from './../state/posts.actions';
import { getPosts } from './../state/posts.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Post } from 'src/app/models/posts.model';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts$!: Observable<Post[]>;
  // sorting: any[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);

    this.store.dispatch(loadPosts());

    // EN EL TRABAJO SE HIZO EL SORTING USANDO NEW DATE AND GET DATA Y ASIGANANDO BIEN EL ARRAY QUE ESTABA DENTRO  DE UN OBJETO
    //   this.store.select(getPosts).subscribe((data) => {
    //     for (let i in data) {
    //       this.sorting.push(data[i]);
    //     }
    //   });

    //   this.sorting.sort(function (a, b) {
    //     return b.id - a.id;
    //   });
    //   console.log(this.sorting);
  }

  onDeletePost(id: any) {
    if (confirm('Are you sure you  want to delete')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
