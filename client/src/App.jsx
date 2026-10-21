import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Scholarships from "./pages/Scholarships";
import EligibilityChecker from "./pages/EligibilityChecker";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Admin from "./pages/Admin";

export default function App() {
  return <BrowserRouter><div className="app-shell"><Navbar /><main className="main-content"><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/scholarships" element={<Scholarships />} />
    <Route path="/eligibility" element={<EligibilityChecker />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/about" element={<About />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></main><Footer /></div></BrowserRouter>;
}