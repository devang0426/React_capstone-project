import { useState } from 'react';
import '../App.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }

    const newErrors = { ...errors };
    if (name === 'date' && !value) newErrors.date = 'Date is required';
    else if (name === 'date') delete newErrors.date;
    if (name === 'time' && !value) newErrors.time = 'Time is required';
    else if (name === 'time') delete newErrors.time;
    if (name === 'guests' && (value < 1 || value > 10)) newErrors.guests = 'Guests must be 1-10';
    else if (name === 'guests') delete newErrors.guests;
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && formData.date && formData.time) {
      submitForm(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form" noValidate>
      <label htmlFor="res-date">Choose Date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        aria-label="Choose reservation date"
      />
      {errors.date && <span className="error">{errors.date}</span>}

      <label htmlFor="res-time">Choose Time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
        aria-label="Choose reservation time"
      >
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {errors.time && <span className="error">{errors.time}</span>}

      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="10"
        required
        aria-label="Number of guests"
      />
      {errors.guests && <span className="error">{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        aria-label="Occasion for reservation"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button
        type="submit"
        disabled={!formData.date || !formData.time || formData.guests < 1}
        aria-label="Submit reservation"
      >
        Submit Reservation
      </button>
    </form>
  );
}

export default BookingForm;