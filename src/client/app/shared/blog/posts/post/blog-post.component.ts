import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { Post } from '../../service/blog-post.model'
import * as moment from 'moment';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ni-blog-post',
  templateUrl: 'blog-post.component.html',
  providers: [BlogService],
  styleUrls: []
})
export class BlogPostComponent { 
    public post:Post;
    public errorMessage:string;

    @Input() id: number;
    
    constructor(public blogPostService:BlogService) {}

    ngOnInit() {
        console.log('id: '+ this.id);
        this.blogPostService.getPost(this.id)
            .subscribe(
                (post) => {this.post = post; console.log(post);},
                error => this.errorMessage = <any>error
            );
    }

}