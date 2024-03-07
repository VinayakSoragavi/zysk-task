import Image from "next/image";
import Link from "next/link";

type ButtonStyle = {
  border: string;
  bgcolor: string;
  text: string;
  color: string;
  type: any;
};
const Button: React.FC<{ Buttonstyle: ButtonStyle }> = ({ Buttonstyle }) => {
  const { border, bgcolor, text, color, type } = Buttonstyle;

  return (
    <button
      type={type}
      className={`px-6 py-2 border-2 font-medium border-${border} bg-${bgcolor} text-${color} rounded-md text-xl`}
    >
      {text}
    </button>
  );
};
export default Button;
