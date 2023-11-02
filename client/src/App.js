import logo from './logo.svg';
import './App.css';
import Header from './pages/header/header';
import Homepage from './pages/homepage/homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country/:cca3" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
