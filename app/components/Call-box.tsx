import Image from "next/image";
import Htwoheader from "./text/H-two-header";
import Honeheader from "./text/H-one-header";
import Button from "./ankartag/Button";

const Callbox: React.FC = () => {
  const buttonstyle = {
    id: "1",
    border: "white-100",
    bgcolor: "green-900",
    text: "Call Us",
    color: "white",
    href: "/",
  };
  return (
    <>
      <footer className=" bg-gray-900 py-16">
        <div className="flex justify-center">
          <div className="lg:flex  items-center">
            <a href="">
              <h6 className="text-center text-xl font-medium text-white mb-4 lg:mb-0 mr-0 lg:mr-3">
                Digital education, also known as e-learning
              </h6>
            </a>
            <div className="flex justify-center">
              <Button Buttonstyle={buttonstyle} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Callbox;
