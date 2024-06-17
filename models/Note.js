import mongoose from "mongoose";

const NoteModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  publishDate: {
    type: String,
    default: new Date().toLocaleDateString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
});

export default mongoose.models.Note ||
  mongoose.model("Note", NoteModel);
