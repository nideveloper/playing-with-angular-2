import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { Post } from '../../service/blog-post.model'
import { Category } from '../../service/blog-category.model';
import * as moment from 'moment';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ni-category-blog-posts',
  templateUrl: 'category-blog-posts.component.html',
  providers: [BlogService],
  styleUrls: []
})
export class CategoryBlogPostsComponent { 
    public posts:Post[];
    public category:Category;
    public errorMessage:string;

    @Input() id: number;
    
    constructor(public blogPostService:BlogService) {}

    ngOnInit() {
        this.blogPostService.getCategory(this.id)
            .subscribe(
                (category) => {this.category = category; console.log('category loaded')},
                error => this.errorMessage = <any>error
            );

        this.blogPostService.searchSimilarByCategoryID(this.id)
            .subscribe(
                (posts) => {this.posts = posts},
                error => this.errorMessage = <any>error
            );
    }

}