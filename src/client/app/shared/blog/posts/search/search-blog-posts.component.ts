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
  selector: 'ni-search-blog-posts',
  templateUrl: 'search-blog-posts.component.html',
  providers: [BlogService],
  styleUrls: []
})
export class SearchBlogPostsComponent { 
    public posts:Post[];
    public category:Category;
    public errorMessage:string;

    @Input() public query: string;
    
    constructor(public blogPostService:BlogService) {}

    ngOnInit() {
        this.blogPostService.searchByQueryString(this.query)
            .subscribe(
                (posts) => {this.posts = posts},
                error => this.errorMessage = <any>error
            );
    }

}