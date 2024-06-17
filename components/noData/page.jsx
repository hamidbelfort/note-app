import Image from "next/image";
import { HiEmojiSad } from "react-icons/hi";
const NoDataPage = () => {
  return (
    <div className="flex flex-col mx-auto my-auto">
      <HiEmojiSad size={150} />
      <div className="text-2xl text-indigo-700">
        اطلاعاتی از سرور یافت نشد
      </div>
    </div>
  );
};

export default NoDataPage;
