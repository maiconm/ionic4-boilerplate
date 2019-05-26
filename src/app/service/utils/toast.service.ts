import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) { }

  public async createToast(messageNotification: string, isError: boolean): Promise<void> {
    const toastColor = isError ? 'danger' : 'success';
    const toast = await this.toastCtrl.create({
      message: messageNotification,
      duration: 5000,
      color: toastColor
    });
    toast.present();
  }
}
