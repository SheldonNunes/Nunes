import './App.css';
import SiblingPage from './pages/Sibling';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import FamilyPage from './pages/Family';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dinners/sibling" element={<SiblingPage />} />
          <Route path="/dinners/family" element={<FamilyPage />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
