import { Document, Model, Types } from 'mongoose';

export interface TWORKFLOW extends Document {
  name: string;
  category: Types.ObjectId;
  price: number;
  inventory: number;
  ratings: [number];
  tags: [string];
  workflowName(): string; // instance method
  namedRatings: string; //virtual property
}

export interface TWORKFLOWMODEL extends Model<TWORKFLOW> {
  findWorkflow(name: string): Promise<TWORKFLOW | null>;
}
