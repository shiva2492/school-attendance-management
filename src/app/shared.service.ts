import { Injectable, EventEmitter} from '@angular/core';





@Injectable()
export class SharedService {
  onMainEvent: EventEmitter<any> = new EventEmitter();
}