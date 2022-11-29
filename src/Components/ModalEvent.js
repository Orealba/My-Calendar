import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './ModalEvent.css'
import { useNavigate } from 'react-router-dom'

const ModalEvent = (props) => {
  const deleteEvent = () => {
    fetch(`${process.env.REACT_APP_BACK_URL}/${props.selectedEvent.id}`, {
      method: 'DELETE',
    })
      .then((json) => props.handleAddEvent('Deleted'))
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
            {props.selectedEvent ? props.selectedEvent.title : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.selectedEvent ? props.selectedEvent.description : ''}
        </Modal.Body>
        <Modal.Body>
          {props.selectedEvent
            ? new Date(props.selectedEvent.start_date).toLocaleDateString()
            : ''}
          <p>
            {props.selectedEvent
              ? new Date(props.selectedEvent.end_date).toLocaleDateString()
              : ''}
          </p>
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
