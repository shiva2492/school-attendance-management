import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SharedService } from '../providers/shared.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../providers/database.service';

declare var $: any;
declare var jQuery: any;
declare var autosize: any;
declare var Ladda: any;
declare var Chartist: any;


@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  constructor(private router: Router,private auth: AuthService,private service: SharedService ,private db:DatabaseService){

      db.getObject('users').subscribe(res => {
          console.log('allUsers--',res);
          //this.userList = res;
        });
     this.service.onMenuEvent.emit(false);
     this.service.onHeaderEvent.emit(true);
  }

   logout(){
    
    this.auth.signOut();
  }

ngOnInit() {

$( function() {

  ///////////////////////////////////////////////////////////
  // load flappy bird
  $(function(){

    function loadGame() {
      $('#hidden-game').attr('src', $('#hidden-game').attr('load-src'));
    }

    $('#duck-game .card-header').on('dblclick', function(){
      loadGame();
    });

    $('#duck-game .cat__core__sortable__uncollapse').on('click', function(){
      loadGame();
    });

  });

  ///////////////////////////////////////////////////////////
  // tooltips
  $("[data-toggle=tooltip]").tooltip();

  ///////////////////////////////////////////////////////////
  // jquery ui sortable
  $('#left-col, #right-col, #bottom-col').each(function(){
    $(this).sortable({
      // connect left and right containers
      connectWith: '.cat__core__sortable',
      tolerance: 'pointer',
      scroll: true,

      // set initial order from localStorage
      create: function () {

        var that = $(this),
          id = $(this).attr('id'),
          orderLs = localStorage.getItem('order-' + id);

        if (orderLs) {
          var order = orderLs.split(',');

          $.each(order, function(key, val){
            var el = $('[order-id=' + val + ']');
            that.append(el);
          });
        }

      },

      // save order state on order update to localStorage
      update: function () {
        var orderArray = $(this).sortable('toArray', {attribute: 'order-id'}),
          prefix = $(this).attr('id');

        localStorage.setItem('order-' + prefix, orderArray);
      },

      // handler
      handle: ".card-header"
    });
  });

  ///////////////////////////////////////////////////////////
  // reset dashboard
  $('.reset-button').on('click', function(){
    localStorage.removeItem('order-left-col');
    localStorage.removeItem('order-right-col');
    localStorage.removeItem('order-bottom-col');
    setTimeout(function () {
      location.reload();
    }, 500)
  });

  ///////////////////////////////////////////////////////////
  // card controls
  $('.cat__core__sortable__collapse, .cat__core__sortable__uncollapse').on('click', function(){
    $(this).closest('.card').toggleClass('cat__core__sortable__collapsed');
  });
  $('.cat__core__sortable__close').on('click', function(){
    $(this).closest('.card').remove();
    $('.tooltip').remove();
  });

  // header double click
  $('.cat__core__sortable .card-header').on('dblclick', function() {
    $(this).closest('.card').toggleClass('cat__core__sortable__collapsed');
  });


} );

}
}
