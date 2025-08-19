import { IUser } from "../shared/i-user";

export interface IStudent extends IUser{
    telegram_username?:string;
    phone?:string;
    birth_year?:number;
    owned_courses?:string[]; 
    status?:any;
}







