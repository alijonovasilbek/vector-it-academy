import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { ICourse } from '@models/shared/i-course';

@Component({
    selector: 'app-course-item',
    templateUrl: 'course-item.html',
    standalone: true,
    imports: [MatCardModule, MatButtonModule,MatIcon,MatTooltipModule],
    styles: [`
      .example-card {
        max-width: 400px;
      }
      .example-header-image {
        background-image: url('https://material.angular.dev/assets/img/examples/shiba2.jpg');
        background-size: cover;
      }
    `]
})

export class CourseItemComponent implements OnInit {
    @Input() item!: ICourse;
    @Input() purchased: boolean = false;

    ngOnInit() { }
}