import React from 'react'

import './MyCalendar.css'
import './AddEvent.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AddEvent = (props) => {
  return (
    <div className="row">
      <div className="col md 12 addEvent__box">
        <input
          type={'text'}
          placeholder="Add Title"
          className="addEvent__title__input"
          value={props.newEvent.title}
          onChange={(e) =>
            props.setNewEvent({ ...props.newEvent, title: e.target.value })
          }
        />
        <input
          type={'text'}
          placeholder="Add Description"
          className="addEvent__title__input"
          value={props.newEvent.description}
          onChange={(e) =>
            props.setNewEvent({
              ...props.newEvent,
              description: e.target.value,
            })
          }
        />
        <DatePicker
          placeholderText="Start Date"
          className="addEvent__datePicker"
          selected={props.newEvent.start}
          onChange={(start) => props.setNewEvent({ ...props.newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          className="addEvent__datePicker"
          selected={props.newEvent.end}
          onChange={(end) => props.setNewEvent({ ...props.newEvent, end })}
        />
        <button
          className="addEvent__button__sudmit"
          onClick={props.handleAddEvent}
        >
          Add Event
        </button>
      </div>
    </div>
  )
}
export default AddEvent
