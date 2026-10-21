import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRound, Mail, LockKeyhole, ArrowRight, GraduationCap } from "lucide-react";
import api from "../utils/api";

export default function Register() {
  const navigate = useNavigate();
  const [form,setForm] = useState({name:"",email:"",password:"",state:"Haryana",education:"Undergraduate"});
  const [message,setMessage] = useState("");
  const [busy,setBusy] = useState(false);
  const update=e=>setForm({...form,[e.target.name]:e.target.value});
  async function submit(e){e.preventDefault();setMessage("");setBusy(true);try{const {data}=await api.post("/auth/register",form);setMessage(data.message||"Account created. You can now log in.");setTimeout(()=>navigate("/login"),800);}catch(err){setMessage(err.response?.data?.message||"Could not connect to the backend. Check that the server and MongoDB are running.");}finally{setBusy(false);}}
  return <div className="auth-wrap container"><div className="auth-aside"><div className="auth-brand-mark"><GraduationCap size={35}/></div><span className="eyebrow">START WITH A PLAN</span><h1>Your next opportunity begins here.</h1><p>Create a student profile to keep your scholarship search organised.</p><div className="auth-points"><span>✓ Discover opportunities</span><span>✓ Track your next steps</span><span>✓ Explore career guidance</span></div></div><div className="auth-card"><span className="eyebrow dark-eyebrow">JOIN SCHOLARCONNECT</span><h2>Create your account</h2><p className="auth-subtitle">A few details to get you started.</p>
    <form onSubmit={submit} className="form-stack"><label>Full name<div className="input-with-icon"><UserRound size={18}/><input name="name" value={form.name} onChange={update} placeholder="Your full name" required minLength={2}/></div></label><label>Email address<div className="input-with-icon"><Mail size={18}/><input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required/></div></label><label>Password<div className="input-with-icon"><LockKeyhole size={18}/><input type="password" name="password" value={form.password} onChange={update} placeholder="At least 8 characters" minLength={8} required/></div></label><label>State / region<select name="state" value={form.state} onChange={update}><option>Haryana</option><option>Delhi</option><option>Uttar Pradesh</option><option>Rajasthan</option><option>Other</option></select></label><label>Education level<select name="education" value={form.education} onChange={update}><option>School</option><option>Undergraduate</option><option>Postgraduate</option><option>Technical / Diploma</option></select></label><button className="btn btn-primary full-width" disabled={busy}>{busy?"Creating account…":"Create account"} <ArrowRight size={17}/></button></form>
    {message&&<p className="form-message" role="status">{message}</p>}<p className="auth-switch">Already have an account? <Link to="/login">Log in</Link></p><p className="small-print">Educational project demo. Do not use a password you use elsewhere.</p>
  </div></div>;
}