import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('slideInOutLeft', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('600ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(-100%)'}),
        animate('600ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('600ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {

  transition:string = 'leave';

  constructor() { }

  ngOnInit() {
  
  }

  test(){
    this.transition = this.transition === 'leave' ? 'enter' : 'leave';
    console.log (this.transition)
  }
 
}
