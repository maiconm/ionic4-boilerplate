import { Component, OnInit } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

/**
 * RxjsTest component. RxJS sample test.
 */
@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.scss'],
})
export class RxjsTestComponent implements OnInit {
  /**
   * Replay subject collection string.
   * Displayed in the DOM.
   */
  protected colection = new ReplaySubject<string[]>(10);

  constructor() { }

  /**
   * Presets config for component.
   */
  public ngOnInit() {
  }
  /**
   * Subscribe to the observable
   * pushing new elements to the array.
   */
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
