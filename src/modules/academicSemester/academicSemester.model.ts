import { Schema, model } from "mongoose";
import { TAcademicSemester} from "./academicSemester.interface";
import { AcademicSemesterCode, AcademicSemesterName, Months } from "./academicSemester.constants";




const academicSemesterSchema= new Schema<TAcademicSemester>({
    name:{
        type:String,
        enum:{
            values:AcademicSemesterName,
        },
        required:true,
    },
    code:{
        type:String,
        enum:{
            values:AcademicSemesterCode,
        },
        required:true,
    },
    year:{type:String,required:true},

    startMonth:{
        type:String,
        enum:{
            values:Months
        },
        required:true,
    },
    endMonth:{
        type:String,
        enum:{
            values:Months
        },
        required:true,
    }

},
{
    timestamps:true
},
)

academicSemesterSchema.pre('save', async function (next) {
    const isSemesterExits= await AcademicSemesterModel.findOne({
        year:this.year,
        name:this.name
    });
    if(isSemesterExits){
        throw new Error('Semester is already exits !')
    }
    next()
    
})

//create a model with Schema
export const AcademicSemesterModel= model<TAcademicSemester>('AcademicSemester',academicSemesterSchema)