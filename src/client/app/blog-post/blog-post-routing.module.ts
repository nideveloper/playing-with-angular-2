import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPostComponent } from './component/blog-post.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'blog/post/:id', component: BlogPostComponent }
    ])
  ],
  exports: [RouterModule]
})
export class BlogPostRoutingModule { }
