import Note from "@/models/Note";
import dbConnect from "@/utils/dbConnect";
export default function handler(req, res) {
  dbConnect();
  if (
    req.method == "GET" ||
    req.method == "PUT" ||
    req.method == "DELETE"
  ) {
    res.status(400).json({ msg: "Wrong Request" });
  } else if (req.method == "POST") {
    try {
      const newNote = new Note({
        title: req.body.title,
        desc: req.body.desc,
        date: new Date().toLocaleDateString("fa-IR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
      newNote
        .save()
        .then((d) =>
          res.status(200).send({ msg: "Note Created!" })
        )
        .catch((e) => {
          console.log(e);
          res
            .status(400)
            .send({ msg: "Error While Creating Note" });
        });
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .send({ msg: "Error while getting data" });
    }
  }
}
