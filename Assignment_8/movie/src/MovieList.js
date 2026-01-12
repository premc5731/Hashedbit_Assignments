import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const movies = [
  {
    id: 1,
    name: "Avengers",
    img: "https://image.tmdb.org/t/p/w300/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
  },
  {
    id: 2,
    name: "Batman",
    img: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: 3,
    name: "Punisher",
    img: "https://images.thedirect.com/media/photos/pun1_PXX8Wo5.jpg"
  },
  {
    id: 4,
    name: "Spiderman",
    img: "https://image.tmdb.org/t/p/w300/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg"
  },
  {
    id: 5,
    name: "Joker",
    img: "https://image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    id: 6,
    name: "Green Book",
    img: "https://m.media-amazon.com/images/S/pv-target-images/152cb27107a339c0828b8d576dac1b65cde898744ad0f0b4e49f06770c2103e8.jpg"
  },
  {
    id: 7,
    name: "Iron Man",
    img: "https://image.tmdb.org/t/p/w300/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
  },
  {
    id: 8,
    name: "Thor",
    img: "https://image.tmdb.org/t/p/w300/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg"
  },
  {
    id: 9,
    name: "Hulk",
    img: "https://image.tmdb.org/t/p/w300/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg"
  },
  {
    id: 10,
    name: "Fight club",
    img: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 11,
    name: "Daredevil",
    img: "https://resizing.flixster.com/NR8vSJ2c8Pre9Ktp9bgPZVIOtDU=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11408531_b_v9_aa.jpg"
  },
  {
    id: 12,
    name: "X-man",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159376_p_v8_aw.jpg"
  },
  {
    id: 13,
    name: "Hangover",
    img: "https://image.tmdb.org/t/p/original/6ehsVHJGeuhPZIN30f2Bi99xBpj.jpg"
  },
  {
    id: 14,
    name: "Avengers- Age of ultron",
    img: "https://images.justwatch.com/poster/164114252/s718/avengers-age-of-ultron.jpg"
  },
  {
    id: 15,
    name: "Project X",
    img: "https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/project_x_2000x3000.jpg"
  },
  {
    id: 16,
    name: "Matrix",
    img: "https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  }
];

function MovieList() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Movie List</h2>

      <div className="grid">
        {movies.map(movie => (
          <div className="card" key={movie.id}>
            <img
              src={movie.img}
              alt={movie.name}
              width="150"
              height="220"
            />
            <p>{movie.name}</p>
            <button onClick={() => navigate(`/details/${movie.id}`)}>
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
