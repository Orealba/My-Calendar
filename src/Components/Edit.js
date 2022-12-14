import React, { useState, useEffect } from 'react'
import './Edit.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const Edit = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  let { id } = useParams()

  const [event, setEvent] = useState({
    title: '',
    description: '',
    start_date: '',
    end_date: '',
  })
  const [showAlert, setShowAlert] = useState(false)
  const onClick = () => {
    fetch(`${process.env.REACT_APP_BACK_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(event),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((response) => {
        if (response.ok) {
          navigate(`/`)
        } else {
          setShowAlert(true)
          setTimeout(() => {
            setShowAlert(false)
          }, 5000)
        }
      })
      .catch(() => {
        setShowAlert(true)
        setTimeout(() => {
          setShowAlert(false)
        }, 5000)
      })
  }
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_URL}/${id}`)
      .then((response) => response.json())
      .then((theEvent) => {
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
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 editEvent__box">
          <h2>Edit this event:</h2>
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
                  onChange={(e) =>
                    setEvent({ ...event, title: e.target.value })
                  }
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
                        end_date.getTime() -
                          end_date.getTimezoneOffset() * 61000
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
      {/** If all the fields are not filled in,
       * the alert appears and disappears after 5 seconds */}
      {showAlert && (
        <Alert variant="danger" dismissible onClose={() => setShowAlert(false)}>
          <Alert.Heading>
            Oh no! You got an error! Try again please.
          </Alert.Heading>
        </Alert>
      )}
    </>
  )
}

export default Edit
