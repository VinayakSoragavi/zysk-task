import { Dispatch, SetStateAction } from "react";

type TextareaProps = {
  setMessage: Dispatch<SetStateAction<string>>;
  placeholder: string;
};

const Textarea: React.FC<TextareaProps> = ({ setMessage, placeholder }) => {
  return (
    <textarea
      onChange={(e) => setMessage(e.target.value)}
      className="w-full border-gray-200 border-2 rounded-md pl-5 h-64 pt-3"
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
