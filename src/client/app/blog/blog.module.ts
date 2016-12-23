import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './component/blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, BlogRoutingModule, SharedModule],
  declarations: [BlogComponent],
  exports: [BlogComponent]
})
export class BlogModule { }
