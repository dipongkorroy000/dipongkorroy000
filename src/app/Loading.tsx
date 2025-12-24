import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Image src="https://i.ibb.co.com/qFF62B5T/D3.png" height={100} width={100} alt="Logo" className="animate-blink" />
    </div>
  );
};

export default Loading;
