import { Injectable } from '@angular/core';
import { Goal} from '../goal'
import { goals } from '../goals';
//imported goals array into the service class
@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return goals
    //   [ new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2018,3,14) ),
    //   new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2018,6,9) ),
    //   new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,11,12) ),
    //   new Goal(4, 'Get Dog Food','Pupper likes expensive sancks',new Date(2018,0,18) ),
    //   new Goal(5, 'Solve math homework','Damn Math',new Date(2018,2,14) ),
    //   new Goal(6, 'Plot my world domination plan','Cause I am an evil overlord',new Date(2018,3,14) ),
    // ];
  }
  getGoal(id){
    for (let goal of goals){
      if (goal.id == id){
        return goal;
      }
    }
  }
//created a method getGoals() which returns our Goals array
  constructor() { }
}
