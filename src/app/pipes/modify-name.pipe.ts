
  import { PipeTransform, Pipe } from '@angular/core';

  @Pipe({
    name : 'modifyName'
  })

  export class ModifyNamePipe implements PipeTransform {

    constructor(){}

    transform( name : string): string {
      let nameModify = name.split(' ')[0][0].toUpperCase() + name.split(' ')[0].substr(1);

      return nameModify;
    }



  }
