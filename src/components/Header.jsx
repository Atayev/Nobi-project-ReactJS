import React from 'react'

function Header() {
  return (
      
      <div className="bg-transparent py-3 flex justify-center">
          <div className='container flex justify-around'>
          <div className="ml-8 text-lg text-white hidden md:flex">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1'>
             <path d="M10.5763 8.00079C10.8045 8.00061 11.0313 8.03786 11.2474 8.11107L11.5743 8.22135C13.8273 8.97624 15.9177 10.1485 17.7359 11.6768L18.0087 11.8931C18.3159 12.1506 18.563 12.4723 18.7325 12.8354C18.902 13.1985 18.9898 13.5943 18.9898 13.9949C18.9898 14.3955 18.902 14.7913 18.7325 15.1544C18.563 15.5175 18.3159 15.8392 18.0087 16.0967L17.7359 16.3259C15.9174 17.8549 13.8272 19.0286 11.5743 19.7857L11.2583 19.8939C11.0421 19.9671 10.8154 20.0043 10.5871 20.0041C10.1014 20.0038 9.63062 19.8363 9.25404 19.5299C8.87747 19.2235 8.61808 18.7969 8.51954 18.3218L8.41995 17.8461C7.89383 15.3121 7.89383 12.6972 8.41995 10.1632L8.51954 9.68744C8.61683 9.21341 8.87424 8.78716 9.24868 8.48011C9.62311 8.17305 10.0918 8.00383 10.5763 8.00079ZM10.5763 0C8.24876 0.000642902 5.99252 0.802148 4.18733 2.2696C2.38215 3.73706 1.13823 5.78087 0.664961 8.05701L0.565372 8.53273C-0.187155 12.1368 -0.187155 15.8573 0.565372 19.4614L0.664961 19.9371C0.954824 21.3366 1.53841 22.6588 2.37725 23.8165C3.21608 24.9743 4.2911 25.9413 5.53143 26.6538C6.77176 27.3663 8.14921 27.808 9.57296 27.95C10.9967 28.0919 12.4344 27.9308 13.7913 27.4773L14.1182 27.367C17.3245 26.2974 20.2995 24.6319 22.8864 22.4584L23.1657 22.2292C24.368 21.2205 25.3347 19.9611 25.9979 18.5395C26.6611 17.118 27.0048 15.5686 27.0048 14.0003C27.0048 12.432 26.6611 10.8826 25.9979 9.46107C25.3347 8.0395 24.368 6.78014 23.1657 5.77138L22.8907 5.54217C20.3038 3.36867 17.3289 1.70323 14.1225 0.633576L13.7913 0.523295C12.7548 0.177189 11.6692 0.00048357 10.5763 0V0Z" fill="#00BBA4"/>
              </svg>
     `         <p className='logoTitle font-bold px-2 mt-1'>Nobi</p>
              <ul className='flex text-black'>
                  <li className='pt-2 px-1 font-medium text-sm'>Features</li>
                  <li className='pt-2 px-1 font-medium text-sm'>Support</li>
              </ul>
          </div>
             
        <span className="w-full md:w-1/3 h-10 cursor-pointer border border-gray-300 text-sm rounded-full flex">
        <input type="search" name="serch" placeholder="Search" className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"/>
        </span>
        <div className="flex flex-row-reverse text-white mr-4 ml-4 md:hidden">
            <button>
                <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                    </path>
                </svg>
            </button>
          </div>
          <div>
              <button className='btn px-2 font-medium text-sm px-5 py-2.5 mr-2 mb-2'>Login</button>
              <button className='bg-btn text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Sign up</button>
          </div>
          </div>

    </div>

  )
}

export default Header