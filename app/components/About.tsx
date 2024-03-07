"use client";
import Image from "next/image";
import Htwoheader from "./text/H-two-header";
import Honeheader from "./text/H-one-header";
import Button from "./ankartag/Button";
import { about } from "../data/about";

const About: React.FC = () => {
  return (
    <section className="flex justify-center py-24">
      <div className="containerbox">
        <div className="mb-9">
          <Honeheader text={about.text.heading} />
        </div>
        <div className="mb-9">
          <Htwoheader text={about.text.description} />
        </div>
        <div className="flex justify-center mb-9">
          <Button Buttonstyle={about.buttonstyle} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {about.founder.map((element, index) => (
            <div key={index} className="mb-4 md:mb-0">
              <Image
                alt="banner"
                width={100}
                height={100}
                layout="responsive"
                className="w-full mb-6"
                src={element.image}
              />
              <div>
                <h6 className="text-center text-2xl font-medium mb-1">
                  {element.name}
                </h6>
                <h6 className="text-center">{element.inforamtion}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
