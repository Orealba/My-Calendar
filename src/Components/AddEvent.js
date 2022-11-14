import React, { useState } from 'react'
import './AddEvent.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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
const AddEvent = (props) => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    start: '',
    end: '',
  })
  const [allEvents, setAllEvents] = useState(events)
  function handleAddEvent(props) {
    setAllEvents([...allEvents, newEvent])
  }
  return (
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
  )
}

export default AddEvent
