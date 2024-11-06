import { RequestHandler } from 'express';
import { workflowAllGet } from './workflow.services';

export const getAllWorkflow: RequestHandler = async (req, res, next) => {
  const result = await workflowAllGet();
  res.status(200).json({
    success: true,
    message: result,
  });
};
