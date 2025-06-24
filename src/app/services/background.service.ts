import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private backgroundSubject = new BehaviorSubject<string>('background1');
  background$ = this.backgroundSubject.asObservable();

  setBackground(background: string) {
    this.backgroundSubject.next(background);
  }
}
