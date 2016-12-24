import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogCategoryComponent } from './component/category.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'blog/category/:id', component: BlogCategoryComponent }
    ])
  ],
  exports: [RouterModule]
})
export class BlogCategoryRoutingModule { }
