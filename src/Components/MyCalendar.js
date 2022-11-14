import React, { useState, useRef, useCallback } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import './MyCalendar.css'
import './AddEvent.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ModalEvent from './ModalEvent'

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
    description: 'trip to Coruña',
    allDay: true,
    start: new Date(2022, 11, 14),
    end: new Date(2023, 0, 16),
  },
]

const MyCalendar = (props) => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    start: '',
    end: '',
  })
  const [allEvents, setAllEvents] = useState(events)
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
    setNewEvent({
      title: '',
      description: '',
      start: '',
      end: '',
    })
  }
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const clickRef = useRef(null)

  const showModal = useCallback((calEvent) => {
    console.log(calEvent)
    window.clearTimeout(clickRef?.current)
    clickRef.current = window.setTimeout(() => {
      console.log(calEvent)
      // window.alert(buildMessage(calEvent, 'onSelectEvent'))
    }, 250)
  }, [])

  return (
    <div>
      <div>
        <h2 className="addEvent__title">Add New Event to the Calendar</h2>
        <input
          type={'text'}
          placeholder="Add Title"
          className="addEvent__title__input"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type={'text'}
          placeholder="Add Description"
          className="addEvent__title__input"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />
        <DatePicker
          placeholderText="Start Date"
          classname="addEvent__title__input"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          classname="addEvent__title__input"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button className="addEvent__button__sudmit" onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
        onSelectEvent={showModal}
      />
    </div>
  )
}

export default MyCalendar
