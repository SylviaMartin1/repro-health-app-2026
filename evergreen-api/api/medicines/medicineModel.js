import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MedicineSchema = new Schema({
  name: String,
  category: { type: String, enum: ["Contraceptive", "Hormone", "Supplement", "Painkiller", "Other"], default: "Other"},
  dosage: String,
  frequency: String,
  notes: String,
  created_at:{ type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }, 
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('Medicine', MedicineSchema);
