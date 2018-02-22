import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[];

  constructor(private service: PostService) {
    this.http = http;
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    this.http.post(this.url,JSON.stringify(post))
    .subscribe(response => {
      input.value='';
      console.log(response.json());
      post['id'] = response.json().id;
      this.posts.splice(0,0,post);
    });

  }

  updatePost(post){
    //this.http.put(this.url,post);
    this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead:true}))
        .subscribe(response => {
            console.log(response.json());
        });
  }

  deletePost(post){
    this.http.delete(this.url+'/'+post.id)
        .subscribe(response => {
          console.log(response.json());
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
        });
  }

  ngOnInit() {
    this.http.get(this.url)
        .subscribe(response => {
          this.posts = response.json();
        });
  }

}
