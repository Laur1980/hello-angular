import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {

  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {

    if((control.value as string).indexOf(' ') >= 0){
      /*
      return { minLength: {
          requiredLength: 10,
          actualLength: control.value.length
      } };
      */
      return { cannotContainSpace: true};
    }

    return null;

  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'gogu'){
          resolve({shouldBeUnique:true});
        }else{
          return resolve(null);
        }
      },2000)
    });

  }

}