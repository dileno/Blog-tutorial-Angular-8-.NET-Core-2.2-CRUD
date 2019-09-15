import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostAddEditComponent } from './blog-post-add-edit/blog-post-add-edit.component';
import { BlogPostService } from './services/blog-post.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostsComponent,
    BlogPostComponent,
    BlogPostAddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    BlogPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
