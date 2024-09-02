import { Router } from 'express'
import { studentController } from './student.controller';

const router=Router();

router.get('/',studentController.getAllStudentController);
router.get('/:studentID',studentController.getSingleStudentController);
router.patch('/:studentID',studentController.deleteSingleStudentController);


export const StudentRoutes=router;
