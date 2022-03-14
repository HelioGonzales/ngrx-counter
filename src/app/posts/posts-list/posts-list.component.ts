import { getPosts } from './../state/posts.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Post } from 'src/app/models/posts.model';

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
}
