import { Injectable, EventEmitter} from '@angular/core';





@Injectable()
export class SharedService {
  onMenuEvent: EventEmitter<any> = new EventEmitter();
  onHeaderEvent: EventEmitter<any> = new EventEmitter();
}