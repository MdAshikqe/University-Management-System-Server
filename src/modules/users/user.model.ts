import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt"
import config from "../../app/config";
const userSchema= new Schema<TUser>({
            password:{type:String,unique:true},
            needsPasswordChange:{type:Boolean,default:true},
            roll:{
                type:String,
                enum:{
                    values:['student','faculty','admin'],
                    message:'{VALUE} is not a valid'
                },
                
            },
            status:{
                type:String,
                enum:{
                    values:['In-progess','blocked'],
                },
                default:'In-progess'
            },
            isDeleted:{type:Boolean,default:false}
},
{
    timestamps:true
},
);
userSchema.pre('save',async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user= this;
    user.password=await bcrypt.hash(
        user.password,
        Number(config.bcyrpt_salt_round)
    );
    next();
    
});
userSchema.post('save',function (doc,next){
        // eslint-disable-next-line no-unused-expressions
        doc.password='',
        next();
})

export const userModel= model<TUser>('User',userSchema)