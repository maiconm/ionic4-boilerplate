import { Component, OnInit } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.scss'],
})
export class RxjsTestComponent implements OnInit {
  protected colection = new ReplaySubject<string>(10);
  constructor() { }

  public ngOnInit() {
  }

  protected initRxjsFn(): void {
    interval(1000).pipe(take(10))
      .subscribe(
        () => {
          this.colection.next('🔴');
        },
        () => this.colection.next('error'),
        () => this.colection.next('done')
      );
  }
}
