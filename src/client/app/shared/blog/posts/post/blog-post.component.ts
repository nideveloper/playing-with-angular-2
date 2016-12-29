import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';
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
    
    constructor(public blogPostService:BlogService, private _sanitizer: DomSanitizer) {}

    public trustHtml(html:string) : SafeHtml {
       return this._sanitizer.bypassSecurityTrustHtml(html);
    }

    ngOnInit() {
        this.blogPostService.getPost(this.id)
            .subscribe(
                (post) => {this.post = post;},
                error => this.errorMessage = <any>error
            );
    }

}