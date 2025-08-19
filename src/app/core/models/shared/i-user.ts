import { Roles } from "./role";

export interface IUser {
    id: string;
    username:string;
    first_name:string;
    last_name:string;
    signing_date?:Date;
    email?:string;
    role:Roles[];
    password?:string;
}