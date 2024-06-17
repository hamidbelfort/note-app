"use client";
import Link from "next/link";
import {
  HiOutlineNewspaper,
  HiOutlineStop,
} from "react-icons/hi";
const NoteCard = ({ notes }) => {
  return (
    <div className="flex flex-col gap-4">
      {!notes && (
        <div className="flex flex-col gap-8 text-center text-indigo-600">
          <h3>اطلاعاتی از سرور دریافت نشد</h3>
          <HiOutlineStop size={100} />
        </div>
      )}
      {notes &&
        notes.map((nt, i) => (
          <Link
            href={`/note/${nt._id}`}
            key={i}
            className="w-full flex justify-start items-center p-4 rounded-md border-2 border-zinc-200 hover:bg-zinc-100"
          >
            <HiOutlineNewspaper className="mx-4" />
            {nt.title}
          </Link>
        ))}
    </div>
  );
};

export default NoteCard;
