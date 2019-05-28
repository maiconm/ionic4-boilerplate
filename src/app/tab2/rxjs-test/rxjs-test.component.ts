import { Component, OnInit } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';
import { take, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.scss'],
})
export class RxjsTestComponent implements OnInit {
  /**
   * Replay subject collection string.
   */
  protected colection = new ReplaySubject<string[]>(10);

  constructor() { }

  /**
   * Presets config for component.
   */
  public ngOnInit() {
  }

  protected initRxjsFn(): void {
    let strArray: string[];
    strArray = [];
    strArray = ['1'];
    let num: number;
    num = +strArray[0];
    strArray[0] = `${num}`;
    strArray[0] = `123`;
    strArray[0] = '' + 123;
    strArray.map(x => x + 1);
    interval(1000)
      .pipe(
        take(50),
        map(() => strArray.push('🔴')),
      ).subscribe(
        () => this.colection.next(strArray)
      );
  }
}
