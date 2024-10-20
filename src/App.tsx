import "./App.css";
import Home from "./containers/Home.tsx";

import ToolBar from "./components/ToolBar/ToolBar.tsx";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./containers/AboutMe.tsx";
import Contacts from "./containers/Contacts.tsx";

const App = () => (
  <>
    <header>
      <ToolBar />
    </header>
    <main className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </main>
    <footer className="bg-light">
      <div className="container p-4 text-start fs-5 ps-5">
        © A.Melnikova, 2024
      </div>
    </footer>
  </>
);

export default App;
