import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar';

@Component({
    selector: 'classic-layout',
    template: `
     <app-navbar></app-navbar>

    <main class="p-3">
      <router-outlet />
    </main>
    `,
    standalone: true,
    imports: [RouterOutlet, NavbarComponent]
})

export class ClassicComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}