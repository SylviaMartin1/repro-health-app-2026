import mongoose from mongoose;

const schema = mongoose.Schema;

const UserSchema = new Schema ({
    displayName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    lifeStage: { type: String, required: true},
    height: { type: String, required: true},
    weight: { type: String, required: true}
});

export default mongoose.model('User', UserSchema);

