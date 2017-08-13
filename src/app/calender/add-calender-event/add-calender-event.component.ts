import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';


declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'app-add-calender-event',
  templateUrl: './add-calender-event.component.html',
  styleUrls: ['./add-calender-event.component.css']
})
export class AddCalenderEventComponent implements OnInit {
event:any = {};

  constructor(private router : Router,private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe((params: Params) =>{
      this.event.start = params;
      console.log('params---',this.event);
    })

   }

  ngOnInit() {
    var event={ title: 'shiva event' , start:  new Date()};

    $('.cat__apps__calendar').fullCalendar( 'updateEvent', event, true);

  }

}
