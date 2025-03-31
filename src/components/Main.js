import { useReducer, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import '../App.css';

const initializeTimes = () => {
  try {
    return window.fetchAPI(new Date());
  } catch (e) {
    console.error('API fetch failed:', e);
    return ['17:00', '18:00', '19:00'];
  }
};

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    try {
      return window.fetchAPI(new Date(action.date));
    } catch (e) {
      console.error('API update failed:', e);
      return state;
    }
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();
  const location = useLocation();

  const submitForm = (formData) => {
    try {
      const success = window.submitAPI(formData);
      if (success) {
        navigate('/confirmed');
      }
    } catch (e) {
      console.error('Submit failed:', e);
    }
  };

  useEffect(() => {
    if (location.pathname === '/booking') {
      dispatch({ type: 'UPDATE_TIMES', date: new Date() });
    }
  }, [location.pathname]);

  return (
    <main>
      {location.pathname === '/' && <Homepage />}
      {location.pathname === '/booking' && (
        <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      )}
      {location.pathname === '/confirmed' && <ConfirmedBooking />}
    </main>
  );
}

export default Main;