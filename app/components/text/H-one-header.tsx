import Image from "next/image";

const Honeheader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="font-bold text-3xl md:text-5xl text-center w-10/12 md:w-8/12 leading-[45px] md:leading-[70px]">
          Empowering Futures Navigating the Landscape of Digital
        </h2>
      </div>
    </>
  );
};
export default Honeheader;
