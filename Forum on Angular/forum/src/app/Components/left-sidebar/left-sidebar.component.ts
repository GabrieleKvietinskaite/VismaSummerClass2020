import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSideBarComponent {
  constructor(private router: Router) { }

  redirectToCreateForm() {
    this.router.navigateByUrl('create');
  }
}