import catchAsync from "../../app/Utils/catchAsyance";
import { AcademicSemesterServices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async(req,res)=>{

    const result= await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body)



res.status(200).json({
    success:true,
    message:"Academic semester created successfully!",
    data:result,
})
})

export const AcademicSemesterController={
    createAcademicSemester,
}

