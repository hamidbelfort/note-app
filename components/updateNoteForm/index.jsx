"use client";
import { useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
const UpdateNoteForm = ({ note }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const [loading, setLoading] = useState(false);
  const submiter = (e) => {
    e.preventDefault();
    const formData = {
      title: titleRef.current.value,
      desc: descRef.current.value,
    };
    const host =
      process.env.HOST_URL || "http://localhost:3000/";
    setLoading(true);
    axios
      .put(`${host}api/update-note/${note._id}`, formData)
      .then((d) => {
        setLoading(false);
        console.log("Note Updated");
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };
  const deleter = () => {
    const host =
      process.env.HOST_URL || "http://localhost:3000/";
    setLoading(true);
    axios
      .delete(`${host}api/delete-note/${note._id}`)
      .then((d) => {
        setLoading(false);
        revalidatePath("/");
        console.log("Note Removed");
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };
  return (
    <div className="w-2/3 mx-auto flex flex-col gap-8">
      <div>
        <button
          onClick={deleter}
          className="px-4 py-1 rounded-lg bg-rose-500 text-white text-sm"
        >
          <HiOutlineTrash />
          حذف
        </button>
      </div>
      <form
        onSubmit={submiter}
        className="flex flex-col gap-6"
      >
        <input
          ref={titleRef}
          type="text"
          placeholder="عنوان"
          defaultValue={note.title}
          className="w-full p-2 rounded-md border-2 border-zinc-200 outline-none transition-all duration-300 focus:border-orange-500"
        />
        <input
          ref={descRef}
          type="text"
          placeholder="توضیحات یادداشت"
          defaultValue={note.desc}
          className="w-full h-[150px] p-2 rounded-md border-2 border-zinc-200 outline-none transition-all duration-300 focus:border-orange-500"
        />
        {loading && (
          <Image
            className="flex mx-auto"
            height={100}
            width={100}
            alt={"Loading..."}
            src={"/loading2.svg"}
          />
        )}
        {!loading && (
          <button className="w-full p-2 rounded-md bg-blue-600 hover:bg-orange-400 transition-all duration-300 text-white">
            ذخیره
          </button>
        )}
      </form>
    </div>
  );
};

export default UpdateNoteForm;
