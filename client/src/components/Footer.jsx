import { Link } from "react-router-dom";
import { GraduationCap, Heart } from "lucide-react";
export default function Footer() {
  return <footer className="footer"><div className="container footer-inner">
    <div><Link className="brand footer-brand" to="/"><span className="brand-icon"><GraduationCap size={22}/></span>Scholar<span className="brand-accent">Connect</span></Link><p>Helping students find their next opportunity.</p></div>
    <div className="footer-links"><Link to="/scholarships">Explore scholarships</Link><Link to="/eligibility">Eligibility checker</Link><Link to="/about">About us</Link></div>
    <p className="footer-note">Made for students, with <Heart size={13} /> and purpose.</p>
  </div><div className="container copyright">© {new Date().getFullYear()} ScholarConnect · Educational project demo</div></footer>;
}