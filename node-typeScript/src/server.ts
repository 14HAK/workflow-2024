/* eslint-disable @typescript-eslint/no-explicit-any */
import { Server } from 'http';
import mongoose from 'mongoose';

import envConfig from './app/config';
import app from './app';

let server: Server;

process.on('uncaughtException', err => {
  console.log('Uncaught Exception! shut down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const connect = async () => {
  try {
    await mongoose.connect(envConfig?.db_uri as string, {
      serverSelectionTimeoutMS: 10000,
    });

    server = app.listen(envConfig?.port, () => {
      console.log(`Server running on port: https://127.0.0.1:${envConfig?.port}`);
    });
    console.log('database connection success!');
  } catch (error: unknown) {
    console.error(error);
    process.exit(1);
  }
};
connect();

process.on('unhandledRejection', (reason: any, promise) => {
  console.log('Unhandled Rejection! Shutting down...');
  console.error(reason, promise);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('Sigterm Received! Shutting down gracefully.');
  server.close(() => {
    console.log('Process terminated');
  });
});
