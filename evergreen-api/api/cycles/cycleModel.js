import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CycleSchema = new Schema({
  startDate: Date,
  endDate: Date,
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

export default mongoose.model('Cycle', CycleSchema);
