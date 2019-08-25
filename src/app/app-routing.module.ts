import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { AboutComponent } from './about/about.component';
//imported goal and about component. Defined path for each route
import { NotFoundComponent } from './not-found/not-found.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';

const routes: Routes = [
  { path: 'goals', component: GoalComponent},
  { path: 'about', component: AboutComponent},
  { path: 'goals/:id', component: GoalDetailComponent},
  //id token allows us to pass a parameter to the route
  { path: '', redirectTo:"/goals", pathMatch:"full"},
  { path: '**', component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
