import React from "react";
import { FaClock, FaWallet, FaNetworkWired, FaBook } from "react-icons/fa";
const Advantages = () => {
  return (
    <>
      <div className="h-fit w-screen bg-cyan-300 mt-10 mb-10">
        <div className="flex flex-col items-center text-center pt-10 px-5">
          <h1 className="text-white font-extrabold text-3xl py-2">
            Our Advantages
          </h1>
          <h2 className="text-white font-semibold">
            You Can rely on our experience and the quality of services we
            provide.
          </h2>
          <h3 className="text-white font-semibold">
            Here are other reasons to book tours at Treat Holidays
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-10 px-5 py-5">
          <div className="flex flex-col items-center py-10">
            <div className="bg-white h-fit w-fit py-5 px-5 rounded-full">
              <FaClock className="text-9xl  text-cyan-400" />
            </div>
            <h1 className="text-white text-2xl font-extrabold pt-2">
              Save Time
            </h1>
            <h2 className="text-white font-semibold">
              No More Switching For Packages Or plans.
            </h2>
          </div>

          <div className="flex flex-col items-center py-10">
            <div className="bg-white h-fit w-fit py-5 px-5 rounded-full">
              <FaWallet className="text-9xl  text-cyan-400" />
            </div>
            <h1 className="text-white text-2xl font-extrabold pt-2">
              Save Money
            </h1>
            <h2 className="text-white font-semibold">
              Compare , Negotiate, And Choose The Best.
            </h2>
          </div>

          <div className="flex flex-col items-center py-10">
            <div className="bg-white h-fit w-fit py-5 px-5 rounded-full">
              <FaNetworkWired className="text-9xl  text-cyan-400" />
            </div>
            <h1 className="text-white text-2xl font-extrabold pt-2">
              Trusted Network
            </h1>
            <h2 className="text-white font-semibold">
              A Trusted Network Of 7000+ Travel Agents
            </h2>
          </div>
          <div className="flex flex-col items-center py-10">
            <div className="bg-white h-fit w-fit py-5 px-5 rounded-full">
              <FaBook className="text-9xl  text-cyan-400" />
            </div>
            <h1 className="text-white text-2xl font-extrabold pt-2">
              Multiple Options
            </h1>
            <h2 className="text-white font-semibold">
              Itineraries & Travel Tips From Trusted Agents.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advantages;
