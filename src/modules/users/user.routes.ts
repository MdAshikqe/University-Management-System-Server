import { usercontroller } from "./user.controller";
import { zodStudentValidation } from "../students/students.zod.validation";
import ValidateRequest from "../../app/middleWares/validatedRequest";
import { Router } from "express";


const router= Router();



router.post('/create-student',ValidateRequest(zodStudentValidation.CreateZodStudentValidationSchema),usercontroller.createStudentController)

export const UserRoutes= router;