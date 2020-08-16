import { Component, OnInit } from '@angular/core';

import { IPost } from 'src/app/Models/post.interface';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  private posts: IPost[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((data: IPost[]) => {
      this.posts = data;
    })
  }
}