import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomno : number;
  subjectParent = [
   {
     id:1,name: "Priya"
   },
   {
    id:2,name: "Sumo"
  },
  {
    id:3,name: "Abhi"
  },

  ]
  getRandomNo(value: number){
     this.randomno = value;
  }

  title = 'input-output-decorator';
}
