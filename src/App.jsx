import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Chart from "./pages/Chart/Chart";

function App() {
  const routes = createBrowserRouter([
    { index: true, element: <Home /> },
    {path: "/Chart/:id" , element : <Chart/>}
  ])
  return <>
    <RouterProvider router={routes}></RouterProvider>
  </>
}

export default App;
