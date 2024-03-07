import Htwoheader from "./text/H-two-header";
import { about } from "../data/about";

const Subinfo: React.FC = () => {
  return (
    <>
      <div className="mt-24 py-16 bg-gray-100">
        <Htwoheader text={about.text.description} />
      </div>
    </>
  );
};
export default Subinfo;
