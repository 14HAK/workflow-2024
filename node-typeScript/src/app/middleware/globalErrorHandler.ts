/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction } from 'express';
import AppError from '../errors/AppError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next: NextFunction) => {
  const message: string = err.message || 'something went wrong!';
  const statusCode: number = err.statusCode || 500;
  const status: string = err.status || 'false';

  if (err instanceof AppError) {
    res.status(statusCode).json({
      status,
      message,
      error: err.stack,
    });
  }

  if (err instanceof Error) {
    res.status(statusCode).json({
      status,
      message,
      error: err.stack,
    });
  }

  // res.status(statusCode).json({
  //   status,
  //   message,
  //   err: err?.stack,
  // });
};

export default globalErrorHandler;
