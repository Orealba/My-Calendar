import React, { useState, useEffect } from 'react'
import './Edit.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Edit = (props) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  let { id } = useParams()
  console.log(id)
  const [event, setEvent] = useState({
    title: '',
    description: '',
    start_date: '',
    end_date: '',
  })
  const onClick = () => {
    console.log(JSON.stringify(event))
    fetch(`http://localhost:5000/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(event),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((json) => navigate(`/`))
      .catch((err) =>
        //props.handleAddEvent('did not update')
        console.log(err)
      )
  }
  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then((response) => response.json())
      .then((theEvent) => {
        console.log(theEvent)
        setEvent(theEvent)
        setIsLoading(false)
      })
  }, [])
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

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
              defaultValue={event.title}
              onChange={(e) => setEvent({ ...event, title: e.target.value })}
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
              defaultValue={event.description}
              onChange={(e) =>
                setEvent({ ...event, description: e.target.value })
              }
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
              selected={new Date(event.start_date).getTime()}
              onChange={(start_date) => setEvent({ ...event, start_date })}
            />
          </div>
          <div className=" col-md-6 editEvent__datePicker__box">
            <DatePicker
              placeholderText="End Date"
              className="form-control"
              selected={new Date(event.end_date).getTime()}
              onChange={(end_date) => setEvent({ ...event, end_date })}
            />
          </div>
          <Button
            variant="primary"
            className="editEvent__save__button"
            onClick={onClick}
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Edit
