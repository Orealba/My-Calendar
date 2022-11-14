import React from 'react'
import './App.css'
import CalendarHeader from './Components/CalendarHeader.js'
import MyCalendar from './Components/MyCalendar.js'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const App = () => {
  return (
    <div>
      <CalendarHeader />
      <MyCalendar />
    </div>
  )
}

export default App
