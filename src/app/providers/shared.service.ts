import { Injectable, EventEmitter} from '@angular/core';
import { HttpModule, Http } from '@angular/http';


@Injectable()
export class SharedService {
  onMenuEvent: EventEmitter<any> = new EventEmitter();
  onHeaderEvent: EventEmitter<any> = new EventEmitter();
  userSession:any={};
  constructor(public http:Http){

  }

   getEvents()  {
        return this.http.get('http://localhost:3000/calender_events.json')
       // return this.http.get('https://4549acb6.ngrok.io/calender_events.json')
          .map(res => res.json() || []);
    }

    postEvents(data){
      return this.http.post('http://localhost:3000/',data)
       //return this.http.post('https://4549acb6.ngrok.io/',data)
          .map(res => res.json() || []);
    }
}