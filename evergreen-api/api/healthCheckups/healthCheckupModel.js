import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HealthCheckupSchema = new Schema({
  name: String,
  date: String,
  time: String,
  results: String,
  doctorNotes: String,
  status: { type: String, enum: ["Pending", "Scheduled", "Done", "Cancelled"], default: "Scheduled"},
  created_at:{ type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }, 
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('HealthCheckup', HealthCheckupSchema);
