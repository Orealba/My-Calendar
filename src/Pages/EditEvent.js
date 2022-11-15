import React from 'react'
import './EditEvent.css'
import CalendarHeader from '../Components/CalendarHeader.js'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { useLocation } from 'react-router-dom'

const EditEvent = (props) => {
  const location = useLocation()
  console.log(location.state.editEvents)
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
            <input type="text" class="form-control" id="inputPassword4" />
          </div>

          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Time
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
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
          <button
            className="addEvent__button__sudmit"
            onClick={props.handleAddEvent}
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditEvent
