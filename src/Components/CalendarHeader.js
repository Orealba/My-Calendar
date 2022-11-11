import React from 'react'
import './CalendarHeader.css'

const CalendarHeader = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src="Pictures/FactorialLogo.png"
            className="calendar-header-logo"
          ></img>
        </div>
        <div className="col-md-4">
          <h1 className="calendar-header__title">MY CALENDAR</h1>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  )
}

export default CalendarHeader
