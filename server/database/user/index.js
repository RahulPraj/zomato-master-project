import Mongoose  from "mongoose";

const UserSchema = new mangoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String},
    address: [{detail: {type: String}, for: {type: string}}],
    phoneNumber: [{type: number}],
});

const UserModel = mongoose.model("Users", UserSchema);