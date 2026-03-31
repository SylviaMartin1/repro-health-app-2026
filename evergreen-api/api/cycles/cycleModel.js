import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CycleSchema = new Schema({
  startDate: String,
  endDate: String,
  flowLevel: String, 
  painLevel: String, 
  symptoms: [String],
  emotions: [String],
  created_at:{ type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }, 
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const dateValidator = (date) => {
  return date > new Date();
}
TaskSchema.path("deadline").validate(dateValidator);

export default mongoose.model('Cycle', CycleSchema);
