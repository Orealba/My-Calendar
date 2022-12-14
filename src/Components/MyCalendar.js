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
import Alert from 'react-bootstrap/Alert'

const locales = {
  'en-GB': require('date-fns/locale/en-GB'),
}
/*configuration for calendar*/
const styleCalendar = { height: 550, margin: '5px' }
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const MyCalendar = () => {
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
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    handleAddEvent('')
  }, [])
  const handleAddEvent = () => {
    fetch(`${process.env.REACT_APP_BACK_URL}`)
      .then((response) => response.json())
      .then((theEvent) => {
        setEvents(theEvent)
        setIsLoading(false)
      })
      .catch(() => {
        setShowAlert(true)
        setTimeout(() => {
          setShowAlert(false)
        }, 5000)
      })
  }

  if (isLoading) {
    return (
      <div>
        <h1 className="myCalendar__h1__loading"> Loading...</h1>
      </div>
    )
  }
  return (
    <div className="row myCalendar__box">
      <div className="col-md-1"></div>
      <div className="col-md-2 myCalendar__addEvent">
        <h2 className="myCalendar__title_h2">Create event:</h2>
        <AddEvent handleAddEvent={handleAddEvent} showAlert={setShowAlert} />
      </div>
      <div className="col-md-6 row myCalendar__calendar">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start_date"
          endAccessor="end_date"
          style={styleCalendar}
          onSelectEvent={showModal}
        />
      </div>
      <div className="col-md-3"></div>

      <ModalEvent
        handleAddEvent={handleAddEvent}
        show={show}
        handleClose={handleClose}
        selectedEvent={selectedEvent}
      />
      {showAlert && (
        <Alert variant="danger" dismissible onClose={() => setShowAlert(false)}>
          <Alert.Heading>
            Oh no! You got an error! Try again please.
          </Alert.Heading>
        </Alert>
      )}
    </div>
  )
}

export default MyCalendar
