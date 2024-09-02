export type TUser= {
    id:string;
    password:string;
    needsPasswordChange:boolean;
    roll:'student'|'faculty'|'admin';
    status:'In-progess'|'blocked';
    isDeleted:boolean;
}
