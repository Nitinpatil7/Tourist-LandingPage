import React  , {useState , useEffect}from 'react'

const Packages = () => {
    const [packages, setpackages] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:5000/tour/packages")
          .then((response) => response.json())
          .then((data) => setpackages(data.data))
          .catch((error) => console.error("Error fetching destinations:", error));
      }, []);
  return (
   <>
 <div className="h-fit w-screen">
        <div className="flex flex-col w-screen items-center py-5 text-center mb-10 mt-10 ">
          <h1 className="text-cyan-600 font-extrabold text-3xl">Top Selling Tour Packages of India</h1>
          <h2 className="text-xs max-w-xl px-5 font-semibold pt-2">
            Stay updated with our latest news and happenings through Informe.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 py-5">
            {(packages || []).map((item , index)=>(
               
                <div 
                key={index}
                className="shadow-2xl rounded-2xl" >
                    <img 
                    className="w-full h-auto object-cover rounded-2xl"
                    src={item.image} 
                    alt={item.destination} />
                    <div className="flex flex-col items-center justify-center  px-2 py-2">
                        <h1 className="text-cyan-600 font-semibold text-2xl">{item.destination}</h1>

                        <button
                        className='text-white font-semibold bg-cyan-500 rounded-2xl px-10 py-1 my-2'

                        >
                            VIEW DETAILS
                        </button>
                       
                    </div>
                </div>
              
            ))}
        </div>
      </div>
   </>
  )
}

export default Packages
