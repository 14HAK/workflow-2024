/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
import globalRouter from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundHandler from './app/middleware/notFound';

const app: Application = express();
app.use(express.json());

const logRequest = (req: Request, res: Response, next: NextFunction): void => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
};

app.use(logRequest);

app.use('/api', globalRouter);

app.use(globalErrorHandler);
app.use(notFoundHandler);

export default app;
