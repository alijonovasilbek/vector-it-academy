import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: "app-root",
  imports: [ RouterOutlet],
  template: `

    <router-outlet></router-outlet>


  `,
  styles: [],
})
export class App  {
  

}
