import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
  animations: [
    trigger('slideInTop', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('700ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('700ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
  
})
export class NavbarComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {    
  }

}
