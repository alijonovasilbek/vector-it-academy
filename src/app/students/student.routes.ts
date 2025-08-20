import { Route, Routes } from '@angular/router';

export default [
    {
        path: '',
        pathMatch:"full",
       loadComponent: () => import('./students').then(m => m.StudentsComponent)
    },
    {
        path:'course-item',
        loadComponent: () =>  import('../shared/components/course-item/course-item').then(m => m.CourseItemComponent)   ,
    }

] as Routes;