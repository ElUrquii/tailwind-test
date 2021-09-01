import React from 'react'

const Card = () => {
  return (
    <>
      <div className='flex flex-col py-0 px-0 justify-self-auto border-2 border-gray-200 rounded-md shadow-xl'>
        <h2 className='text-4xl font-extrabold text-gray-800 antialiased text-center my-2'>
          Hola
        </h2>
        <p className='text-base font-light text-gray-800 mx-2 my-2'>Lorem la puta de tu mama</p>
        <div className='grid grid-cols-2 my-2'>
          <button className='rounded-md font-bold bg-gray-800 text-gray-100 py-2  mx-2 transition duration-250 ease-in-out hover:bg-gray-900'>Comprar</button>
          <button className='rounded-md font-bold bg-transparent border-2 border-gray-800 text-gray-800  mx-2 py-2 transition duration-250 ease-in-out hover:bg-gray-800 hover:text-gray-100'>Mas Info</button>
        </div>
      </div>
    </>
  )
}

export default Card
