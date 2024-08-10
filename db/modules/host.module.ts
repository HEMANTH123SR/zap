// models/HostProfile.js
import mongoose from "mongoose";

const HostProfileSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  des: { type: String, required: true },
  maxGuests: { type: Number, required: true, min: 1 },
  availableDates: { type: String, required: true },
  coordinates: { type: String, required: true },
  images: { type: String, required: true }
});

export default mongoose.models.HostProfile || mongoose.model("HostProfile", HostProfileSchema);
