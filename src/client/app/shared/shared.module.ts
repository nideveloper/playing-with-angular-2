import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { NameListService } from './name-list/index';
import { LatestBlogPostsComponent, BlogPostCategoriesComponent, SimilarBlogPostsComponent, BlogPostComponent , CategoryBlogPostsComponent} from './blog/index';
import { NITwitterComponent } from './twitter/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ToolbarComponent, NavbarComponent, NITwitterComponent, LatestBlogPostsComponent, BlogPostCategoriesComponent, SimilarBlogPostsComponent, BlogPostComponent, CategoryBlogPostsComponent],
  exports: [ToolbarComponent, NavbarComponent,
    CommonModule, FormsModule, RouterModule, NITwitterComponent, LatestBlogPostsComponent, BlogPostCategoriesComponent, SimilarBlogPostsComponent, BlogPostComponent, CategoryBlogPostsComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
