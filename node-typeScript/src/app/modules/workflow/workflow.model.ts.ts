import mongoose, { Schema } from 'mongoose';
import { TWORKFLOW, TWORKFLOWMODEL } from './workflow.interface';

const workflowSchema: Schema<TWORKFLOW> = new mongoose.Schema(
  {
    name: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    price: {
      type: Number,
      required: [true, 'price required.'],
    },
    inventory: {
      type: Number,
      required: [true, 'inventory required.'],
    },
    ratings: [Number],
    tags: [String],
  },
  { timestamps: true }
);

workflowSchema.pre('save', function () {
  return (this.price = this.price - 4);
});

workflowSchema.methods.workflowName = function (): string {
  return this.name + +this.price;
};

workflowSchema.statics.findWorkflow = async function (
  name: string
): Promise<TWORKFLOW | null> {
  return this.find({ name });
};

workflowSchema.virtual('nameRatings').get(function () {
  return this.name + +this.ratings[0];
});

const Workflow = mongoose.model<TWORKFLOW, TWORKFLOWMODEL>('Workflow', workflowSchema);
export default Workflow;
