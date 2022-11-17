import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './ModalEvent.css'
import { useNavigate } from 'react-router-dom'

const ModalEvent = (props) => {
  console.log(props.selectedEvent)
  const navigate = useNavigate()
  const redirection = () => {
    navigate(`/editevent/${props.selectedEvent.id}`, {
      state: {
        editEvents: props.selectedEvent,
      },
    })
  }

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.selectedEvent ? props.selectedEvent.title : ''}
            {props.selectedEvent ? props.selectedEvent.start_date : ''}
            {props.selectedEvent ? props.selectedEvent.end_date : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.selectedEvent ? props.selectedEvent.description : ''}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="modalEvent__buttons"
            onClick={props.handleClose}
          >
            Close
          </Button>

          <Button
            variant="primary"
            className="modalEvent__buttons"
            onClick={redirection}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default ModalEvent
