import React, { useState, useRef, useCallback, useEffect } from 'react'
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

const MyCalendar = (props) => {
  const [selectedEvent, setSelectedEvent] = useState({
    title: '',
    description: '',
    start_date: '',
    end_date: '',
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
    }, 250)
  }, [])

  const [isLoading, setIsLoading] = useState(true)
  const [events, setEvents] = useState([])

  useEffect(() => {
    handleAddEvent('')
  }, [])
  const handleAddEvent = (message) => {
    console.log(process.env.BACK_URL)
    fetch(`${process.env.REACT_APP_BACK_URL}`)
      .then((response) => response.json())
      .then((theEvent) => {
        setEvents(theEvent)
        setIsLoading(false)
      })
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div>
      <AddEvent handleAddEvent={handleAddEvent} />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start_date"
        endAccessor="end_date"
        style={{ height: 500, margin: '50px' }}
        onSelectEvent={showModal}
      />
      <ModalEvent
        handleAddEvent={handleAddEvent}
        show={show}
        handleClose={handleClose}
        selectedEvent={selectedEvent}
      />
    </div>
  )
}

export default MyCalendar
