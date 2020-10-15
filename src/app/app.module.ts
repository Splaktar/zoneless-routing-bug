import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter.component";

const routes: Routes = [
  { path: "", redirectTo: "/counter", pathMatch: "full" },
  { path: "counter", component: CounterComponent },
  { path: "counter2", component: CounterComponent },
];

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
