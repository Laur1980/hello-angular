import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { AlreadyExistingError } from '../common/alreadyBadInputError-existing-error';
import { BadInputError } from '../common/bad-input';

@Injectable()
export class PostService {

  private url='http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }

  public getPosts(){
    return this.http.get(this.url);
  }

  public createPost(post){
    return this.http.post(this.url,JSON.stringify(post))
    .catch((error: Response) => {
      if(error.status === 400){
        return Observable(new BadInputError(error))
      }
      return new Observable.throw(new AppError(error));
    });
  }

  public updatePost(post){
    return this.http.patch(this.url+'/'+post.id,JSON.stringify(post));
  }

  public delete(id){
    return this.http.delete(this.url+'/'+id)
      .catch((error: AppError) => {
          if(error instanceof NotFoundError)
              return Observable.throw(new NotFoundError(error));
          return Observable.throw(new AppError(error));
      });
  }

}
