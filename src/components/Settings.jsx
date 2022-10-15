import React,{useState,useEffect} from 'react'

function Settings() {
    const [isAuth,setIsAuth] = useState()
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('user-info'))
      if(data) setIsAuth(data)
    }, [])
      
  return (
      <div className='my-32 bg-white mx-5 rounded-lg w-full'>
          <p className='font-medium text-lg mx-4 my-3'>Settings</p>
          <div className='mx-5 my-5 headSection flex'>
              <img src={isAuth?.photo} alt="" className='w-10 h-10 mx-4'/>
              <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Change profile photo</button>
              <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-blue-400 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  '>Delete Photo</button>
          </div>
          <p className='font-medium text-lg mx-4'>Personal Information</p>
          <form action="">
          <div class="flex mx-5 my-5">
            <div class="mr-5 mb-6 w-full">
                <input type="text"  className="w-full py-2.5 px-2 text-sm text-gray-900 bg-gray-200  border-0  rounded-lg " placeholder="Name" required />
            </div>
            <div class="mb-6 w-full">
                <input type="text"  className="w-full py-2.5 px-2 text-sm text-gray-900 bg-gray-200  border-0 rounded-lg " placeholder="Surname" required />
            </div>
              </div>
              <div class="flex mx-5 my-5">
            <div class="mr-5 mb-6 w-full">
                <input type="text"  className="w-full py-2.5 px-2 text-sm text-gray-900 bg-gray-200  border-0  rounded-lg " placeholder="Occupation" required />
            </div>
            <div class="mb-6 w-full">
                <input type="email"  className="w-full py-2.5 px-2 text-sm text-gray-900 bg-gray-200  border-0 rounded-lg " placeholder="Email" required />
                  </div>
                  
              </div>
              <div class="flex mx-5 my-5">
            <div class="mr-5 mb-6 w-full">
            <select  class="block p-2 mb-6 w-full h-10 text-sm text-gray-400 rounded-lg border bg-gray-200  border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                    <option selected>Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    </select>
            </div>
            <div class="mb-6 w-full">
            <select  class="block p-2 mb-6 w-full h-10 text-sm text-gray-400 rounded-lg border bg-gray-200  border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                    <option selected>City</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    </select>
            </div>
              </div>
          </form>
    </div>
  )
}

export default Settings