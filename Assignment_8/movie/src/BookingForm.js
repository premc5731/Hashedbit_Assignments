import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function BookingForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    seats: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.mobile) {
      setError("All fields are required");
      return;
    }

    localStorage.setItem("data", JSON.stringify(form));
    navigate("/booked");
  };

  return (
    <div className="form-container">
      <h2> - Book Your Seat - </h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="seats"
          placeholder="Number of seats"
          value={form.seats}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
        />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
