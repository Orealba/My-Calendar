import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './ModalEvent.css'

const ModalEvent = (props) => {
  console.log(props.selectedEvent)
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.selectedEvent ? props.selectedEvent.title : ''}
            {props.selectedEvent ? props.selectedEvent.start.toString() : ''}
            {props.selectedEvent ? props.selectedEvent.end.toString() : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.selectedEvent ? props.selectedEvent.description : ''}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>

          <Button variant="primary">Edit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default ModalEvent
