import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, LockKeyhole, ArrowRight, GraduationCap } from "lucide-react";
import api from "../utils/api";

export default function Login() {
  const navigate=useNavigate();
  const [form,setForm]=useState({email:"",password:""});
  const [message,setMessage]=useState("");
  const [busy,setBusy]=useState(false);
  const update=e=>setForm({...form,[e.target.name]:e.target.value});
  async function submit(e){e.preventDefault();setMessage("");setBusy(true);try{const {data}=await api.post("/auth/login",form);localStorage.setItem("scholarconnect_user",JSON.stringify(data.user));setMessage("Login successful. Opening dashboard…");setTimeout(()=>navigate("/dashboard"),500);}catch(err){setMessage(err.response?.data?.message||"Could not connect to the backend. Check that the server and MongoDB are running.");}finally{setBusy(false);}}
  return <div className="auth-wrap container"><div className="auth-aside"><div className="auth-brand-mark"><GraduationCap size={35}/></div><span className="eyebrow">WELCOME BACK</span><h1>Keep moving toward your goals.</h1><p>Pick up your scholarship search and keep your next steps in sight.</p><div className="auth-points"><span>✓ Your opportunities in one place</span><span>✓ A clear next step</span><span>✓ Student-focused tools</span></div></div><div className="auth-card"><span className="eyebrow dark-eyebrow">STUDENT ACCESS</span><h2>Log in to ScholarConnect</h2><p className="auth-subtitle">Enter the email and password you registered with.</p><form onSubmit={submit} className="form-stack"><label>Email address<div className="input-with-icon"><Mail size={18}/><input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required/></div></label><label>Password<div className="input-with-icon"><LockKeyhole size={18}/><input type="password" name="password" value={form.password} onChange={update} placeholder="Your password" required/></div></label><button className="btn btn-primary full-width" disabled={busy}>{busy?"Signing in…":"Log in"} <ArrowRight size={17}/></button></form>{message&&<p className="form-message" role="status">{message}</p>}<p className="auth-switch">New to ScholarConnect? <Link to="/register">Create an account</Link></p><p className="small-print">Demo project: authentication is not production-hardened.</p></div></div>;
}