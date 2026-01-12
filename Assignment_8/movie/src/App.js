import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import BookingForm from './BookingForm';
import BookedScreen from './BookedScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/form" element={<BookingForm />} />
        <Route path="/booked" element={<BookedScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
