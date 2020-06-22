import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs';

const urlApi = 'https://us-central1-hateno-94ef8.cloudfunctions.net/';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private http: HTTP
  ) { }

  public async getTasks(): Promise<any> {
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

    // try {
    //   const tasks = this.http.post(url, body, headers);
    //   console.log('tasks', tasks);
    //   return tasks;
    // } catch (error) {
    //   console.log('error', error);
    // }

    // const url = `${urlApi}weekTasksSlider`;
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ 'date-time': `${year}-${month}-${day}` })
    // };

    // fetch(url, requestOptions)
    //   .then(async response => {
    //     const data = await response.json();
    //     const dates = data.weekdaysTasks;
    //   })
    //   .catch(error => {
    //     console.error('Error at componentDidMount:', error);
    //   });

    return {
      weekdaysTasks: [
        {
          date: '2020-5-18',
          tasks: {
            cookingTask: 'Nestor',
            dishwashingTask: 'Gustavo'
          }
        },
        {
          date: '2020-5-19',
          tasks: {
            cookingTask: 'Gustavo',
            dishwashingTask: 'Rachel'
          }
        },
        {
          date: '2020-5-20',
          tasks: {
            cookingTask: 'Rachel',
            dishwashingTask: 'Gustavo'
          }
        },
        {
          date: '2020-5-21',
          tasks: {
            cookingTask: 'Nestor',
            dishwashingTask: 'Rachel'
          }
        },
        {
          date: '2020-5-22',
          tasks: {
            cookingTask: 'Gustavo',
            dishwashingTask: 'Nestor'
          }
        },
        {
          date: '2020-5-23',
          tasks: {
            cookingTask: 'Rachel',
            dishwashingTask: 'Gustavo'
          }
        },
        {
          date: '2020-5-24',
          tasks: {
            cookingTask: 'Nestor',
            dishwashingTask: 'Rachel'
          }
        }
      ]
    };
  }
}
