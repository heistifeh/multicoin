import mongoose from "mongoose";

const verifySchema = new mongoose.Schema(
  {
    ssn: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Verify = mongoose.model("Verify", verifySchema);
export default Verify;
