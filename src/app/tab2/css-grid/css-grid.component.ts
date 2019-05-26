import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-grid',
  templateUrl: './css-grid.component.html',
  styleUrls: ['./css-grid.component.scss'],
})
export class CssGridComponent implements OnInit {
  public elements = [
    '💩', '🔥', '🐒', '🌊', '😎', '🐂', '😼', '🍴', '⚡',
  ];
  constructor() { }

  public ngOnInit() {}

}
