import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

// ---------- Page 1: Movie List ----------
const movies = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
  image: "https://via.placeholder.com/150"
}));

function MovieList() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Movies</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)} style={{ cursor: "pointer", textAlign: "center", border: "1px solid #ccc", padding: 10 }}>
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
      <p>Movie ID: {id}</p>
      <button onClick={() => navigate("/book")}>Book Seat</button>
    </div>
  );
}

// ---------- Page 3: Booking Form ----------
function BookingForm({ setUser }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const submitForm = () => {
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
  const bookingId = Math.floor(Math.random() * 1000000);

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
