import { useMemo, useState } from "react";
import { ArrowUpRight, Search, SlidersHorizontal, GraduationCap, ExternalLink } from "lucide-react";
import { scholarships } from "../data/scholarships";

export default function Scholarships() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState("All");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => scholarships.filter(s => {
    const text = `${s.title} ${s.provider} ${s.description} ${s.category}`.toLowerCase();
    return text.includes(query.toLowerCase()) && (state === "All" || s.state === state) && (category === "All" || s.category === category);
  }), [query, state, category]);
  return <div className="page container"><div className="page-heading"><span className="eyebrow dark-eyebrow">OPPORTUNITY DIRECTORY</span><h1>Find scholarships that fit your journey.</h1><p>Explore starting points, then confirm the latest rules and deadlines with the official provider.</p></div>
    <div className="search-panel"><label className="search-box"><Search size={19}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by name, provider, or keyword"/></label><label className="filter-label"><SlidersHorizontal size={17}/> State<select value={state} onChange={e=>setState(e.target.value)}><option>All</option><option>All India</option><option>Haryana</option></select></label><label className="filter-label">Category<select value={category} onChange={e=>setCategory(e.target.value)}><option>All</option><option>General</option><option>State</option><option>Technical Education</option><option>Need-based</option></select></label></div>
    <div className="results-line"><strong>{filtered.length} starting point{filtered.length!==1?"s":""}</strong><span>Use official links to verify current information</span></div>
    <div className="scholarship-grid">{filtered.map(s=><article className="scholarship-card" key={s.id}><div className="card-topline"><span className="scholarship-mark"><GraduationCap size={23}/></span><span className="pill">{s.category}</span></div><p className="provider">{s.provider}</p><h2>{s.title}</h2><p className="card-description">{s.description}</p><div className="scholarship-meta"><div><small>Funding</small><strong>{s.amount}</strong></div><div><small>Deadline</small><strong>{s.deadline}</strong></div></div><div className="card-bottom"><span className="location-label">{s.state} · {s.level}</span><a className="btn btn-primary btn-small" href={s.url} target="_blank" rel="noreferrer">Official site <ExternalLink size={14}/></a></div></article>)}</div>
    {filtered.length===0&&<div className="empty-state"><Search size={32}/><h3>No matches found</h3><p>Try another keyword or reset the filters.</p><button className="btn btn-primary" onClick={()=>{setQuery("");setState("All");setCategory("All");}}>Reset filters</button></div>}
    <div className="notice"><strong>Important:</strong> This directory contains starter/demo entries. Scholarship availability, funding amounts, eligibility and deadlines can change. Confirm all details on the official provider's website.</div>
  </div>;
}