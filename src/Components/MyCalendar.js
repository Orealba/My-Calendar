import React, { useState, useRef, useCallback } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import './MyCalendar.css'
import './AddEvent.css'
import 'react-datepicker/dist/react-datepicker.css'
import ModalEvent from './ModalEvent'
import AddEvent from './AddEvent'

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
  const [selectedEvent, setSelectedEvent] = useState({
    title: '',
    description: '',
    start: '',
    end: '',
  })

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const clickRef = useRef(null)

  const showModal = useCallback((calEvent) => {
    setSelectedEvent(calEvent)
    window.clearTimeout(clickRef?.current)
    clickRef.current = window.setTimeout(() => {
      handleShow()

      //window.alert(buildMessage(calEvent, 'onSelectEvent'))
    }, 250)
  }, [])

  return (
    <div>
      <AddEvent
        setNewEvent={setNewEvent}
        newEvent={newEvent}
        handleAddEvent={handleAddEvent}
        allEvents={allEvents}
      />
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
        onSelectEvent={showModal}
      />
      <ModalEvent
        show={show}
        handleClose={handleClose}
        selectedEvent={selectedEvent}
      />
    </div>
  )
}

export default MyCalendar
