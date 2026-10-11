import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { getVisitCount } from "@/lib/visits.functions";

export const Route = createFileRoute("/besokare")({
  head: () => ({
    meta: [
      { title: "Besöksstatistik | Tatjana Trajkovic" },
      { name: "description", content: "Privat besöksräknare för Tatjana Trajkovics CV-sida." },
    ],
  }),
  component: StatsPage,
});

function StatsPage() {
  const getCount = useServerFn(getVisitCount);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (localStorage.getItem("cv-theme") === "dark") document.documentElement.classList.add("dark");
    getCount().then(setCount).catch(() => setCount(0));
  }, []);

  return (
    <div className="stats-page">
      <a className="stats-back" href="/"><ArrowLeft size={16} /> Tillbaka till CV</a>
      <h1>Besöksstatistik</h1>
      <p className="stats-note">Räknas en gång per webbläsarsession på CV-sidan.</p>
      <div className="stats-card">
        <Eye className="stats-icon" size={22} aria-hidden="true" />
        <span className="stats-number">{count === null ? "…" : count.toLocaleString("sv-SE")}</span>
        <span className="stats-label">besök</span>
      </div>
    </div>
  );
}
