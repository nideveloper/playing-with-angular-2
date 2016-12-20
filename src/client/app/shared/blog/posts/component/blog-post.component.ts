import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../service/blog-post.service';

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
    public posts:any[];
    public errorMessage:string;
    
    constructor(public blogPostService:BlogPostService) {}

    ngOnInit() {
        //do nothing
        this.blogPostService.get()
            .subscribe(
                posts => this.posts = posts,
                error => this.errorMessage = <any>error
            );
    }

}
