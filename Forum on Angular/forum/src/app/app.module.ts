import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LeftSideBarComponent } from './Components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './Components/right-sidebar/right-sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { CreatePostFormComponent } from './Components/create-post-form/create-post-form.component';
import { UpdatePostFormComponent } from './components/update-post-form/update-post-form.component';
import { ConstantsService } from './Helpers/constants.service';
import { HelpersService } from './Helpers/helpers.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSideBarComponent,
    RightSidebarComponent,
    FooterComponent,
    MainComponent,
    PostComponent,
    PostsListComponent,
    CreatePostFormComponent,
    UpdatePostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConstantsService, HelpersService],
  bootstrap: [AppComponent]
})
export class AppModule { }