import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IPost } from 'src/app/Models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input()
  private post: IPost;
  
  constructor(private router: Router) { }

  redirectToUpdateForm() {
    this.router.navigateByUrl(`/update/${this.post.id}`);
  }
}