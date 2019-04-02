import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[image]',
  host: { '(error)': 'fixImageUrl()' }
})
export class ImageCheckDirective {
  constructor(private _el: ElementRef) {
    // console.log("********************")
  }
  fixImageUrl() {
    // console.log("**********fixImageUrlfixImageUrlfixImageUrl**********")

    this._el.nativeElement.src = '../assets/img/forms.svg';
  }
}
