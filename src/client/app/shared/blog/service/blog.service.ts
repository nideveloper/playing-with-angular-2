import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Post } from './blog-post.model';
import { Category } from './blog-category.model';
// import 'rxjs/add/operator/do';  // for debugging

const API_ENDPOINT_V2 = 'https://enigmatic-headland-6062.herokuapp.com/v2/api/';
/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class BlogService {

  

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getLatestPosts(): Observable<Post[]> {
    return this.http.get(API_ENDPOINT_V2+'posts')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  getPost(id:number): Observable<Post> {
    return this.http.get(API_ENDPOINT_V2+'posts/'+id)
                    .map((res: Response) => res.json()[0])
                    .catch(this.handleError);
  }

  searchByQueryString(query:string): Observable<Post[]> {
    return this.http.get(API_ENDPOINT_V2+'search?query='+query)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  searchSimilarByID(id:number): Observable<Post[]> {
    return this.http.get(API_ENDPOINT_V2+'search?similar='+id)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  searchSimilarByCategoryID(id:number): Observable<Post[]> {
    return this.http.get(API_ENDPOINT_V2+'search?category='+id)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get(API_ENDPOINT_V2+'categories')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  getCategory(id:number): Observable<Category> {
    return this.http.get(API_ENDPOINT_V2+'categories/'+id)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
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