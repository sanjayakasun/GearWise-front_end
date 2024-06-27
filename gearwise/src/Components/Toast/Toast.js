import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

const ToastMessage = ({ show, setShow, message, variant }) => {
  return (
    <center>
    <Toast onClose={() => setShow(false)} show={show} delay={1000} autohide bg={variant}>
      <Toast.Header>
        <strong className="me-auto">Sucess</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
    </center>
  );
};

export default ToastMessage;
