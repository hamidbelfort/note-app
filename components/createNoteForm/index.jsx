"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { revalidatePath } from "next/cache";
const CreateNoteForm = () => {
  const titleRef = useRef();
  const descRef = useRef();
  const [loading, setLoading] = useState(false);
  const submiter = (e) => {
    e.preventDefault();
    const data = {
      title: titleRef.current.value,
      desc: descRef.current.value,
    };
    setLoading(true);
    const host =
      process.env.HOST_URL || "http://localhost:3000/";
    axios
      .post(`${host}api/add-note`, data)
      .then((d) => {
        setLoading(false);
        revalidatePath("/");
        console.log("Note Created");
      })
      .catch((e) => {
        setLoading(false);
        console.log("error");
      });
  };
  return (
    <form
      onSubmit={submiter}
      className="flex flex-col gap-6"
    >
      <input
        ref={titleRef}
        type="text"
        placeholder="عنوان"
        className="w-full p-2 rounded-md border-2 border-zinc-200 outline-none transition-all duration-300 focus:border-orange-500"
      />
      <input
        ref={descRef}
        type="text"
        placeholder="توضیحات یادداشت"
        className="w-full p-2 rounded-md border-2 border-zinc-200 outline-none transition-all duration-300 focus:border-orange-500"
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
  );
};

export default CreateNoteForm;
