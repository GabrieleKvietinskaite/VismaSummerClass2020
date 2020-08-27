import { Component, OnInit, OnDestroy } from '@angular/core';

import { IPost } from 'src/app/Models/post.interface';
import { PostService } from 'src/app/Services/post.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { PostState } from 'src/app/Store/post.reducers';
import { Store, select } from '@ngrx/store';
import * as postActions from '../../Store/post.actions';
import { selectPosts } from 'src/app/Store/post.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$: Observable<IPost[]>;

  constructor(private postService: PostService,
              private store: Store<PostState>) { }

  public ngOnInit() {
    this.store.dispatch(postActions.loadPosts());
    this.posts$ = this.store.pipe(select(selectPosts));
  }
}