import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { CreatePostFormComponent } from './Components/create-post-form/create-post-form.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'create',
    component: CreatePostFormComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
