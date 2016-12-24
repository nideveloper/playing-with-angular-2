import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './component/blog-post.component';
import { BlogPostRoutingModule } from './blog-post-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, BlogPostRoutingModule, SharedModule],
  declarations: [BlogPostComponent],
  exports: [BlogPostComponent]
})
export class BlogPostModule { }
