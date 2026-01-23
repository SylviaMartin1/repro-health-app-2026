import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    displayName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    lifeStage: { type: String, required: true},
    height: { type: String},
    weight: { type: String}
});

export default mongoose.model('User', UserSchema);

