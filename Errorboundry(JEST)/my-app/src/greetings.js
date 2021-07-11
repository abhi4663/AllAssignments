import React from 'react';
export default function Greetings({ User, role }) {
  if (role !== 'admin') {
    throw new Error('Role of the user must be Admin');
  }
  console.log('role is admin');
  return (
    <div data-testid='greetings-1'>
      Welcome {User.firstName} {User.lastName}
    </div>
  );
}
