import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/counter", pathMatch: "full" },
  { path: "counter", loadChildren: () => import('./counter.module').then(mod => mod.CounterModule), },
  { path: "counter2", loadChildren: () => import('./counter2.module').then(mod => mod.Counter2Module), },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
