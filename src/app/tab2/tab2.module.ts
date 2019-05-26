import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { CssGridComponent } from './css-grid/css-grid.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page
  },
  {
    path: 'css-grid',
    component: CssGridComponent
  }
];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CssGridComponent,
    Tab2Page
  ]
})
export class Tab2PageModule {}
