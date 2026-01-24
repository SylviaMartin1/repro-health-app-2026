import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    displayName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    lifeStage: { type: String, required: true},
    height: { type: String},
    weight: { type: String}
});

// Function to compare the candidate password to the one stored in the database
UserSchema.methods.comparePassword = async function (passw) { 
    return await bcrypt.compare(passw, this.password); 
};

// Function to find a user based on their email
UserSchema.statics.findByEmail = function (email) {
  return this.findOne({ email: email });
};

// Function to define a pre-saved hook that encrypts a password before it is saved or updated
UserSchema.pre('save', async function() {
  const saltRounds = 10; 
  if (this.isModified('password') || this.isNew) {
      const hash = await bcrypt.hash(this.password, saltRounds);
      this.password = hash;
  } 
});





export default mongoose.model('User', UserSchema);

