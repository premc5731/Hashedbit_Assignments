import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Movie Details – {id}</h2>

      <p>This is basic movie details page.</p>

      <button onClick={() => navigate('/form')}>
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;
