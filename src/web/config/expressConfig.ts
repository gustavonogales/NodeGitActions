import express, { Router } from 'express';
// import AppError from '../exception/appError';
import userRouter from '../routes/user.routes';

const app = express();
app.use(express.json());

const routes = Router();

routes.use('/user', userRouter);

app.use(routes);

// app.use(
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   (error: Error, _request: Request, response: Response, _: NextFunction) => {
//     if (error instanceof AppError) {
//       return response.status(error.statusCode).json({
//         status: 'error',
//         message: error.message,
//       });
//     }

//     console.error(error);

//     return response.status(500).json({
//       status: 'error',
//       message: 'Internal server error',
//     });
//   },
// );

app.listen(3333, () => {
  console.log('Running on port 3333, i think!');
});
