import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-staff-booking',
  templateUrl: './staff-booking.component.html',
  styleUrls: ['./staff-booking.component.css']
})
export class StaffBookingComponent implements OnInit {

private searchData = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black'];

  constructor() { }

  ngOnInit() {
  }
  // onSelected(item: CompleterItem) {
  //   this.selectedColor = item? item.title: "";
    
  // }

}
