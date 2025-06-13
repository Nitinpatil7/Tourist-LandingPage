import React from 'react'

const Homesection = () => {
  return (
    <>
    <div className="h-screen bg-cover bg-center w-screen mb-10"
      style={{
        backgroundImage: "url('/bg.webp')", // for public folder
      }}>
        <div className='flex flex-col h-screen pt-20 px-5 gap-1 items-center justify-center '>
            <h1 className='text-white text-3xl font-extrabold'>Discover Your Next Adventure</h1>
            <h2 className='text-white font-semibold text-xs '>Choose from our curated experiences, costomized for every kind of traveler.</h2>
            <button className='bg-yellow-400 rounded-xl py-1 text-white my-2
            font-extrabold w-64'>Book Now</button>

       
        </div>
    </div>
    </>
  )
}

export default Homesection
