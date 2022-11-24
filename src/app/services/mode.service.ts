import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  constructor() { }

  $isDarkMode = new EventEmitter<boolean>();

  isDark = new Subject<boolean>();

  setDarkMode(isDarkMode: boolean) {
    this.$isDarkMode.emit(isDarkMode);
    localStorage.setItem('isDarkMode', isDarkMode.toString());
    this.isDark.next(isDarkMode);
  }

  getDarkMode(): Observable<boolean> {
    return this.isDark.asObservable();
  }


}
