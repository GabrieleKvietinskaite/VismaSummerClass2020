import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService { 
  public apiServer = "http://localhost:4200/api";
  public today = new Date().toLocaleDateString('LT');
}