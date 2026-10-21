import { Router } from "express";
const router = Router();

// Demo content. Replace with verified/current scheme data before real-world use.
const items = [
  { id: 1, title: "National Scholarship Portal", provider: "Government of India", category: "General", state: "All India", url: "https://scholarships.gov.in/" },
  { id: 2, title: "Haryana Higher Education Scholarships", provider: "Haryana Government", category: "State", state: "Haryana", url: "https://harchhatravratti.highereduhry.ac.in/" },
  { id: 3, title: "AICTE Scholarship Schemes", provider: "AICTE", category: "Technical Education", state: "All India", url: "https://www.aicte-india.org/" }
];
router.get("/", (_req, res) => res.json({ items, count: items.length, demoData: true }));
export default router;