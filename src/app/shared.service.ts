import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isActive = new BehaviorSubject<boolean>(false);
  isActive$ = this.isActive.asObservable();

  setIsActived(value: boolean) {
    this.isActive.next(value);
  }

  constructor() { }
}
