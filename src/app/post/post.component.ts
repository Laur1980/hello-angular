import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { AlreadyExistingError } from '../common/already-existing-error';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[];

  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement){
    let post = {id:input.id,title: input.value};
    //this.http.post(this.url,JSON.stringify(post))\
    this.service.createPost(post)
    .subscribe(response => {
      input.value='';
      post['id'] = response.id;
      this.posts.splice(0,0,post);
    }, (error: Response) =>{
      if(error.status === 400){
          //this.form.setErrors(error.json());
        }else{
          alert('An unexpected error occured!');
        }

    });

  }

  updatePost(post){
    //this.http.put(this.url,post);
    //this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead:true}))
    this.service.updatePost(post)
        .subscribe(response => {
            console.log(response.json());
        }, (error: Response) =>{
          if(error.status === 404)
            alert('An unexpected error occured!');
        });
  }

  deletePost(post){
    //this.http.delete(this.url+'/'+post.id)
    this.service.delete(post.id)
        .subscribe(response => {
          console.log(response.json());
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
        }, (error:Response) =>{
          if(error instanceof NotFoundError){
            alert('This post has already been deleted!');
          }else{
              alert('An unexpected error occured!');
          }

        });
  }

  ngOnInit() {
    this.service.getPosts()
        .subscribe(response => {
          this.posts = response.json();
        }, (error:Response) =>{
          if(error instanceof Already)
          alert('An unexpected error occured!');
        });
  }

}
