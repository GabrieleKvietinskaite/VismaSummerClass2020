import { Component, OnInit, OnDestroy } from '@angular/core';

import { IPost } from 'src/app/Models/post.interface';
import { PostService } from 'src/app/Services/post.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {
  private posts: IPost[] = [];
  private destroy$ = new Subject();

  constructor(private postService: PostService) { }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public ngOnInit() {
    this.postService.getPosts().pipe(takeUntil(this.destroy$)).subscribe((data: IPost[]) => {
      this.posts = data;
    })
  }
}