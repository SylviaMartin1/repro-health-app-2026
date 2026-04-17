import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MaleHealthLogSchema = new Schema({
  symptoms: [String],
  emotions: [String],
  spermVolume: Number,
  spermConcentration: Number,
  spermMotility: Number, 
  spermMorphology: Number,
  created_at:{ type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }, 
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('MaleHealthLog', MaleHealthLogSchema);
