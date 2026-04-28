import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LifeStyleLogSchema = new Schema({
  sleepHours: Number,
  exerciseMins: Number,
  waterIntakeLevel: Number,
  stressLevel: Number,
  dietQuality: String,
  mood: String,
  created_at:{ type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }, 
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('LifeStyleLog', LifeStyleLogSchema);
