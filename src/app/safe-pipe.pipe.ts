import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safeUrl'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(value: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value)
  }

}