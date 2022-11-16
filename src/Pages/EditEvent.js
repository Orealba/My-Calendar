import React, { useState } from 'react'
import './EditEvent.css'
import CalendarHeader from '../Components/CalendarHeader.js'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const EditEvent = (props) => {
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
      <CalendarHeader />
      <div className="editEvent__box">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              value={location.state.editEvents.title}
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Description
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              value={location.state.editEvents.description}
            />
          </div>
          <div className="col-12">
            <label for="inputPassword4" class="form-label">
              Start Date
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              value={location.state.editEvents.start}
            />
          </div>
          <div className="col-12">
            <label for="inputPassword4" class="form-label">
              End Date
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              value={location.state.editEvents.end}
            />
          </div>
          <div class="col-12"></div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <Button
            variant="primary"
            className="editEvent__save__button"
            onClick={redirection}
          >
            Save
          </Button>{' '}
        </form>
      </div>
    </div>
  )
}

export default EditEvent
