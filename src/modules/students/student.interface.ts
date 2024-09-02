import { Types } from "mongoose";

export type TUserName = {
    firstName: string;
    middleName?: string;
    lastName: string;
  };

export type TGuardain = {
    fatherName: string;
    fatherOccopation?: string;
    fatherContactNo: string;
    motherName: string;
    motherOccopation?: string;
    motherContactNo: string;
  };
  export type TLocalGuardain = {
    name: string;
    occupation?: string;
    contactNo: string;
    address: string;
  };


export type TStudent = {
    id: string;
    user:Types.ObjectId;
    name: TUserName;
    email: string;
    gender: 'male' | 'female'|'other';
    dateOfBirth: Date;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
    parmentAddress: string;
    guardain: TGuardain;
    localGuradain: TLocalGuardain;
    profileImg?: string;
    admissionSemester:Types.ObjectId;
  };