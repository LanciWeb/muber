const mongoose = require('mongoose');
const { Schema } = mongoose;

const PointSchema = new Schema({
  type: { type: String, default: 'Point' },
  coordinates: { type: [Number], required: true, index: '2dsphere' },
});

const DriverSchema = new Schema({
  geometry: PointSchema,
  email: { type: String, required: true },
  driving: { type: Boolean, default: false },
});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
