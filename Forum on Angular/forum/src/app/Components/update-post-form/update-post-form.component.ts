import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { IPost } from 'src/app/Models/post.interface';
import { PostService } from 'src/app/Services/post.service';
import { ConstantsService } from 'src/app/Helpers/constants.service';
import { HelpersService } from 'src/app/Helpers/helpers.service';
import { PostFormService } from 'src/app/Services/post-form-service';

@Component({
  selector: 'app-update-post-form',
  templateUrl: './update-post-form.component.html',
  styleUrls: ['./update-post-form.component.scss']
})
export class UpdatePostFormComponent implements OnInit {
  private post: IPost;
  private id = this.activatedRoute.snapshot.params['id'];
  private updatePostForm = this.postFormService.generateEmptyFrom();

  get tags() {
    return this.updatePostForm.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private postService: PostService,
              private constants: ConstantsService,
              private helpers: HelpersService,
              public postFormService: PostFormService) { }

  public ngOnInit() {
    this.postService.getPost(this.id).pipe(take(1)).subscribe((data: IPost) => {
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

  public createTag() {
    this.tags.push(this.fb.control('', Validators.required));
  }

  public addTag(tag){
    this.tags.push(this.fb.control(tag, Validators.required));
  }

  public deleteTag(index) {
    console.log(this.tags);
    this.tags.removeAt(index);
  }

  public onSubmit() {
    const updatedPost = this.updatePostForm.getRawValue();

    this.postService.updatePost(this.id, updatedPost).subscribe(data => {
      this.helpers.navigateHome();
    })
  }

  public deletePost(){
    this.postService.deletePost(this.id).subscribe(data => {
      this.helpers.navigateHome();
    })
  }
}