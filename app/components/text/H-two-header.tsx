import Image from "next/image";

const Htwoheader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <div className="flex justify-center">
        <h3 className="text-2xl w-11/12 md:w-10/12 text-center leading-9">
          {text}
        </h3>
      </div>
    </>
  );
};
export default Htwoheader;
