import { Component, OnInit } from '@angular/core';

interface IEmoji {
  emoji: string;
  name: string;
}

@Component({
  selector: 'app-css-grid',
  templateUrl: './css-grid.component.html',
  styleUrls: ['./css-grid.component.scss'],
})
export class CssGridComponent implements OnInit {
  public emojis: IEmoji[] = [
    {
      emoji: '💩',
      name: 'pile of poo'
    },
    {
      emoji: '🔥',
      name: 'fire'
    },
    {
      emoji: '🐒',
      name: 'monkey'
    },
    {
      emoji: '🌊',
      name: 'wave'
    },
    {
      emoji: '😎',
      name: 'smile sunglass'
    },
    {
      emoji: '🐂',
      name: 'ox'
    },
    {
      emoji: '😼',
      name: 'cat'
    },
    {
      emoji: '🍴',
      name: 'fork & knife'
    },
    {
      emoji: '⚡',
      name: 'bolt'
    }
  ];
  constructor() { }

  public ngOnInit() {}

}
