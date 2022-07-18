import mongoose from "mongoose";

const userSSSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: {
      validator: (value) =>
        value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      message: (props) => `${props.value} is not a valid email`,
    },
    
  },
  id: {
    type: Number
  },
  password: { type: String, required: true, minLength: 6 },

});
userSSSchema.statics.findByEmail = function (email) {
  return this.findOne({ email: email });
};

const UserSightSpot = mongoose.model("UserSightSpot", userSSSchema);

export default UserSightSpot;
