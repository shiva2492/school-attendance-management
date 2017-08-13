import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../providers/shared.service';
import { DatabaseService } from '../../../providers/database.service';

@Component({
  selector: 'app-new-leave-system',
  templateUrl: './new-leave-system.component.html',
  styleUrls: ['./new-leave-system.component.css']
})
export class NewLeaveSystemComponent implements OnInit {

  constructor(private service: SharedService,private db: DatabaseService) { 

    this.service.onMenuEvent.emit(true);
    this.service.onHeaderEvent.emit(true);
  }

  ngOnInit() {
  }

}
