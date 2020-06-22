import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { TasksModel } from '../models';

const urlApi = 'https://us-central1-hateno-94ef8.cloudfunctions.net/';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private http: HTTP,
    public toastController: ToastController
  ) { }

  public async getTasks(): Promise<TasksModel> {
    const today = new Date();
    let month = (today.getUTCMonth() + 1).toString();
    const day = today.getUTCDate();
    const year = today.getUTCFullYear().toString();

    if (month.length < 2) {
      month = `0${month}`;
    }

    const url = `${urlApi}weekTasksSlider`;
    const body = { 'date-time': `${year}-${month}-${day}` };
    const headers = { 'Content-Type': 'application/json' };

    try {
      const tasks = await this.http.post(url, body, headers);
      return tasks.data;
    } catch (error) {
      this.errorToast(error.message || error);
    }

    /*
    return {
      weekdaysTasks: [
        {
          date: 'Fri Jun 19 2020 20:41:31 GMT+0000 (UTC)',
          weekday: 'F',
          tasks: {
            cookingTask: 'Rachel',
            dishwashingTask: 'Gustavo'
          }
        },
        {
          date: 'Sat Jun 20 2020 20:41:31 GMT+0000 (UTC)',
          weekday: 'S',
          tasks: {
            cookingTask: 'Nestor',
            dishwashingTask: 'Rachel'
          }
        },
        {
          date: 'Sun Jun 21 2020 20:41:31 GMT+0000 (UTC)',
          weekday: 'S',
          tasks: {
            cookingTask: 'Gustavo',
            dishwashingTask: 'Nestor'
          }
        },
        {
          date: 'Mon Jun 22 2020 20:41:31 GMT+0000 (UTC)',
          weekday: 'M',
          tasks: {
            cookingTask: 'Rachel',
            dishwashingTask: 'Gustavo'
          }
        },
        {
          date: 'Tue Jun 23 2020 20:41:31 GMT+0000 (UTC)',
          weekday: 'T',
          tasks: {
            cookingTask: 'Nestor',
            dishwashingTask: 'Rachel'
          }
        },
        {
          date: 'Wed Jun 24 2020 20:41:31 GMT+0000 (UTC)',
          weekday: 'W',
          tasks: {
            cookingTask: 'Gustavo',
            dishwashingTask: 'Rachel'
          }
        },
        {
          date: 'Thu Jun 25 2020 20:41:31 GMT+0000 (UTC)',
          weekday: 'T',
          tasks: {
            cookingTask: 'Rachel',
            dishwashingTask: 'Nestor'
          }
        }
      ]
    };
    */
  }

  private async errorToast(message: string) {
    const toast = await this.toastController.create({
      message: 'Credentials are invalid',
      duration: 3000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }
}
