import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Homepage from './Components/Homepage';
import Vidiopage from './Components/Vidiopage';

function App() {

  const router =createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/room/:id",
      element: <Vidiopage/>,
    },
  ]);


  return (
    <>
    <RouterProvider router={router}/>
      
    </>
  )
}

export default App
