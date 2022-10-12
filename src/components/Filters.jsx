import React from 'react'

function Filters() {
  return (
    <div className='filters mx-auto py-5 border-t  bg-white'>
              <div className='flex flex-wrap justify-center'>
              <label htmlFor="select" className='mx-5 font-medium text-sm'>
                  Sub category
                  <select id="small" class="block p-2 mb-6  h-10 text-sm text-gray-400 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                    <option selected>Choose</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    </select>
              </label>
              <label htmlFor="select" className='font-medium text-sm'>
                  Language
                  <select id="small" class="block p-2 mb-6 h-10 text-sm text-gray-400  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                    <option selected>Choose</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    </select>
              </label>
                  <label htmlFor="input" className='mx-5 font-medium text-sm'>
                      Price ($)
                      <div className=''>
                        <input type="number" className='border w-24 h-10 mr-5 rounded-lg bg-gray-100 px-3 text-gray-500' placeholder='Min' />
                        <input type="number" className='border w-24 h-10 rounded-lg bg-gray-100 px-3 text-gray-500' placeholder='Max'/>
                      </div>
                  </label>
              </div>
          </div>
  )
}

export default Filters