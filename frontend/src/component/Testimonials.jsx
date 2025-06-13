import React from "react";

const Testimonials = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold py-15 px-5">Testimonials</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10 px-5 py-5 mb-10">
          <div className="relative bg-white rounded-lg shadow-md p-6 max-w-sm">
            <img
              src="https://i.pravatar.cc/80"
              alt="User"
              className="w-16 h-16 rounded-full absolute -top-8 left-6 border-4 border-white shadow-md"
            />

            <div className="mt-10">
              <p className="text-gray-600 text-sm">
                Text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content..
              </p>

              <div className="mt-4">
                <p className="font-semibold text-black">Name</p>
                <p className="text-sm text-gray-500">Company / Designation</p>
              </div>
            </div>
          </div>
           <div className="relative bg-white rounded-lg shadow-md p-6 max-w-sm">
            <img
              src="https://i.pravatar.cc/80"
              alt="User"
              className="w-16 h-16 rounded-full absolute -top-8 left-6 border-4 border-white shadow-md"
            />

            <div className="mt-10">
              <p className="text-gray-600 text-sm">
                Text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content..
              </p>

              <div className="mt-4">
                <p className="font-semibold text-black">Name</p>
                <p className="text-sm text-gray-500">Company / Designation</p>
              </div>
            </div>
          </div>
           <div className="relative bg-white rounded-lg shadow-md p-6 max-w-sm ">
            <img
              src="https://i.pravatar.cc/80"
              alt="User"
              className="w-16 h-16 rounded-full absolute -top-8 left-6 border-4 border-white shadow-md"
            />

            <div className="mt-10">
              <p className="text-gray-600 text-sm">
                Text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content..
              </p>

              <div className="mt-4">
                <p className="font-semibold text-black">Name</p>
                <p className="text-sm text-gray-500">Company / Designation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
