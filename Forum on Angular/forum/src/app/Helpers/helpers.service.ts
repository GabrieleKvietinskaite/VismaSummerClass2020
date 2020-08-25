import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HelpersService { 
  constructor(private router: Router) { }

  public navigateHome(){
    this.router.navigate(['/'])
  }
}