import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.html',
    standalone: true,
    imports: [MatToolbar,
    MatIconModule, MatButtonModule, MatBadgeModule,RouterLink]
})

export class NavbarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}