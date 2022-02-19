import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
      </Route>
    </Routes>
  );
}

export default App;
