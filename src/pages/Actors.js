import { actors } from "../data";
import NavBar from "../components/NavBar";


function Actors() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <h1>Actors Page</h1>
        {actors.map((act, index) => {
          return <article key={index}>
          <h2>{act.name}</h2>
          <ul>
           
            {act.movies.map((a, index) => <li key={index}>{a}</li>)}
      
          </ul>
          
        </article>
        })}
      </main>
    </>
  );
};

export default Actors;
