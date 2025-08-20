import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { App } from '../../app';
import { NavbarComponent } from '../../shared/components/navbar/navbar';

@Component({
    selector: 'modern-layout',
    template: `
   <app-navbar></app-navbar>

    <main class="p-3">
      <router-outlet />
    </main>
    `,
    standalone: true,
    imports: [RouterOutlet,NavbarComponent]
})

export class ModernLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}