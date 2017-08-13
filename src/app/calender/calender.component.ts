import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SharedService } from '../providers/shared.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {IMyDpOptions} from 'mydatepicker';
import  { DatabaseService } from '../providers/database.service';
import * as moment from 'moment';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})


export class CalenderComponent implements OnInit {
schedule:any;
newEvent:any;
closeResult: string;
model: any={};
@ViewChild("calendarContent") private calendarModal: TemplateRef<any>;
dialog: any;
calenderEvents:any=[];
private myDatePickerInlineOptions: IMyDpOptions = {
        inline: true,
        disableUntil: {year: 0, month: 0, day: 0},
        disableDays: [{year: 0, month: 0, day: 0}],
        showWeekNumbers: true,
        selectorHeight: '232px',
        selectorWidth: '252px'
    };

  constructor(private service: SharedService,private routes: Router,private modalService: NgbModal,private db: DatabaseService) { 
     
     this.service.onMenuEvent.emit(true);
     this.service.onHeaderEvent.emit(true);
     this.resetModel();
          
  }

  ngOnInit() {
     var mythis = this;
     //mythis.schedule = $;
     mythis.schedule = $('.cat__apps__calendar').fullCalendar({
        //aspectRatio: 2,
        height: 800,
        header: {
          left: 'prev, next',
          center: 'title',
          right: 'month, agendaWeek, agendaDay'
        },
        buttonIcons: {
          prev: 'none fa fa-arrow-left',
          next: 'none fa fa-arrow-right',
          prevYear: 'none fa fa-arrow-left',
          nextYear: 'none fa fa-arrow-right'
        },
        defaultDate: new Date(),
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        viewRender: function(view, element) {
          if (!(/Mobi/.test(navigator.userAgent)) && jQuery().jScrollPane) {
            $('.fc-scroller').jScrollPane({
              autoReinitialise: true,
              autoReinitialiseDelay: 100
            });
          }
        },
        events: (start, end, timezone, callback)=> {
        // mythis.service.getEvents()
        // .subscribe(res => callback(res));
         mythis.db.getList('student/calender/')
        //  .$ref
        //  .on("child_added",(res)=>{
        //     console.log('child added---',res.val());
           
        //       mythis.calenderEvents.push(res.val());
              
        //     callback(mythis.calenderEvents);
        //    // mythis.schedule.fullCalendar('refetchEvents')  
        //   })
            .subscribe(res => { callback(res)})
        },
        eventClick: function(calEvent, jsEvent, view) {
          if (!$(mythis).hasClass('event-clicked')) {
            $('.fc-event').removeClass('event-clicked');
            $(mythis).addClass('event-clicked');
          }
        },
        dayClick: function(date) {
                mythis.open(mythis.calendarModal,date);                 
            }
      });

       
  }

  addNewEvent(date){
      var sd = new Date(date);
      var ed = new Date(date);
      console.log('added event called');
      //setting time for start date
      sd.setHours(this.model.start_date.hour);
      sd.setMinutes(this.model.start_date.minute);
      this.model.start_date = sd.toString().slice(0,24);
      //this.model.start_date.format('YYYY-MM-DDTHH:mm:ss');
      //setting time for end date
      
      ed.setHours(this.model.end_date.hour);
      ed.setMinutes(this.model.end_date.minute);
      this.model.end_date = ed.toString().slice(0,24);
      //this.model.end_date.format('YYYY-MM-DDTHH:mm:ss');

      this.newEvent = new Object();
      this.newEvent.title = this.model.event_name;
      this.newEvent.start = this.model.start_date;
      this.newEvent.end = this.model.end_date;
      this.newEvent.allDay = false;
      this.newEvent.subject = this.model.subject;
      this.newEvent.feedback = this.model.feedback;
      //this.newEvent.className = 'fc-event-danger';

      this.db.pushData('student/calender/',this.newEvent)
      .then((res)=>{
        
        // console.log('calender event---',res);
        // this.db.getList('student/calender/')
        //    .subscribe(res => {
        //      console.log(res);
        //      this.schedule.fullCalendar({
        //         events:res
        //       })
        //    })
        
        //$('.cat__apps__calendar').fullCalendar('refetchEvents');
        this.dialog.dismiss();
        window.location.reload();
      },(err)=>{
        console.log(err);
      })


      // this.service.postEvents(this.newEvent)
      //   .subscribe(res => {
      //     console.log('success',res)
      //     $('.cat__apps__calendar').fullCalendar('refetchEvents');
      //     // this.service.getEvents().subscribe((res)=>{
      //     //   console.log('done');
      //     // })
      // },err => console.log('error',err));
    
  }

open(content,date) {
    this.dialog = this.modalService.open(content);
    this.dialog.date=date;
  }


  print(){
   
   this.addNewEvent(this.dialog.date);
  //  this.dialog.dismiss();
   console.log('input ----',this.model);
  }

resetModel(){
     this.model.event_name='';
     this.model.start_date=null;
     this.model.end_date=null;
     this.model.subject='';
     this.model.feedback='';
}
  

}
