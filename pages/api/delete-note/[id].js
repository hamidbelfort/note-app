import Note from "@/models/Note";
import dbConnect from "@/utils/dbConnect";
export default async function handler(req, res) {
  dbConnect();
  if (
    req.method == "GET" ||
    req.method == "POST" ||
    req.method == "PUT"
  ) {
    res.status(400).json({ msg: "Wrong Request" });
  } else if (req.method == "DELETE") {
    try {
      //console.log(req.body);
      await Note.findByIdAndDelete(req.query.id);
      res.status(200).send({ msg: "Note Deleted!" });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        msg: "Error occured while deleting note.",
      });
    }
  }
}
