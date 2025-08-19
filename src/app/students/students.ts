import { Component, OnInit } from '@angular/core';
import { StudentCoursesComponent } from "./student-courses/student-courses";


@Component({
    selector: 'app-students',
    template: `


  <student-courses></student-courses>


    `,
    imports: [StudentCoursesComponent],
    standalone: true
})

export class StudentsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}