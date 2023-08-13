import React from "react";

export const Contact = () => {
  return (
    <div className="flex flex-col gap-5 m-auto w-full max-w-lg">
      <h2 className="text-center">Contact us</h2>
      <input
        type="text"
        placeholder="Name"
        className="bg-secondary bg-opacity-10 p-2 rounded-md border-primary border-opacity-50 border-e focus:outline-none"
      />
      <input
        type="text"
        placeholder="Email"
        className="bg-secondary bg-opacity-10 p-2 rounded-md border-primary border-opacity-50 border-e focus:outline-none"
      />
      <textarea
        type="text"
        placeholder="Message"
        className="bg-secondary bg-opacity-10 p-2 rounded-md border-primary border-opacity-50 border-e resize-none focus:outline-none"
      />
      <button className="w-40 m-auto">Submit</button>
    </div>
  );
};
