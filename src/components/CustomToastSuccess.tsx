import React from "react";
import Toast from "react-bootstrap/Toast";
import { ToastContainer } from "./Toast.styles";
import { ToastProps } from "./Toast.types";

export default function CustomToastSuccess({ onClose, show }: ToastProps) {
  return (
    <ToastContainer>
      <Toast onClose={onClose} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="mr-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>Woohoo, you did it!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
