import { Component, OnInit, ɵmarkDirty } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  template: `
    <div>
      <a class="buffer-right" routerLink="/counter">Counter</a>
      <a routerLink="/counter2">Counter 2</a>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => ɵmarkDirty(this));
  }
}
