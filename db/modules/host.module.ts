const mongoose = require("mongoose");

const hostSchema = new mongoose.Schema({
  userAuthId: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  accommodationType: {
    type: String,
    enum: ["Couch", "Spare Room", "Shared Room", "Entire Place"],
    required: true,
  },
  location: {
    coordinates: {
      type: [Number],
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
  },
  maxGuests: {
    type: Number,
    required: true,
    min: 1,
  },
  amenities: [
    {
      type: String,
    },
  ],
  accessibility: {
    wheelchairAccessible: Boolean,
    petFriendly: Boolean,
  },
  availableDates: [
    {
      startDate: Date,
      endDate: Date,
    },
  ],
  houseRules: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  reviews: [
    {
      type: String,
    },
  ],
  emergencyTypes: [
    {
      type: String,
      enum: ["Natural Disaster", "Fire", "Personal Emergency", "Other"],
    },
  ],
  languages: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Host = mongoose.model("Host", hostSchema);

module.exports = Host;
