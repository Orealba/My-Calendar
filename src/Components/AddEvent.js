import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './MyCalendar.css'
import './AddEvent.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const theNewEvent = {
  title: '',
  description: '',
  start_date: '',
  end_date: '',
}

const AddEvent = (props) => {
  const [newEvent, setNewEvent] = useState(theNewEvent)
  const onClick = () => {
    console.log(JSON.stringify(newEvent))
    fetch('http://localhost:5000/api/events', {
      method: 'POST',
      body: JSON.stringify(newEvent),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((response) => response.json())
      .then((json) => props.handleAddEvent('It has updated'))
      .then(setNewEvent(theNewEvent))
      .catch((err) =>
        //props.handleAddEvent('did not update')
        console.log(err)
      )
  }

  return (
    <div className="row">
      <div className="col md 12 addEvent__box">
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
            setNewEvent({
              ...newEvent,
              description: e.target.value,
            })
          }
        />
        <DatePicker
          placeholderText="Start Date"
          className="addEvent__datePicker"
          selected={newEvent.start_date}
          onChange={(start_date) =>
            setNewEvent({
              ...newEvent,
              start_date: new Date(
                start_date.getTime() - start_date.getTimezoneOffset() * 60000
              ),
            })
          }
        />
        <DatePicker
          placeholderText="End Date"
          className="addEvent__datePicker"
          selected={newEvent.end_date}
          onChange={(end_date) =>
            setNewEvent({
              ...newEvent,
              end_date: new Date(
                end_date.getTime() - end_date.getTimezoneOffset() * 60001
              ),
            })
          }
        />
        <Button
          variant="primary"
          className="addEvent__button__sudmit"
          onClick={onClick}
        >
          Add Event
        </Button>
      </div>
    </div>
  )
}
export default AddEvent
