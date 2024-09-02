import { z } from "zod";

// Define Zod schemas for nested objects
const userNameValidationSchema = z.object({
    firstName: z.string().min(1).max(30),
    middleName: z.string().optional(),
    lastName: z.string().min(1).max(30)
  });
  
  const guardianValidationSchema = z.object({
    fatherName: z.string().min(1),
    fatherOccopation: z.string().optional(),
    fatherContactNo: z.string(),
    motherName: z.string().min(1),
    motherOccopation: z.string().optional(),
    motherContactNo: z.string(),
  });
  
  const localValidationSchema = z.object({
    name: z.string().min(1),
    occupation: z.string().optional(),
    contactNo: z.string().min(1),
    address: z.string().min(1),
  });
  
  // Define Zod schema for the main Student object
  const CreateZodStudentValidationSchema = z.object({
    body: z.object({
      // id: z.string().min(4).max(10),
      password:z.string().max(20),
     student: z.object({
      name: userNameValidationSchema,
      email: z.string().email(),
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.date().optional(),
      contactNo: z.string().min(1),
      emergencyContactNo: z.string().min(1),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
      presentAddress: z.string().min(1),
      parmentAddress: z.string().min(1),
      guardain: guardianValidationSchema,
      localGuradain: localValidationSchema,
      profileImg:z.string().optional(),
      admissionSemester:z.string(),
     })
    })
  })
  export const zodStudentValidation={
   CreateZodStudentValidationSchema
  };

