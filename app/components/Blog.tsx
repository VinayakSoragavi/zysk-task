import Image from "next/image";
import Link from "next/link";
import { blog } from "../data/blog";

const Blog: React.FC = () => {
  return (
    <>
      <section className="flex justify-center py-24 bg-gray-100">
        <div className="containerbox">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {blog.map((elem, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 mb-6">
                <Image
                  alt="banner"
                  width={100}
                  height={100}
                  layout="responsive"
                  className="w-full"
                  src={elem.image}
                ></Image>
                <div className="p-4 flex justify-center items-center">
                  <div className="w-full">
                    <h6 className="text-xl font-normal mb-2">{elem.name}</h6>
                    <h6 className="text-2xl font-medium mb-2">
                      {elem.discriftion}
                    </h6>
                    <Link
                      className="text-xl text-gray-700 hover:text-blue-400 font-normal mb-0"
                      href={elem.href}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
