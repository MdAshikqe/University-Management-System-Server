/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application,Request, Response} from 'express';
import cors from 'cors';
// import { StudentRoutes } from './modules/students/student.routes';
import globalErrorHandler from './app/middleWares/globleErrorHandler';
import notFound from './app/middleWares/notFound';
import router from './app/routes';


const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1',router)


app.get('/', (req: Request, res: Response) => {
  res.send('Wellcome DIU Family');
});

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
//global Error handaller
app.use(globalErrorHandler)
//not found
app.use(notFound)

export default app;
