import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// ---------- Page 1: Movie List (Fetched) ----------
function MovieList() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const hindiMovies = data
          .filter((m) => Array.isArray(m.languages) && m.languages.includes("Hindi"))
          .slice(0, 16)
          .map((m, i) => ({
            id: i + 1,
            title: m.title,
            image: `https://picsum.photos/200/300?random=${i + 1}`
          }));

        if (hindiMovies.length === 0) {
          setMovies([
            { id: 1, title: "3 Idiots", image: "https://picsum.photos/200/300?random=1" },
            { id: 2, title: "Dangal", image: "https://picsum.photos/200/300?random=2" },
            { id: 3, title: "PK", image: "https://picsum.photos/200/300?random=3" },
            { id: 4, title: "Lagaan", image: "https://picsum.photos/200/300?random=4" }
          ]);
        } else {
          setMovies(hindiMovies);
        }
      })
      .catch(() => {
        setMovies([
          { id: 1, title: "3 Idiots", image: "https://picsum.photos/200/300?random=1" },
          { id: 2, title: "Dangal", image: "https://picsum.photos/200/300?random=2" },
          { id: 3, title: "PK", image: "https://picsum.photos/200/300?random=3" },
          { id: 4, title: "Lagaan", image: "https://picsum.photos/200/300?random=4" }
        ]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h3 style={{ padding: 20 }}>Loading movies...</h3>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Movies</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            style={{ border: "1px solid #ccc", padding: 10, cursor: "pointer", textAlign: "center" }}
          >
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Page 2: Movie Details ----------
function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Movie Details</h2>
      <p>Selected Movie ID: {id}</p>
      <button onClick={() => navigate("/book")}>Book Seat</button>
    </div>
  );
}

// ---------- Page 3: Booking Form ----------
function BookingForm({ setUser }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const submitForm = () => {
    if (!form.name || !form.email || !form.mobile) return alert("Fill all fields");
    setUser(form);
    navigate("/success");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Book Seat</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} /><br /><br />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} /><br /><br />
      <input placeholder="Mobile" onChange={(e) => setForm({ ...form, mobile: e.target.value })} /><br /><br />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

// ---------- Page 4: Success ----------
function Success({ user }) {
  const bookingId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div style={{ padding: 20 }}>
      <h2>Seat Booked Successfully</h2>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Mobile: {user.mobile}</p>
    </div>
  );
}

// ---------- App ----------
export default function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book" element={<BookingForm setUser={setUser} />} />
        <Route path="/success" element={<Success user={user} />} />
      </Routes>
    </Router>
  );
}
