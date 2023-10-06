import { movies } from "../data";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const params = useParams();
  const movie = movies.find((m) => m.title === params.title);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        Movie info here!
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <p>
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </p>
      </main>
    </>
  );
}

export default Movie;
