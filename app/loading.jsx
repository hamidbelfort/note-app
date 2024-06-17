import Image from "next/image";
const Loading = () => {
  return (
    <div className="flex flex-col mx-auto my-auto">
      <Image
        alt="loading..."
        src={"/loading.svg"}
        height={150}
        width={150}
      />
    </div>
  );
};

export default Loading;
