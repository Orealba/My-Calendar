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
      <div className="col-md-4">
        <img
          src="Pictures/FactorialLogo.png"
          className="calendar-header-logo"
          onClick={redirection}
        ></img>
      </div>
      <div className="col-md-4">
        <h1 className="calendar-header__title">MY CALENDAR</h1>
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
