/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestHandler } from 'express';

const notFoundHandler: RequestHandler = (req, res, next): void => {
  res.status(404).json({
    error: 'Not Found',
    message: `The requested URL ${req.originalUrl} was not found on this server.`,
  });
};

export default notFoundHandler;
