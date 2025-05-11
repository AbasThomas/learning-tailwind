import React from 'react'
const App = () => {
  return (
    // <div className='bg-violet-200 h-10 w-full border-2 border-violet-50 rounded-md my-4 p-2'>
    //    <h1 className='text-center font-mono font-extrabold'>Hello  World</h1>
    // </div>
    // <div className=' grid grid-cols-5 gap-2 mt-2 mx-2'>
    //   <div className='h-16  rounded-full bg-blue-500'></div>
    //   <div className='h-16  rounded-full bg-green-500'></div>
    //   <div className='h-16  rounded-full bg-orange-500'></div>
    // </div>
    // <div className="sm:bg-red-500 md:bg-blue-500 ">
    //   <p >i appear on screens wider that 768px </p>
    // </div>
    <div className='flex items-center '>
      <div className="font-[30px]">SnapResume</div>
      <div className='flex '>
        <ul>Home</ul>
        <ul>Services</ul>
        <ul>Contact</ul>
        <ul>About</ul>
      </div>
    </div>
  )
}

export default App