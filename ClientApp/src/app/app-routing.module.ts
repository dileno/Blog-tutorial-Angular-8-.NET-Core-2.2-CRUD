import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostAddEditComponent } from './blog-post-add-edit/blog-post-add-edit.component';

const routes: Routes = [
  { path: '', component: BlogPostsComponent, pathMatch: 'full' },
  { path: 'blogpost/:slug', component: BlogPostComponent },
  { path: 'add', component: BlogPostAddEditComponent },
  { path: 'blogpost/edit/:slug', component: BlogPostAddEditComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
