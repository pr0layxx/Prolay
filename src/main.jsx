import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Skills from "./pages/Skills.jsx";
import Home from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <ProjectsSection />,
      },
      {
        path: "/skills",
        element: <SkillsSection />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
