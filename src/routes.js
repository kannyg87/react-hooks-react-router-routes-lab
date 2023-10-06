import Home from '../src/pages/Home'
import Movie from '../src/pages/Movie'
import Directors from '../src/pages/Directors'
import Actors from '../src/pages/Actors'
import ErrorPage from '../src/pages/ErrorPage'



const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/movie/:title",
    element: <Movie />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  }
   
  ];

export default routes;