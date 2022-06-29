import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(customPipe: any, ...args: any[]): unknown {
    return customPipe+"EGP";
  }

}
