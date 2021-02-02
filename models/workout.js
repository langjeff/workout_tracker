const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of workout",
      },
    },
    {
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise",
      },
    },
    {
      duration: {
        type: Number,
        required: "Enter the duration",
      },
    },
    {
      reps: {
        type: Number,
      },
    },
    {
      weight: {
        type: Number,
      },
    },
    {
      sets: {
        type: Number,
      },
    },
    {
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
