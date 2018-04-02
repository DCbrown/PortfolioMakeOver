import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

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
        animate('600ms ease-in', style({transform: 'translateX(-100%)'}))
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
    trigger('slideInTop', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('800ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('800ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  transition:string = 'leave';

  constructor() { }

  ngOnInit() {
    this.transition ='enter';
  
  }

}
