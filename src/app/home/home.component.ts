import { Component, OnInit, trigger, state, style, transition, animate,keyframes} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
       		animate(300, keyframes([
	        	style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
	        	style({opacity: 1, transform: 'translateX(25px)',  offset: 0.3}),
	        	style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
	      	]))
      ]),
      transition('* => void', [
            animate(300, keyframes([
	        	style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
	        	style({opacity: 1, transform: 'translateX(-25px)', offset: 0.7}),
	        	style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
	      	]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
	date: Date = new Date();

  	constructor() { }

  	ngOnInit() {
  		
  	}
}
