import { Component, inject, OnInit } from '@angular/core';
import { CourseItemComponent } from '../../shared/components/course-item/course-item';
import { IcoursesResponse, StudentsService } from '@students/services/students.service';

@Component({
    selector: 'student-courses',
    templateUrl: 'student-courses.html',
    imports: [CourseItemComponent],
    standalone: true
})

export  class StudentCoursesComponent implements OnInit {
    studentService=inject(StudentsService);

    allCourses?: IcoursesResponse;

    ngOnInit() { 
        this.studentService.getAllCourses().subscribe((courses)=>{
            this.allCourses=courses;
        });
    }
    }