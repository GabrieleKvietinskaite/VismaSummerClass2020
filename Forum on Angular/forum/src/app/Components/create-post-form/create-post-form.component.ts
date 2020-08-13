import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../Services/post.service';
import { Router } from '@angular/router';
import { IPost } from 'src/app/Models/post';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css']
})
export class CreatePostFormComponent implements OnInit {
  createPostForm = this.fb.group({
    author: ['', Validators.required],
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    public postService: PostService) { }

  ngOnInit() {
  }

  onSubmit() {
    const post: IPost = {
      author: this.createPostForm.controls.author.value,
      date: new Date().toLocaleDateString('LT'),
      title: this.createPostForm.controls.title.value,
      content: this.createPostForm.controls.content.value,
      tags: [],
      views: 0,
      answers: 0,
      votes: 0
    };

    this.postService.createPost(post).subscribe(res => {
      console.log('Post created!')
      this.router.navigateByUrl("/");
    })
  }
}
