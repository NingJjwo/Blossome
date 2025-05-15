import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./pages/card";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Card/>
  }
  
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
