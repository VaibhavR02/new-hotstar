import Spinner from 'react-bootstrap/Spinner';
import React from 'react';
export default function LoadingBox() {
  return (
    <Spinner animation="border" className="text-white" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
