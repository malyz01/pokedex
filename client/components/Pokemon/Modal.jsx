import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'

import { setError } from '../../store/actions/error'

const CsmModal = (props) => {
  const handleClose = () => {
    props.setError()
  }

  return (
    <Modal show={!!props.err.status} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Get Pokemon failed</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.err.message}</Modal.Body>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  err: state.error
})

export default connect(mapStateToProps, { setError })(CsmModal)
