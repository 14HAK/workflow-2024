//first create server:
import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
const port = 3000;

/**
 * Get request handler for the root endpoint.
 * 
 * @param req - The request object.
 * @param res - The response object.
 * @returns void
 */
app.get('/', (req, res)=>{
  res.send('hello worlds!')
})

/**
 * Express route handler for handling errors.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @throws {Error} - If something goes wrong.
 *///throw custom error:
app.get('/error', (req, res)=>{
  throw new Error("something went wrong-");
  
})

/**
 * Middleware function to handle errors in the application.
 *
 * @param {any} err - The error object.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void}
 *///global error handler:
app.use((err:any, req:Request, res:Response, next:NextFunction)=>{
  console.log(err.stack)
  res.json({
    status: 500,
    message: 'Internal Server Error.',
    request: req.url,
    error: err.stack,
  })
})

/**
 * Start the server and listen on the specified port.
 * @param {number} port - The port number to listen on.
 * @param {Function} callback - The callback function to execute after the server starts listening.
 */
app.listen(port, ()=>{
  console.log(`Server listen on port: http://localhost:${port}`);
})