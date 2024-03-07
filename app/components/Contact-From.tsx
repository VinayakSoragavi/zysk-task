"use client";
import Button from "./button/Button";
import { useState } from "react";
import Textarea from "./input/Textarea";
import Input from "./input/Input";
import { formdetails } from "../data/formdetails";

const Contactfrom: React.FC = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [secondname, setSecondname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <>
      <section className="flex justify-center py-24">
        <div className="containerbox">
          <form>
            <div className="mb-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input
                  setMessage={setFirstname}
                  placeholder={formdetails.firstname.placeholder}
                  type={formdetails.firstname.type}
                />
                <Input
                  setMessage={setSecondname}
                  placeholder={formdetails.lastname.placeholder}
                  type={formdetails.lastname.type}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mb-6">
                <Input
                  setMessage={setEmail}
                  placeholder={formdetails.email.placeholder}
                  type={formdetails.email.type}
                />
                <Input
                  setMessage={setPhone}
                  placeholder={formdetails.phone.placeholder}
                  type={formdetails.phone.type}
                />
              </div>
              <Textarea
                setMessage={setMessage}
                placeholder={formdetails.textarea.placeholder}
              />
            </div>
            <div className="flex justify-center mb-6">
              <Button Buttonstyle={formdetails.buttonstyle} />
            </div>
            <h6 className="text-center text-xl font-medium ">
              {formdetails.discriftion}
            </h6>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contactfrom;
