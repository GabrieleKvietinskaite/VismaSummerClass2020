import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { IPost } from 'src/app/Models/post.interface';
import { PostService } from '../../Services/post.service';
import { ConstantsService } from 'src/app/Helpers/constants.service';
import { HelpersService } from 'src/app/Helpers/helpers.service';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css']
})
export class CreatePostFormComponent {
  private createPostForm = this.fb.group({
    author: ['', Validators.required],
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private helpers: HelpersService,
              private postService: PostService,
              private constants: ConstantsService) { }

  onSubmit() {
    const createPostFormControls = this.createPostForm.controls;

    //Kurį būdą geriau naudoti?
    const post: IPost = {
      author: this.helpers.getFormFieldValue(createPostFormControls.author), //šį
      date: this.constants.today,
      title: createPostFormControls.title.value, //ar šį
      content: createPostFormControls.content.value,
      tags: [],
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