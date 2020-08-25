import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

import { IPost } from 'src/app/Models/post.interface';
import { PostService } from '../../Services/post.service';
import { ConstantsService } from 'src/app/Helpers/constants.service';
import { HelpersService } from 'src/app/Helpers/helpers.service';
import { PostFormService } from 'src/app/Services/post-form-service';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.scss']
})
export class CreatePostFormComponent {
  private createPostForm = this.postFormService.generateEmptyFrom();

  get tags() {
    return this.createPostForm.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder,
              private helpers: HelpersService,
              private postService: PostService,
              private constants: ConstantsService,
              private postFormService: PostFormService) { }

  public createTag() {
    this.tags.push(this.fb.control('', Validators.required));
  }

  public deleteTag(index) {
    this.tags.removeAt(index);
  }

  public onSubmit() {
    const createPostForm = this.createPostForm.getRawValue();
    const post: IPost = {
      author: createPostForm.author,
      date: this.constants.today,
      title: createPostForm.title,
      content: createPostForm.content,
      tags: createPostForm.tags,
      views: 0,
      answers: 0,
      votes: 0,
      id: null
    };

    this.postService.createPost(post).subscribe(res => {
      this.helpers.navigateHome();
    })
  }
}