import { movies } from "../data";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map((movie, index) => (
          <MovieCard key={index} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;
