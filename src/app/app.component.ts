import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite:true
  };

  like={
    isLiked:true,
    likeCount:1
  };

  onChange( eventArgs:  FavoriteNewValue){
    console.log('The change has been done!', eventArgs.newValue);
  }
}

export interface FavoriteNewValue{
  newValue: boolean;
}
