import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    image:{type:String},
    phonenumber: { type: Number},
    rzy_id: { type: String},
    rzy_secret: { type: String},
    provider: { type: String},
});

export default mongoose.models.User || model("User",UserSchema)