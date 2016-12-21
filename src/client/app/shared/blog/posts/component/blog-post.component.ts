import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../service/blog-post.service';
import { Post } from '../service/blog-post.model'
import * as moment from 'moment';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ni-latest-blog-posts',
  templateUrl: 'blog-post.component.html',
  providers: [BlogPostService],
  styleUrls: []
})
export class BlogPostComponent { 
    public posts:Post[];
    public errorMessage:string;
    
    constructor(public blogPostService:BlogPostService) {}

    ngOnInit() {
        //do nothing
        this.blogPostService.getLatestPosts()
            .subscribe(
                (posts) => {this.posts = posts},
                error => this.errorMessage = <any>error
            );
    }

}
