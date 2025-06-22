import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/login";
import Register from "../components/register";
import Home from "../components/home";
import Dashboard from "../components/Dashboard";

function App() {
  return (
    <BrowserRouter basename="/Matrimony-Application">
  
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={ <Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
