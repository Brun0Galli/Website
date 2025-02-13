import React from "react";
import ContactContent from "../sub/ContactContent";

const Contact = () => {
    return (
        <div
          className="w-screen h-screen bg-cover bg-center flex items-center justify-center" id="contact"
        >
          <div
            className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
          >
            <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
              <ContactContent />
            </div>
            <div className="absolute right-20 bottom-16 w-[50%] md:w-[30%]">
                <img
                    src="/Memoji.png"
                    alt="Contact Background"
                    className="w-full h-full object-cover rounded-full"
                />
            </div>

          </div>
        </div>
      );
    };

export default Contact;