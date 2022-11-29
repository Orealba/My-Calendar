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

  const [event, setEvent] = useState({
    title: '',
    description: '',
    start_date: '',
    end_date: '',
  })
  const onClick = () => {
    fetch(`http://localhost:5000/api/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(event),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((json) => navigate(`/`))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetch(`http://localhost:5000/api/events/${id}`)
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
        <h1 className="edit_title"> Loading...</h1>
      </div>
    )
  }

  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4 editEvent__box">
        <form>
          <div className="row">
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                <h4 className="edit__form__titles">Title: </h4>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                defaultValue={event.title}
                onChange={(e) => setEvent({ ...event, title: e.target.value })}
              />
            </div>
          </div>
          <div className="row">
            <div className=" col-md-12 editEvent__datePicker__box">
              <label for="inputEmail4">
                <h4 className="edit__form__titles">Start:</h4>
              </label>
              <DatePicker
                placeholderText="Start Date"
                className="form-control"
                selected={new Date(event.start_date).getTime()}
                onChange={(start_date) =>
                  setEvent({
                    ...event,
                    start_date: new Date(
                      start_date.getTime() -
                        start_date.getTimezoneOffset() * 60000
                    ),
                  })
                }
              />
            </div>
          </div>
          <div className="row">
            <div className=" col-md-12 editEvent__datePicker__box">
              <label for="inputEmail4">
                <h4 className="edit__form__titles">End:</h4>
              </label>
              <DatePicker
                placeholderText="End Date"
                className="form-control"
                selected={new Date(event.end_date).getTime()}
                onChange={(end_date) =>
                  setEvent({
                    ...event,
                    end_date: new Date(
                      end_date.getTime() - end_date.getTimezoneOffset() * 61000
                    ),
                  })
                }
              />
            </div>
          </div>

          <div className="col-md-12">
            <label for="inputPassword4" className="form-label">
              <h4 className="edit__form__titles">Description: </h4>
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
          <Button
            variant="primary"
            className="editEvent__save__button"
            onClick={onClick}
          >
            Save
          </Button>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  )
}

export default Edit
