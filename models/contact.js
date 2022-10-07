const { Schema, model } = require("mongoose");

const contactSchema = Schema(
  {
    name: {
      type: String,
    },
    games: {
      type: Number,
    },
    wins: {
      type: Number,
    },
    loses: {
      type: Number,
    },
    goalsScored: {
      type: Number,
    },
    goalsMissed: {
      type: Number,
    },
    lastGames: {
      type: Array,
    },
    photo: {
      type: String,
    },
  },
  { versionKey: false }
);

const Contact = model("player", contactSchema);

module.exports = { Contact };
