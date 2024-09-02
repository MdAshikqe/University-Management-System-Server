import {  z } from "zod";
import { AcademicSemesterCode, AcademicSemesterName, Months } from "./academicSemester.constants";



  const createAcademicSemesterValidationSchema = z.object({
    body:z.object({
            name: z.enum([...AcademicSemesterName] as [string, ...string[]], {
              required_error: "Name is required",
            }),
            code: z.enum([...AcademicSemesterCode] as [string, ...string[]], { 
              required_error: "Code is required",
            }),
            year: z.string(),
            startMonth: z.enum([...Months] as [string, ...string[]]),
            endMonth: z.enum([...Months] as [string, ...string[]])
    })
  })
  export const academicSemesterValidation={
    createAcademicSemesterValidationSchema
  }
  