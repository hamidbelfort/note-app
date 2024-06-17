import Note from "@/models/Note";
import dbConnect from "@/utils/dbConnect";
export default async function handler(req, res) {
  dbConnect();
  if (
    req.method == "POST" ||
    req.method == "PUT" ||
    req.method == "DELETE"
  ) {
    res.status(400).json({ msg: "Wrong Request" });
  } else if (req.method == "GET") {
    try {
      const singleNote = await Note.findById(req.query.id);
      res.status(200).json(singleNote);
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .json({ msg: "Error While Reading Data" });
    }
  }
}
