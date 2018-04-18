import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
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
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
