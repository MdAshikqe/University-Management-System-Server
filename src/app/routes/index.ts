import { Router } from "express";
import { UserRoutes } from "../../modules/users/user.routes";
import { StudentRoutes } from "../../modules/students/student.routes";
import { AcademicSemesterRoutes } from "../../modules/academicSemester/academicSemester.routes";

const router=Router()
const moduleRoutes= [
    {
        path:'/users',
        route:UserRoutes
    },
    {
        path:'/students',
        route:StudentRoutes
    },
    {
        path:'/academic-semesters',
        route:AcademicSemesterRoutes,
    },
]

moduleRoutes.forEach(route=>router.use(route.path,route.route))


export default router;