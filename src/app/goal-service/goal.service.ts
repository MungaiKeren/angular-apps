import { Injectable } from '@angular/core';
import { Goal} from '../goal'
//imported goals array into the service class
@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goal
  }
//created a method getGoals() which returns our Goals array
  constructor() { }
}
