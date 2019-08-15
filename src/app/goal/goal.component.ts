import { Component, OnInit } from '@angular/core';
import { Goal } from'../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  goals:Goal[] = [
   new Goal(1,'Watch finding Nemo','Find an online version and watch merlin find his son',new Date(2019,9,9)),
   new Goal(2, 'Buy cookies', 'I have to buy cookies for the parrot',new Date(2019,11,12)),
   new Goal(3, 'Get a new phone case','diana has her birthay coming up soon',new Date(2019,10,14)),
   new Goal(4,'Get Dog food','pupper likes expensive snacks',new Date(2019,7,28)),
   new Goal(5,'Solve math homework','Damn math',new Date(2019,2,14)),
   new Goal(6,'Plot my world domination plan','Cause Im an evil overlord',new Date(2019,3,14)),
  ];
 
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  // completeGoal(isComplete, index){
  //   if(isComplete){
  //     this.goals.splice(index,1);
  //   }
  // }
  deleteGoal(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  constructor() { }

  ngOnInit() {
  }

}
