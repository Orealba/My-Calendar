import React from 'react'
import './CalendarHeader.css'
import { useNavigate } from 'react-router-dom'

const CalendarHeader = () => {
  const navigate = useNavigate()
  const redirection = () => {
    navigate('/')
  }
  return (
    <div className="row calendarHeader__box">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <h1 className="calendar-header__title" onClick={redirection}>
          MY CALENDAR
        </h1>
        <h4 className="calendar-header__description">
          Add and edit your events easily.
          <br></br>
          Let's start:
        </h4>
      </div>
      <div className="col-md-4"></div>
    </div>
  )
}

export default CalendarHeader
