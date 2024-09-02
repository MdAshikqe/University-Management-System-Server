
import { StudentModel } from "./student.model"

// const createStudentIntoDB= async(student:TStudent)=>{
//     const result= await StudentModel.create(student)
//     return result;
// }
const getAllStudentIntoDB= async ()=>{
    const result= await StudentModel.find()
    return result

}

const getSingleStudentIntoDB= async(id:string)=>{
    const result= await StudentModel.aggregate([
        {$match: {id}}
    ])
    return result;
}

const deleteSingleStudentIntoDB= async(id:string)=>{
    const result= await StudentModel.updateOne({id},{isDeleted:true});
    return result;
}

export const studentServices= {
    getAllStudentIntoDB,
    getSingleStudentIntoDB,
    deleteSingleStudentIntoDB,
}