import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="p-3">

    <router-outlet />
    </main>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('vector-it-academy');
}
