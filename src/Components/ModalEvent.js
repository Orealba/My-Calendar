import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './ModalEvent.css'
import { useNavigate } from 'react-router-dom'

const ModalEvent = (props) => {
  const deleteEvent = () => {
    fetch(`${process.env.REACT_APP_BACK_URL}/${props.selectedEvent.id}`, {
      method: 'DELETE',
    })
      .then(() => props.handleAddEvent('The event has been deleted'))
      .then(props.handleClose)
      .catch((err) => console.log(err))
  }

  const navigate = useNavigate()
  const redirection = () => {
    navigate(`/editevent/${props.selectedEvent.id}`)
  }

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>
              Title: {props.selectedEvent ? props.selectedEvent.title : ''}
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            Description:
            {props.selectedEvent ? props.selectedEvent.description : ''}
          </h4>
        </Modal.Body>
        <hr></hr>
        <Modal.Body className="modalEvent__h4__dates">
          <h4 className="modalEvent__h4__dates__start">
            Start:
            {props.selectedEvent
              ? new Date(props.selectedEvent.start_date).toLocaleDateString()
              : ''}
          </h4>
          <h4>
            End:
            {props.selectedEvent
              ? new Date(props.selectedEvent.end_date).toLocaleDateString()
              : ''}
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="modalEvent__buttons"
            onClick={redirection}
          >
            Edit
          </Button>
          <Button
            variant="primary"
            className="modalEvent__buttons"
            onClick={deleteEvent}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default ModalEvent
