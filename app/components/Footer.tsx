import Link from "next/link";
import { menu } from "../data/menu";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800">
      <div className="w-full">
        <div className="flex justify-center py-24">
          <div className="container-box">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h6 className="text-center text-2xl font-medium mb-6 text-white">
                  DirectLinks
                </h6>
                <ul>
                  {menu.map((element) => (
                    <li key={element.name} className="text-center">
                      <Link
                        className="font-medium w-full text-white"
                        href={element.href}
                      >
                        <h6 className="py-2">{element.name}</h6>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h6 className="text-center text-2xl font-medium mb-6 text-white">
                  Empowering
                </h6>
                <div className="px-2 lg:px-0">
                  <input
                    type="text"
                    className="w-full h-14 border-gray-200 border-2 rounded-md pl-5 mb-6"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <h6 className="text-center text-xl font-medium mb-1 text-white">
                    Empowering
                  </h6>
                  <h6 className="text-center text-white">Empowering</h6>
                </div>
              </div>

              <div>
                <h6 className="text-center text-2xl font-medium mb-6 text-white">
                  Empowering
                </h6>
                <h6 className="text-center text-xl font-medium mb-6 text-white">
                  Digital education, also known as e-learning or online
                  education, refers to the use of digital technologies,
                </h6>
                <div className="flex justify-center">
                  <ul className="flex">
                    {menu.map((index, i) => (
                      <li key={i}>
                        <a href="">
                          <FacebookIcon className="text-white p-1 text-4xl" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 w-full py-10">
          <a href="">
            <h6 className="text-center text-xl font-medium text-white">
              Digital education, also known as e-learning
            </h6>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
