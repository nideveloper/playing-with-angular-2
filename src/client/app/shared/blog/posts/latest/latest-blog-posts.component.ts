import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { Post } from '../../service/blog-post.model'
import * as moment from 'moment';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ni-latest-blog-posts',
  templateUrl: 'latest-blog-posts.component.html',
  providers: [BlogService],
  styleUrls: []
})
export class LatestBlogPostsComponent { 
    public posts:Post[];
    public errorMessage:string;
    
    constructor(public blogPostService:BlogService) {}

    ngOnInit() {
        this.blogPostService.getLatestPosts()
            .subscribe(
                (posts) => {this.posts = posts},
                error => this.errorMessage = <any>error
            );
    }

}
