import React from "react";
import Toast, { ToastProps } from "react-bootstrap/Toast";
import { ToastContainer } from "./Toast.styles";

export default function CustomToastError({ onClose, show }: ToastProps) {
  return (
    <ToastContainer>
      <Toast onClose={onClose} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="mr-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>Woohoo, something get wrong!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
