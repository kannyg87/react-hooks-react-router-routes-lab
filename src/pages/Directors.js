import { directors } from "../data";
import NavBar from "../components/NavBar";

function Directors() {
  console.log(directors);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      <h1>Directors Page</h1>
        {directors.map((director, index) => {
          return (
            <article key={index}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((mo) => (
                  <li key={mo}>{mo}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </main>
    </>
  );
}

export default Directors;
