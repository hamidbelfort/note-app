import NoteCard from "@/components/noteCard";
import NoDataPage from "@/components/noData/page";
const getData = async () => {
  const host =
    process.env.HOST_URL || "http://localhost:3000/";
  const data = await fetch(`${host}api/get-all-notes`, {
    method: "GET",
  });
  if (data.status == 200) {
    return await data.json();
  } else {
    return undefined;
  }
};
const Home = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className=" flex flex-col gap-8 m-8 p-4  text-indigo-600">
      صفحه اصلی
      {!data && <NoDataPage />}
      {data && <NoteCard notes={data} />}
    </div>
  );
};

export default Home;
