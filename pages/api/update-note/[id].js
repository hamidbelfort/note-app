import Note from "@/models/Note";
import dbConnect from "@/utils/dbConnect";
export default async function handler(req, res) {
  await dbConnect();
  if (
    req.method == "GET" ||
    req.method == "POST" ||
    req.method == "DELETE"
  ) {
    res.status(400).json({ msg: "Wrong Request" });
  } else if (req.method == "PUT") {
    try {
      await Note.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
      });
      res.status(200).send({ msg: "Note Updated!" });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        msg: "Error occured while updating note.",
      });
    }
  }
}
