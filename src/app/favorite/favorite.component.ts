import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl:'./favorite.component.html',
  styleUrls:['./favorite.component.css'],
  styles: [
    `
    .gliphicon {
      color: blue;
    }

    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {

    @Input('is-favorite') isSelected: boolean;
    currentClass: string;
    @Output('change') change;

  constructor() {
    this.change = new EventEmitter();
    this.isSelected=false;
    this.currentClass="glyphicon glyphicon-star-empty";
  }

  onClick(){
    this.isSelected = !this.isSelected;
    this.isSelected?this.currentClass="glyphicon glyphicon-star":this.currentClass="glyphicon glyphicon-star-empty";
    this.change.emit({ newValue: this.isSelected });
  }

  ngOnInit() {
  }

}
