import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './Components/main/main.component';
import { CreatePostFormComponent } from './Components/create-post-form/create-post-form.component';
import { UpdatePostFormComponent } from './components/update-post-form/update-post-form.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'create',
    component: CreatePostFormComponent
  },
  {
    path: 'update/:id',
    component: UpdatePostFormComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }