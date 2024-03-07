import Image from "next/image";
import { contactdital } from "../data/contactdital";

const Contact: React.FC = () => {
  return (
    <>
      <section className="w-full">
        <div className="grid lg:grid-cols-3">
          <div className="col-span-2">
            <iframe
              src={contactdital.map}
              className="w-full min-h-96 lg:h-full"
            ></iframe>
          </div>
          <div className="h-full py-16 px-6 bg-gray-100">
            <h6 className="text-2xl font-bold mb-8">{contactdital.title}</h6>

            {contactdital.address.map((elem, i) => (
              <div key={i} className="mb-8">
                <h6 className="text-xl font-bold mb-1">{elem.title}</h6>
                <h6 className="text-xl font-normal mb-2">{elem.address}</h6>
              </div>
            ))}
            <div className="">
              {contactdital.contactlink.email.map((elem, i) => (
                <div key={i} className="flex">
                  <h6 className="text-xl font-bold mb-1 mr-1">{elem.title}</h6>
                  <h6 className="text-xl font-normal">{elem.email}</h6>
                </div>
              ))}
              {contactdital.contactlink.phone.map((elem, i) => (
                <div key={i} className="flex">
                  <h6 className="text-xl font-bold mb-1 mr-1">{elem.title}</h6>
                  <h6 className="text-xl font-normal">{elem.phone}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
