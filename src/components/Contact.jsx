import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 pt-20"
    >
      <form
        method="POST"
        action="https://getform.io/f/1c9cee23-36ec-4c3f-92f3-06c326df6924"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -- chaini.mst@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6]/90 p-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-600"
          type="text"
          placeholder="Name…"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]/90 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-600"
          type="email"
          placeholder="Email…"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6]/90 p-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-600"
          name="message"
          rows="10"
          placeholder="Message…"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md transition-colors duration-200">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
