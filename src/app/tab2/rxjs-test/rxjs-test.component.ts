import { Component, OnInit } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.scss'],
})
export class RxjsTestComponent implements OnInit {
  protected colection = new ReplaySubject<string[]>(10);
  constructor() { }

  public ngOnInit() {
  }

  protected initRxjsFn(): void {
    let strArray: string[];
    strArray = [];
    interval(1000)
      .pipe(
        take(50),
        map(() => strArray.push('🔴')),
      ).subscribe(
        () => this.colection.next(strArray)
      );
  }
}
