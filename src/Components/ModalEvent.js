import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './ModalEvent.css'

const ModalEvent = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Edit
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default ModalEvent
