import Image from "next/image";
import Honeheader from "./text/H-one-header";
import Htwoheader from "./text/H-two-header";
import { service } from "../data/service";
import Link from "next/link";

const Services: React.FC = () => {
  return (
    <>
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div
            style={{ backgroundImage: "URL(/photo/services.avif)" }}
            className="min-h-96 lg:h-full bg-cover"
          ></div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {service.map((element) => {
                const { name, image, href } = element;

                return (
                  <>
                    <div className="flex justify-center py-16">
                      <div>
                        <div className="flex justify-center">
                          <Image
                            width={100}
                            height={100}
                            alt={name}
                            src={image}
                            className="mb-4"
                          />
                        </div>
                        <Link href={href}>
                          <h6 className="text-center text-2xl font-medium mb-1">
                            {name}
                          </h6>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
