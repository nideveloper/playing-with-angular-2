import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../index';
import { TwitterService } from '../service/twitter.service';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ni-twitter-stream',
  templateUrl: 'twitter.component.html',
  providers: [TwitterService],
  styleUrls: []
})
export class NITwitterComponent { 
    errorMessage: string;
    tweets: Tweet[];

    constructor(public tweetService:TwitterService) {}

    ngOnInit() {
        this.getTweets();
    }

    /**
    *  Call the twitter service 
    */
    getTweets() {
        this.tweetService.get()
            .subscribe(
                tweets => this.tweets = tweets,
                error => this.errorMessage = <any>error
            );
    }
}
