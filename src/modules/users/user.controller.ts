
import catchAsync from "../../app/Utils/catchAsyance"
import { UserServices } from "./user.service"



const createStudentController= catchAsync(async(req,res)=>{
    
    const {password,student:studentData}= req.body
    const result=await UserServices.createStudentIntoDB(password,studentData)

res.status(200).json({
    success:true,
    message:"Student created successfully!",
    data:result
})

})
export const usercontroller={
    createStudentController,
}