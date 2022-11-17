import React, { useState } from 'react'
import './EditOptions.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const EditOptions = (props) => {
  const navigate = useNavigate()
  const redirection = () => {
    navigate('/', {
      state: {
        editEvents: props.selectedEvent,
      },
    })
  }
  const location = useLocation()

  return (
    <div>
      <div className="editEvent__box">
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              defaultValue={location.state.editEvents.title}
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              defaultValue={location.state.editEvents.description}
            />
          </div>
          <div className=" col-md-6  ">
            <label for="inputEmail4">Start</label>
          </div>
          <div className=" col-md-6 ">
            <label for="inputEmail4">End</label>
          </div>
          <div className=" col-md-6 editEvent__datePicker__box">
            <DatePicker
              placeholderText="Start Date"
              className="form-control"
              selected={location.state.editEvents.start}
              onChange={(start) =>
                props.setNewEvent({ ...props.newEvent, start })
              }
            />
          </div>
          <div className=" col-md-6 editEvent__datePicker__box">
            <DatePicker
              placeholderText="End Date"
              className="form-control"
              selected={location.state.editEvents.end}
              onChange={(end) => props.setNewEvent({ ...props.newEvent, end })}
            />
          </div>
          <Button
            variant="primary"
            className="editEvent__save__button"
            onClick={redirection}
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  )
}

export default EditOptions
