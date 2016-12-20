import { Injectable } from '@angular/core';

@Injectable()
export class TwitterUser{
    public id:number;
    public id_str:string;
    public name:string;
    public screen_name:string;
    public location:string;
    public description:string;
    public url:string;
}