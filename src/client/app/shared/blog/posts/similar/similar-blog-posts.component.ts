import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { Post } from '../../service/blog-post.model'
import * as moment from 'moment';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ni-similar-blog-posts',
  templateUrl: 'similar-blog-posts.component.html',
  providers: [BlogService],
  styleUrls: []
})
export class SimilarBlogPostsComponent { 
    public posts:Post[];
    public errorMessage:string;

    @Input() id: number;
    
    constructor(public blogPostService:BlogService) {}

    ngOnInit() {
        this.blogPostService.searchSimilarByID(this.id)
            .subscribe(
                (posts) => {this.posts = posts},
                error => this.errorMessage = <any>error
            );
    }

}
