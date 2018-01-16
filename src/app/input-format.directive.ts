import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format') format:string;

  constructor(private el: ElementRef) {}

  @HostListener('blur') onFocus(){
    console.log("On Focus:focus!");
    let value: string = this.el.nativeElement.value;
    switch(this.format){
      case 'lowercase':this.el.nativeElement.value = value.toLowerCase();break;
      case 'uppercase':this.el.nativeElement.value = value.toUpperCase();
    }

  }
/*
  @HostListener('blur') onBlur(){
    console.log("On Focus:blur");
  }
*/


}
