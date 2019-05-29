import { Component, OnInit } from '@angular/core';

interface IEmoji {
  /**
   * Emoji icon.
   */
  emoji: string;
  /**
   * Emoji name.
   */
  name: string;
}

/**
 * CssGrid component. CSS grid sample.
 */
@Component({
  selector: 'app-css-grid',
  templateUrl: './css-grid.component.html',
  styleUrls: ['./css-grid.component.scss'],
})
export class CssGridComponent implements OnInit {
  /**
   * Emoji collection.
   */
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
  /**
   * Presets config for component.
   */
  public ngOnInit() {}

}
