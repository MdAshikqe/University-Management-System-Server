
import { studentServices } from "./student.service";
import catchAsync from "../../app/Utils/catchAsyance";
import httpStatus from "http-status";

const getAllStudentController= catchAsync(
    
    async(req,res)=>{
      
            const result= await studentServices.getAllStudentIntoDB()
            res.status(httpStatus.OK).json({
            success:true,
            message:"All Student find successfully!",
            data:result
        }) 
    }    
)

const getSingleStudentController=catchAsync( async(req,res)=>{
    
    const {studentID}= req.params;
const result= await studentServices.getSingleStudentIntoDB(studentID)
res.status(200).json({
    success:true,
    message:"Student are find successfully!",
    data:result
})
})


const deleteSingleStudentController= catchAsync(async(req,res)=>{

    const {studentID}=req.params;
const result= await studentServices.deleteSingleStudentIntoDB(studentID)
res.status(httpStatus.OK).json({
    success:true,
    message:"Student are deleted successfully!",
    data:result
})

})

export const studentController={
    getAllStudentController,
    getSingleStudentController,
    deleteSingleStudentController,
}