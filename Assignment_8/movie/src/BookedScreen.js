import React from 'react';

function randomId() {
  return Math.floor(Math.random() * 900000 + 100000);
}

function BookedScreen() {
  const data = JSON.parse(localStorage.getItem('data'));

  return (
    <div>
      <h2>Seat Booked</h2>

      <p>Booking ID: {randomId()}</p>
      <p>Seat No: {String.fromCharCode(65 + Math.floor(Math.random() * 23))}{Math.floor(Math.random() * 20) + 1}</p>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
      <p>Mobile: {data?.mobile}</p>
      <p>Seats: {data?.seats}</p>
    </div>
  );
}

export default BookedScreen;
