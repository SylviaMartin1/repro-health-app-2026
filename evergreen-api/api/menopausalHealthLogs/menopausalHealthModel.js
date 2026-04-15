import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MenopausalHealthLogSchema = new Schema({
  hotFlashQuantity: Number,
  hotFlashIntensityScore: Number, 
  nightSweatQuantity: Number,
  nightSweatScore: Number,
  symptoms: [String],
  emotions: [String],
  estrogenLevels: Number, 
  progesteroneLevels: Number,
  fshLevels: Number,
  created_at:{ type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }, 
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('MenopausalHealthLog', MenopausalHealthLogSchema);
