import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('isActive') isLiked:boolean;
  @Input('likes') likeCount:number;
  currentColorClass:string;
  @Output('change') change;

  constructor() {
    this.change = new EventEmitter();
    this.likeCount>0?this.currentColorClass ="heart-active":this.currentColorClass = "heart";
  }

  onClick(){
    this.isLiked = !this.isLiked;
    this.isLiked?this.currentColorClass = "heart-active":this.currentColorClass = "heart";
    this.isLiked?this.likeCount = 1:this.likeCount = 0;
    this.change.emit({isSelected:this.isLiked});
  }
  ngOnInit() {
  }

}
