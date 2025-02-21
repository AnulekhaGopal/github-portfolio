import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Root from "./Components/Root";
import Contact from "./Components/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "/", element: <Home /> },
        { path: "/skills", element: <Skills /> },
        { path: "/projects", element: <Projects /> },
        { path: "/education", element: <Education /> },
        { path: "/experience", element: <Experience /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
