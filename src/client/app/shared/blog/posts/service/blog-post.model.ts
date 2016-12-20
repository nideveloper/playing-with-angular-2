import { Injectable } from '@angular/core';

@Injectable()
export class Post{
    public id:number;
    public name:string;
    public description:string;
    public date_added:string;
}