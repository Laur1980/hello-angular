import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: string, args?:any) {
    if(!value)
      return null;
    value=this.formatedValue(value);
    return value;
  }

  private formatedValue(value:string):string {
    let allWords = value.split(' ');
    let formatedValue='';
    for(let i=0;i<allWords.length;i++){

      let temp = allWords[i].toLowerCase();

      (i !== 0 && (temp === 'the' || temp === 'of'))?formatedValue+=(temp+' '):formatedValue+=(this.capitalizeFirstLetter(temp)+' ');
    }
    return formatedValue;
  }

  private capitalizeFirstLetter(temp:string):string {
    let formatedTemp = (temp.charAt(0)+'').toUpperCase()+temp.substring(1);
    return formatedTemp;
  }

}
