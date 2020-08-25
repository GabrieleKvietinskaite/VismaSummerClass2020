import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class PostFormService {

  constructor(private fb: FormBuilder) { }

  public generateEmptyFrom(){
    return this.fb.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      tags: this.fb.array([])
    });
  }
}