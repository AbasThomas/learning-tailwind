import React from 'react'
const App = () => {
  return (
    <div >
      <div className=' p-24 bg-gray-900 text-white  flex items-center justify-between '>
        <div className="logo ">
          <h2 className='text-3xl uppercase ' >logobakery</h2>
        </div>
        <div className='menu '>
          <ul className='menu-items flex gap-5 p-24'>
            <li className="item">Home</li>
            <li className="item">Contacts</li>
            <li className="item">About</li>
            <li className="item">Services</li>
          </ul>
        </div>
        <div className="action-btn ">
          <button className="action bg-blue-800">Sign in</button>
          <button className="action bg-blue-800 ">Get Started</button>
        </div>
        <button>

        </button>
      </div>
    </div>  
  )
}

export default App