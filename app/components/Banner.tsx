import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <section className="w-full h-[450px] md:min-h-screen relative">
      <div
        style={{ backgroundImage: `url(/photo/banner.jpg)` }}
        className="absolute inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      >
        <h1 className="font-bold text-8xl text-white">digital.</h1>
      </div>
    </section>
  );
};

export default Banner;
