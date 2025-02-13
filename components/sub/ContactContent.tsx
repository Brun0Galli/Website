import React from "react";

const ContactContent = () => {
  return (
    <div className="z-[40] relative"> {/* Increase z-index and add relative positioning */}
      <form className="relative z-[60]"> {/* Ensure form is higher and relative */}
        <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Your message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <button className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
          Send a message
        </button>
      </form>
    </div>
  );
};

export default ContactContent;
