import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import './MyCalendar.css'

import AddEvent from './AddEvent.js'

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

const MyCalendar = (props) => {
  return (
    <div>
      <AddEvent classname="mycalendar__addEvent__component" />
      <Calendar
        localizer={localizer}
        events={props.allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  )
}

export default MyCalendar
