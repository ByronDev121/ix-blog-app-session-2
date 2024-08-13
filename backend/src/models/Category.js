const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    color: {
      type: String,
      required: [true, "Color is required"],
    },
  },
  { timestamps: true }
);

categorySchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("Category", categorySchema);
