
import "./App.css";
import Home from './containers/Home.tsx';

import ToolBar from './components/ToolBar/ToolBar.tsx';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './containers/AboutMe.tsx';

const App = () => (
  <>
    <header>
      <ToolBar/>
    </header>
    <main className="container mt-4">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </main>
    </>
    );

    export default App;
