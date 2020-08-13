import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';
import { IPost } from 'src/app/Models/post';

@Component({
  selector: 'app-update-post-form',
  templateUrl: './update-post-form.component.html',
  styleUrls: ['./update-post-form.component.css']
})
export class UpdatePostFormComponent implements OnInit {
  post: IPost;
  id = this.actRoute.snapshot.params['id'];
  updatePostForm = this.fb.group({
    author: ['', Validators.required],
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    public actRoute: ActivatedRoute,
    public postService: PostService) { }

  ngOnInit() {
    this.postService.getPost(this.id).subscribe((data: IPost) => {
      this.post = data;
      this.updatePostForm.patchValue({
        author: this.post.author,
        title: this.post.title,
        content: this.post.content
      });
    })
  }

  onSubmit() {
    const updatedPost: IPost = {
      author: this.updatePostForm.controls.author.value,
      date: new Date().toLocaleDateString('LT'),
      title: this.updatePostForm.controls.title.value,
      content: this.updatePostForm.controls.content.value,
      tags: [],
      views: 0,
      answers: 0,
      votes: 0,
      id: this.post.id
    };

    this.postService.updatePost(this.id, updatedPost).subscribe(data => {
      this.router.navigate(['/'])
    })
  }

  deletePost(){
    this.postService.deletePost(this.id).subscribe(data => {
      this.router.navigate(['/'])
    })
  }
}
