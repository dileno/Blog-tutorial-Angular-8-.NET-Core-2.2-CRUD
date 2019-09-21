import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../services/blog-post.service';
import { BlogPost } from '../models/blogpost';
import slugify from 'slugify';
import uniqueSlug from 'unique-slug';
import { delimiter } from 'path';

@Component({
  selector: 'app-blog-post-add-edit',
  templateUrl: './blog-post-add-edit.component.html',
  styleUrls: ['./blog-post-add-edit.component.scss']
})
export class BlogPostAddEditComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formTitle: string;
  formBody: string;
  postId: number;
  slug: string;
  errorMessage: any;
  existingBlogPost: BlogPost;
  delimiter: string;

  constructor(private blogPostService: BlogPostService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const slugParam = 'slug';
    this.actionType = 'Add';
    this.formTitle = 'title';
    this.formBody = 'body';
    this.delimiter = '-';

    if (this.avRoute.snapshot.params[slugParam]) {
      this.slug = this.avRoute.snapshot.params[slugParam];
    }

    this.form = this.formBuilder.group(
      {
        postId: 0,
        title: ['', [Validators.required]],
        body: ['', [Validators.required]],
      }
    );
  }

  ngOnInit() {
    if (this.slug !== '' && typeof this.slug !== 'undefined') {
      this.actionType = 'Edit';
      this.blogPostService.getBlogPost(this.slug)
        .subscribe(data => (
          this.existingBlogPost = data,
          this.form.controls[this.formTitle].setValue(data.title),
          this.form.controls[this.formBody].setValue(data.body)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      const postTitle = this.form.get(this.formTitle).value;

      const blogPost: BlogPost = {
        dt: new Date(),
        creator: 'Martin',
        title: postTitle,
        body: this.form.get(this.formBody).value,
        slug: slugify(postTitle, { lower: true, replacement: this.delimiter }) + this.delimiter + uniqueSlug()
      };

      this.blogPostService.saveBlogPost(blogPost)
        .subscribe((data) => {
          this.router.navigate(['/blogpost', data.slug]);
        });
    }

    if (this.actionType === 'Edit') {
      const postTitle = this.form.get(this.formTitle).value;
      const existingUniqueSlug = this.existingBlogPost.slug.substr(this.existingBlogPost.slug.lastIndexOf(this.delimiter) + 1);
      const postSlug = slugify(postTitle, { lower: true, replacement: this.delimiter }) + this.delimiter + existingUniqueSlug;

      const blogPost: BlogPost = {
        postId: this.existingBlogPost.postId,
        dt: this.existingBlogPost.dt,
        creator: this.existingBlogPost.creator,
        title: postTitle,
        body: this.form.get(this.formBody).value,
        slug: postSlug
      };

      this.blogPostService.updateBlogPost(blogPost.postId, blogPost)
        .subscribe(() => {
          this.router.navigate(['/blogpost/edit', blogPost.slug]);
        });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  get title() { return this.form.get(this.formTitle); }
  get body() { return this.form.get(this.formBody); }
}
