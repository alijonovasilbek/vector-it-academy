
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICourse } from '@models/shared/i-course';
import { Observable, of } from 'rxjs';

export interface IcoursesResponse{
    purchased:ICourse[],
    others:ICourse[]
}

const res:IcoursesResponse={
    purchased:[{
         id: '1',
            name: 'Angular 1',
            desc: 'Description for Angular 1 that created by John Doe Description for Angular 1 that created by John Doe Description for Angular 1 that created by John Doe Description for Angular 1 that created by John Doe Description for Angular 1 that created by John DoevDescription for Angular 1 that created by John DoeDescription for Angular 1 that created by John Doe',
            mentorId: 'm1',
            mentorName: 'Mentor 1',
            imgSrc: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80YWI1YjNjOTg2MmZjOTFlNTFlMmU2ZjY5YTY2ZTk5Mz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.vn16SpUv_a299JVQYFcyqEx22Z2eknMUgaL2l2ilARU',
            
            links: [],
            tariffs: [],
            lessons: []
    }],
    others:[{
         id: '2',
            name: 'React 1',
            desc: 'Description forDescription for Angular 1 that created by John DoeDescription for Angular 1 that created by John DoeDescription for Angular 1 that created by John DoeDescription for Angular 1 that created by John Doe React 1 that created by John Doe',
            mentorId: 'm1',
            mentorName: 'Mentor 2',
            imgSrc: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80YWI1YjNjOTg2MmZjOTFlNTFlMmU2ZjY5YTY2ZTk5Mz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.vn16SpUv_a299JVQYFcyqEx22Z2eknMUgaL2l2ilARU',
            
            links: [],
            tariffs: [],
            lessons: []
    },
    
     {
        id: '3',
        name: 'Vue 1',
        desc:'Description for Vue 1 thDescription for Angular 1 that created by John DoeDescription for Angular 1 that created by John DoeDescription for Angular 1 that created by John DoeDescription for Angular 1 that created by John Doeat created by John Doe',
        mentorId:'m4',
        mentorName:"Umar",
        imgSrc:'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80YWI1YjNjOTg2MmZjOTFlNTFlMmU2ZjY5YTY2ZTk5Mz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.vn16SpUv_a299JVQYFcyqEx22Z2eknMUgaL2l2ilARU',
        links: [],
        tariffs: [],
        lessons: []
     }

]
}

@Injectable({providedIn: 'root'})
export class StudentsService {
    httpClient$=inject(HttpClient);

    getAllCourses():Observable<{ purchased:ICourse[],others:ICourse[]}> {
        return of(res)
        //  this.httpClient$.get<{ purchased:ICourse[],others:ICourse[]}>('api');
    }
}