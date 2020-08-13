import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { PostFormComponent } from './components/post-form/post-form.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'postForm',
    component: PostFormComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
