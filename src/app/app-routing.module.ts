import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincompComponent } from './maincomp/maincomp.component';
import { PilotcompComponent } from './pilotcomp/pilotcomp.component';

const routes: Routes = [
  { path: "pilot-program", component: PilotcompComponent },
  { path: "go-main/:id", component: MaincompComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
