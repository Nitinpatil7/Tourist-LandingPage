import React, { useEffect, useState } from "react";

const Destionation = () => {
  const [destinations, setdestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tour/destination")
      .then((response) => response.json())
      .then((data) => setdestinations(data.data))
      .catch((error) => console.error("Error fetching destinations:", error));
  }, []);
  return (
    <>
      <div className="h-fit w-screen ">
        <div className="flex flex-col w-screen items-center py-5 text-center mb-10">
          <h1 className="text-cyan-600 font-extrabold text-3xl">Explore Most Popular Destinations</h1>
          <h2 className="text-xs max-w-xl px-5 font-semibold pt-2">
            Plan Your Perfect trip with our most loved and best-selling tour
            packages.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 py-5">
            {(destinations || []).map((item , index)=>(
               
                <div 
                key={index}
                className="shadow-2xl rounded-2xl" >
                    <img 
                    className="w-full h-auto object-cover rounded-2xl"
                    src={item.image} 
                    alt={item.destination} />
                    <div className="flex justify-between px-2 py-2">
                        <h1 className="text-cyan-600 font-semibold">{item.destination}</h1>
                        <h2 className="flex gap-1">Starting From <p className="text-cyan-600 font-semibold">₨.{item.price}</p></h2>
                    </div>
                </div>
               
            ))}
        </div>
      </div>
    </>
  );
};

export default Destionation;
