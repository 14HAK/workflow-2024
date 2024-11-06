import express, { Router } from 'express';
import { getAllWorkflow } from './workflow.controller';
const workflowRoute: Router = express.Router();

workflowRoute.route('/all_workflow').get(getAllWorkflow);
export default workflowRoute;
