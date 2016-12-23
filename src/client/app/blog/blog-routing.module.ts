import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './component/blog.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'blog', component: BlogComponent }
    ])
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
