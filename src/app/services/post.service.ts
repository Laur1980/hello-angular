import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class PostService {

  private url='http://jsonplaceholder.typicode.com/posts';
  private post: Http;

  constructor(post: Http) {
  }

  public getHttp(){
    return this.post;
  }

  public getUrl(){
    return this.url;
  }

}
