import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
    name: '',
    email: '',
    specialRequests: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
    
    // Update available times when date changes
    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.date) errors.date = 'Please select a date';
    if (!formData.time) errors.time = 'Please select a time';
    if (formData.guests < 1) errors.guests = 'At least 1 guest is required';
    if (!formData.name) errors.name = 'Please enter your name';
    if (!formData.email) errors.email = 'Please enter your email';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Please enter a valid email';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const success = submitForm(formData);
      if (success) {
        navigate('/confirmed');
      }
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
        onChange={handleInputChange}
        required
        aria-label="Choose reservation date"
      />
      {formErrors.date && <p className="error">{formErrors.date}</p>}

      <label htmlFor="res-time">Choose Time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleInputChange}
        required
        aria-label="Choose reservation time"
      >
        <option value="">Select a time</option>
        {availableTimes.map(time => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {formErrors.time && <p className="error">{formErrors.time}</p>}

      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleInputChange}
        required
        aria-label="Number of guests"
      />
      {formErrors.guests && <p className="error">{formErrors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleInputChange}
        aria-label="Occasion"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Business">Business</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit" aria-label="Make your reservation">Reserve a Table</button>
    </form>
  );
}

export default BookingForm;