import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'recommendation-component',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({transform: 'translateX(-50%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-50%)'}))
      ])
    ]),
    trigger('slideOut', [
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(50%)'}))
      ])
    ])
  ]
})
export class RecommendationComponent implements OnInit {

  constructor() {   
   }
  
  public enter = false;
  public leave = true;
  private timer: Observable<any>;
  private typewriter_line1: string = "Hello welcome to Code Space!";
  private typewriter_line2: string = "Wondering where to start?";
  private typewriter_line3: string = "Tell us more about yourself and we can begin:";
  
  ngOnInit() {
    this.setTimer();
  }

  setTimer(){
    setTimeout(() => { this.leave = false; }, 8500);
    this.delayedTimer();
  }

  delayedTimer(){
    setTimeout(() => { this.enter = true; }, 9200);
  }
}
