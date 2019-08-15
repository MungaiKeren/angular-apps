export class Goal {
    showDescription: boolean;
    constructor(public id:number,public name: string,public description: string,public completeDate: Date){
        this.showDescription = false;//this says that the description should not be displayed
        //this keyword gives the show description property class access
    }
}
 //public keyword is an access modifier.
 //determines where class properties are visible. in our case, outside the class
//constructor function enables us to define 
//the initialization logic for creating a function.