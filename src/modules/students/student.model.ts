import { Schema, model } from "mongoose";
import { TGuardain, TLocalGuardain, TStudent, TUserName } from "./student.interface";

const userNameSchema= new Schema<TUserName>({
    firstName:{
        type:String,required:[true,'First name is required'],
        trim:true
    },
    middleName:{
        type:String,
        trim:true
    },
    lastName:{
        type:String,required:[true,'Last name is required'],
        trim:true
    }
})

const guardinSchema=new Schema<TGuardain>({
    fatherName:{type:String,required:[true,'Father name is required'],trim:true},
    fatherOccopation:{type:String,trim:true},
    fatherContactNo:{type:String,required:[true,'Father contact number is required'],trim:true},
    motherName:{type:String,required:[true,'Mother name is required'],trim:true},
    motherOccopation:{type:String,trim:true},
    motherContactNo:{type:String,required:[true,'mother contact number is required'],trim:true},
})

const localGuradainSchema=new Schema<TLocalGuardain>({
    name:{type:String,required:[true,'Local Guardin name is required'],trim:true},
    contactNo:{type:String,required:[true,'Local Guardain contact number is required'],trim:true},
    address:{type:String,required:[true,'Local Guardain address is required'],trim:true},
    occupation:{type:String,trim:true}
})

const StudentSchema=new Schema<TStudent>({
    id:{type:String,required:[true,'Student ID is required'],trim:true,unique:true},
    user:{
      type:Schema.Types.ObjectId,
      required:[true,'User password is required'],
      unique:true,
      ref:'User'
    },
    name:{type:userNameSchema,required:[true,'Student field required']},
    email:{type:String,required:[true,'email is required'],trim:true,unique:true},
    gender:{type:String,enum:{values:['male', 'female','other'],message: '{VALUE} is not a valid gender'},required:true},
    dateOfBirth:{ type: Date},
    contactNo:{ type: String, required: [true, 'Contact number is required'] },
    emergencyContactNo:{ type: String, required: [true, 'Emergency contact number is required'] },
    bloodGroup:{
        type: String,
        enum: {
          values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
          message: '{VALUE} is not a valid blood group'
        },
      
      },
      presentAddress:{ type: String, required: [true, 'Present address is required'],trim:true },
      parmentAddress:{ type: String, required: [true, 'Permanent address is required'],trim:true },
      guardain:{type:guardinSchema,required:[true,'guardin field is requird']},
      localGuradain:{type:localGuradainSchema,required:[true,'Local guardin field is requird']},
      profileImg:{type:String},
      admissionSemester:{
        type: Schema.Types.ObjectId,
        ref: 'AcademicSemester'
      }
})


//aggigate
StudentSchema.pre('aggregate', function(next){
  this.pipeline().unshift({$match:{isDeleted:{$ne:true}}})
   next();
 
 })

//create a model with Schema
export const StudentModel= model<TStudent>('Student',StudentSchema)