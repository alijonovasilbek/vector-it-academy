import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students';
import { AdminComponent } from './admin/admin';
import { MentorComponent } from './mentor/mentor';

export const routes: Routes = [
    { path:'students',component: StudentsComponent },
    { path:'mentor',component: MentorComponent },
    { path:'admin',component: AdminComponent }
];
