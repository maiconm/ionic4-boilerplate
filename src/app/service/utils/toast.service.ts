import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

/**
 * Manages toast messages.
 */
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  /**
   * Ionic's toast manager.
   */
  constructor(private toastCtrl: ToastController) { }
  /**
   * Creates a toast with message.
   * @param messageNotification Message.
   * @param isError Is it an error? (`true`: red toast; `false`: green toast).
   * @returns `Promise` and execute the toast.
   */
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
