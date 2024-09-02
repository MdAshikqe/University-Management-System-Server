import { Router } from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import ValidateRequest from "../../app/middleWares/validatedRequest";
import { academicSemesterValidation } from "./academicSemester.zod.validation";

const router= Router();

router.post('/create-academic-semester',ValidateRequest(academicSemesterValidation.createAcademicSemesterValidationSchema),AcademicSemesterController.createAcademicSemester)


export const AcademicSemesterRoutes=router;