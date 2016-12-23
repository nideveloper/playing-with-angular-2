import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { Category } from '../service/blog-category.model'
import * as moment from 'moment';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ni-blog-post-categories',
  templateUrl: 'blog-post-categories.component.html',
  providers: [BlogService],
  styleUrls: []
})
export class BlogPostCategoriesComponent { 
    public categories:Category[];
    public errorMessage:string;
    
    constructor(public blogPostService:BlogService) {}

    ngOnInit() {
        //do nothing
        this.blogPostService.getCategories()
            .subscribe(
                (categories) => {this.categories = categories},
                error => this.errorMessage = <any>error
            );
    }

}
