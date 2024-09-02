
import config from "../../app/config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { TStudent } from "../students/student.interface";
import { StudentModel } from "../students/student.model";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";

const createStudentIntoDB= async(password:string,studentData:TStudent)=>{
    //create a user object
    const userData:Partial<TUser>={};
    //create a password and set dafult password
    userData.password=password || (config.default_password as string);
    //set a roll
    userData.roll= 'student';

    //year semester code and 4 digit number
    const generateStudentId= (payload: TAcademicSemester)



    //create a id
    userData.id='2023010004';
    //create a user
    const newUser= await userModel.create(userData)
    //create student
    if(Object.keys(newUser).length){
        studentData.id= newUser.id      //ambaded id
        studentData.user= newUser._id  //referance id
        const newStudent= await StudentModel.create(studentData)
        return newStudent;
    }
}
export const UserServices={
    createStudentIntoDB,
}

