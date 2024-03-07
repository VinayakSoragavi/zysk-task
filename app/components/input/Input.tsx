import { Dispatch, SetStateAction } from "react";

type InputProps = {
  setMessage: Dispatch<SetStateAction<string>>;
  placeholder: string;
  type: string;
};

const Input: React.FC<InputProps> = ({ setMessage, placeholder, type }) => {
  return (
    <input
      type={type}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full h-14 border-gray-200 border-2 rounded-md pl-5"
      placeholder={placeholder}
    />
  );
};

export default Input;
