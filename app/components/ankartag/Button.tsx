import Image from "next/image";
import Link from "next/link";

type ButtonStyle = {
  border: string;
  bgcolor: string;
  text: string;
  color: string;
  href: string;
};
const Button: React.FC<{ Buttonstyle: ButtonStyle }> = ({ Buttonstyle }) => {
  const { border, bgcolor, text, color, href } = Buttonstyle;

  return (
    <Link
      href={href}
      className={`px-6 py-2 border-2 font-medium border-${border} bg-${bgcolor} text-${color} rounded-md text-xl`}
    >
      {text}
    </Link>
  );
};
export default Button;
