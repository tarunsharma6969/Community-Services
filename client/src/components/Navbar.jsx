import { Link, NavLink } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["/scholarships", "Scholarships"],
  ["/eligibility", "Eligibility"],
  ["/about", "About"]
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="navbar"><div className="nav-inner container">
    <Link className="brand" to="/" onClick={() => setOpen(false)}><span className="brand-icon"><GraduationCap size={23}/></span><span>Scholar<span className="brand-accent">Connect</span></span></Link>
    <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? "nav-links nav-open" : "nav-links"}>
      {links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
      <NavLink to="/dashboard" onClick={() => setOpen(false)}>Dashboard</NavLink>
      <Link className="nav-login" to="/login" onClick={() => setOpen(false)}>Log in</Link>
      <Link className="btn btn-primary nav-cta" to="/register" onClick={() => setOpen(false)}>Get started</Link>
    </nav>
  </div></header>;
}