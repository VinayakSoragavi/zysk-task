import Image from "next/image";
import Button from "./ankartag/Button";
import { gallery } from "../data/gallery";

const Gallery: React.FC = () => {
  return (
    <>
      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen mb-9">
          <div className="grid grid-rows-3 min-h-screen lg:h-full ">
            <div
              style={{ backgroundImage: `URL(${gallery.image1.src})` }}
              className="row-span-2 h-full bg-cover bg-center"
            ></div>
            <div
              className="row-span-2 w-full bg-cover bg-center"
              style={{ backgroundImage: `URL(${gallery.image2.src})` }}
            ></div>
          </div>
          <div className="grid grid-rows-3 min-h-screen lg:h-full">
            <div className="grid grid-cols-2">
              <div
                className="bg-cover bg-center"
                style={{ backgroundImage: `URL(${gallery.image3.src})` }}
              ></div>
              <div
                className="bg-cover bg-center"
                style={{ backgroundImage: `URL(${gallery.image4.src})` }}
              ></div>
            </div>
            <div
              className="bg-cover bg-center"
              style={{ backgroundImage: `URL(${gallery.image5.src})` }}
            ></div>
            <div className="grid grid-cols-2">
              <div
                className="bg-cover bg-center"
                style={{ backgroundImage: `URL(${gallery.image6.src})` }}
              ></div>
              <div
                className="bg-cover bg-center"
                style={{ backgroundImage: `URL(${gallery.image7.src})` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <Button Buttonstyle={gallery.buttonstyle} />
        </div>
      </section>
    </>
  );
};
export default Gallery;
