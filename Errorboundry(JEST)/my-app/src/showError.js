import React from 'react';

export default function ShowError(props) {
  return (
    <>
      <p style={{ color: 'red' }}>{props.error.message}</p>
    </>
  );
}
