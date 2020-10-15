import { Component, OnDestroy, OnInit, ɵmarkDirty } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { skip, take, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-counter",
  template: `
    <h1>Counter</h1>
    <div>
      <button class="buffer-right" (click)="countSubject.next(count + 1)">
        Increment
      </button>
      <button (click)="countSubject.next(count - 1)">Decrement</button>
    </div>
    <p>Count: {{ count }}</p>
  `,
})
export class CounterComponent implements OnInit, OnDestroy {
  private destroy = new Subject();

  countSubject = new BehaviorSubject(0);
  count: number;

  ngOnInit() {
    this.countSubject.pipe(takeUntil(this.destroy)).subscribe((count) => {
      this.count = count;
      ɵmarkDirty(this);
    });
  }

  /** workaround **/
  // ngOnInit() {
  //   this.countSubject.pipe(take(1)).subscribe(count => this.count = count);
  //   this.countSubject.pipe(skip(1), takeUntil(this.destroy)).subscribe(count => {
  //     this.count = count;
  //     ɵmarkDirty(this);
  //   });
  // }

  ngOnDestroy() {
    this.destroy.next();
  }
}
