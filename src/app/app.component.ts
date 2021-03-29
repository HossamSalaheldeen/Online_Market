import { Component } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('router', [
      transition('0 => 1, 1 => 0 , 0 => 2 , 2 => 0 , 1 => 2 , 2 => 1, 3 => 4 , 4 => 3, 0 => 3, 3 => 0, 1 => 3, 3 => 1, 0 => 4, 4 => 0, 1 => 4 , 4 => 1', [
        group([
          query(':enter',[
            style({
              transform: "translate(100%)"
            }),
            animate(500, style({
              transform: "translate(0)"
            }))
          ]),
          query(':leave', [
            style({
              transform: "translate(0)"
            }),
            animate(500, style({
              transform: "translate(-100%)"
            }))
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  
}
