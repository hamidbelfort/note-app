import UpdateNoteForm from "@/components/updateNoteForm";
const getData = async (id) => {
  const host =
    process.env.HOST_URL || "http://localhost:3000/";
  const notes = await fetch(
    `${host}api/get-single-note/${id}`
  );
  return notes.json();
};
const SingleNote = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="container mx-auto flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="px-3 py-1 rounded bg-green-600 text-white">
          شناسه : {data._id}
        </div>
        <div className="px-3 py-1 rounded bg-green-600 text-white">
          تاریخ انتشار : {data.publishDate}
        </div>
      </div>
      <UpdateNoteForm note={data} />
    </div>
  );
};
export default SingleNote;
