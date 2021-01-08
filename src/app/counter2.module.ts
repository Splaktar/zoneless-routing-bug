import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Counter2Component } from './counter2.component';

const routes: Routes = [
  { path: "", component: Counter2Component },
];

@NgModule({
  declarations: [Counter2Component],
  imports: [RouterModule.forChild(routes)],
})
export class Counter2Module {}
