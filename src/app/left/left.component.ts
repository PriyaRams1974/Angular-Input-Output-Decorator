import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor() { }

  @Input('subjectChild') subjectChild1 : any;
  @Input('data') receivedData : any;

  @Output() userData = new EventEmitter<number>();

  ngOnInit(): void {
  }
  generateRandomNo(){
    const randomno = Math.random();
    this.userData.emit(randomno);
  }


}
