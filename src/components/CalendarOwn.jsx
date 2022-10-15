import React, { useState } from 'react'
import Calendar from 'react-calendar';
function CalendarOwn() {
    const [value,setValue] = useState(new Date())
  return (
    <div className='my-32'>
      <p className='font-medium text-lg mx-4'>Calendar</p>
      <Calendar className='w-full mx-5 bg-white p-4 ' onChange={setValue} value={value} />
    </div>
  )
}

export default CalendarOwn