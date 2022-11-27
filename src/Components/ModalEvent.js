import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './ModalEvent.css'
import { useNavigate } from 'react-router-dom'

const ModalEvent = (props) => {
  const deleteEvent = () => {
    fetch(`http://localhost:5000/api/events/${props.selectedEvent.id}`, {
      method: 'DELETE',
    })
      .then((json) => props.handleAddEvent('Deleted'))
      .then(props.handleClose)
      .catch((err) =>
        //props.handleAddEvent('did not update')
        console.log(err)
      )
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
            {props.selectedEvent ? props.selectedEvent.title : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.selectedEvent ? props.selectedEvent.description : ''}
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
