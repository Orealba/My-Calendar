import React, { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import './MyCalendar.css'
import DatePicker from 'react-datepicker'

const locales = {
  'en-GB': require('date-fns/locale/en-GB'),
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
const events = [
  {
    title: 'doctor',
    description: 'cheacking and results',
    allDay: true,
    start: new Date(2022, 10, 25),
    end: new Date(2022, 10, 25),
  },
  {
    title: 'vacations',
    description: 'travel to Coruña',
    allDay: true,
    start: new Date(2022, 11, 14),
    end: new Date(2023, 0, 16),
  },
]

const MyCalendar = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  )
}

export default MyCalendar
