import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from'../goal';
@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input() goal:Goal;
  @Output() isComplete = new EventEmitter<boolean>();//output decorator defines isComplete as an event emitter that takes in a boolean

  // goalComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }
  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
