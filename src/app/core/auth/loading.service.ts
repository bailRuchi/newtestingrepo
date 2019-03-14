import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  count: number = 0;
  @Output() loader: EventEmitter<boolean> = new EventEmitter();
  constructor(
  ) {
  }

  apiStart() {
    ++this.count;
    this.loader.emit(true);
  }

  apiEnd() {
    --this.count;
    if (!this.count) {
      this.loader.emit(false);
    }
  }

  errorOccured() {
    this.count = 0;
    this.loader.emit(false);
  }
}
