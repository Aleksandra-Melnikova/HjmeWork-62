import "./App.css";
import Home from "./containers/Home.tsx";

import ToolBar from "./components/ToolBar/ToolBar.tsx";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./containers/AboutMe.tsx";
import Contacts from "./containers/Contacts.tsx";

import Portfolio from "./containers/Portfolio.tsx";
import CountriesPage from "./containers/countryPage/containers/CountriesPage/CountriesPage.tsx";
import Chat from "./containers/Chat/containers/Chat/Chat.tsx";

const App = () => (
  <>
    <header>
      <ToolBar />
    </header>
    <main className="container mt-4 main-container">
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Portfolio" element={<Portfolio />}>
          <Route path="CountryPage" element={<CountriesPage />} />
          <Route path="Chat" element={<Chat />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </main>
    <footer className="bg-light footer">
      <div className="container p-4 text-start fs-5 ps-5">
        © A.Melnikova, 2024
      </div>
    </footer>
  </>
);

export default App;
