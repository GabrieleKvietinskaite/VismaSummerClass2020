import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PostService } from 'src/app/Services/post.service';
import { IPost } from 'src/app/Models/post.interface';
import { ConstantsService } from 'src/app/Helpers/constants.service';
import { HelpersService } from 'src/app/Helpers/helpers.service';

@Component({
  selector: 'app-update-post-form',
  templateUrl: './update-post-form.component.html',
  styleUrls: ['./update-post-form.component.scss']
})
export class UpdatePostFormComponent implements OnInit {
  private post: IPost;
  private id = this.activatedRoute.snapshot.params['id'];
  private updatePostForm = this.fb.group({
    author: ['', Validators.required],
    title: ['', Validators.required],
    content: ['', Validators.required],
    tags: this.fb.array([])
  });

  get tags() {
    return this.updatePostForm.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private postService: PostService,
              private constants: ConstantsService,
              private helpers: HelpersService) { }

  ngOnInit() {
    this.postService.getPost(this.id).subscribe((data: IPost) => {
      this.post = data;
      this.updatePostForm.patchValue({
        author: this.post.author,
        title: this.post.title,
        content: this.post.content
      });
      this.post.tags.forEach(tag => {
        this.addTag(tag);
      })
    })
  }

  createTag() {
    this.tags.push(this.fb.control('', Validators.required));
  }

  addTag(tag){
    this.tags.push(this.fb.control(tag, Validators.required));
  }

  deleteTag(index) {
    console.log(this.tags);
    this.tags.removeAt(index);
  }

  onSubmit() {
    const updatePostFormControls = this.updatePostForm.controls;

    const updatedPost: IPost = {
      author: updatePostFormControls.author.value,
      date: this.constants.today,
      title: updatePostFormControls.title.value,
      content: updatePostFormControls.content.value,
      tags: updatePostFormControls.tags.value,
      views: 0,
      answers: 0,
      votes: 0,
      id: this.post.id
    };

    this.postService.updatePost(this.id, updatedPost).subscribe(data => {
      this.helpers.navigateHome();
    })
  }

  deletePost(){
    this.postService.deletePost(this.id).subscribe(data => {
      this.helpers.navigateHome();
    })
  }
}