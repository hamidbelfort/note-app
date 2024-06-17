import Note from "@/models/Note";
import dbConnect from "@/utils/dbConnect";
export default async function handler(req, res) {
  await dbConnect();
  if (
    req.method == "POST" ||
    req.method == "PUT" ||
    req.method == "DELETE"
  ) {
    res
      .status(400)
      .json({ err: 400, msg: "Wrong Request" });
  } else if (req.method == "GET") {
    try {
      const allNotes = await Note.find();
      res.status(200).json(allNotes);
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .json({ msg: "Error While Reading Data" });
    }
  }
}
