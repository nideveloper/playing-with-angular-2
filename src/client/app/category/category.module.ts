import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCategoryComponent } from './component/category.component';
import { BlogCategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, BlogCategoryRoutingModule, SharedModule],
  declarations: [BlogCategoryComponent],
  exports: [BlogCategoryComponent]
})
export class BlogCategoryModule { }
