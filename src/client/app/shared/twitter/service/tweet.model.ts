import { Injectable } from '@angular/core';
import { TwitterUser } from './twitter-user.model';

@Injectable()
export class Tweet{
    public created_at:string;
    public id:string;
    public id_str:string;
    public text:string;
    public truncated:boolean;
    public entities:any;
    public source:string;
    public in_reply_to_status_id:number;
    public in_reply_to_status_id_str:string;
    public in_reply_to_user_id:number;
    public in_reply_to_user_id_str:string;
    public in_reply_to_screen_name:string;
    public user:TwitterUser;
}