import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Post } from './blog-post.model';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class BlogPostService {

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  generateFalsePost(id:string):Post {
      let post:Post = new Post();
      post.id = id;
      post.name = 'This is a test';

      return post;
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  get(): Observable<Post[]> {
      let posts:Post[] = new Array();
      posts.push(this.generateFalsePost('1'));
      posts.push(this.generateFalsePost('2'));
      posts.push(this.generateFalsePost('3'));
      posts.push(this.generateFalsePost('4'));
      posts.push(this.generateFalsePost('5'));
      return Observable.of(posts);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}