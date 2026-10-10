import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Code2, Database, Download, Github, GraduationCap, Layers, Linkedin, Mail, MapPin, Menu, Phone, ShieldCheck, Terminal, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import workspace from "@/assets/developer-workspace.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Tatjana Trajkovic | Java- & fullstackutvecklare" },
    { name: "description", content: "Lär känna Tatjana Trajkovic, Java- och fullstackstudent på IT-Högskolan. Utbildning, tekniska kunskaper och projekt." },
    { property: "og:title", content: "Tatjana Trajkovic | Java- & fullstackutvecklare" },
    { property: "og:description", content: "Från kvalitetssäkring till kod. Mitt CV, min utbildning och min väg mot fullstackutveckling." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const courses = [
  ["Javaprogrammering", 60], ["Utveckling mot databaser", 35],
  ["Javaverktyg och byggmiljöer", 30], ["Komplex Javautveckling", 40],
  ["Web services och integrationer", 30], ["Utveckling av webbapplikationer", 45],
  ["Agil utveckling", 20], ["LIA", 120], ["Examensarbete", 20],
] as const;
const skills = [
  { icon: Code2, title: "Backend", text: "Strukturerad kod och stabila tjänster.", items: ["Java", "Spring Boot", "Spring Framework", "REST API:er", "OOP", "Microservices"] },
  { icon: Layers, title: "Frontend", text: "Från gränssnitt till helhetsupplevelse.", items: ["JavaScript", "React", "Vue.js", "HTML & CSS", "Node.js", "Express.js"] },
  { icon: Database, title: "Databaser & testning", text: "Data, kvalitet och tillförlitlighet.", items: ["SQL", "NoSQL", "JUnit 5", "Mockito", "Databaser"] },
  { icon: Terminal, title: "Verktyg & arbetssätt", text: "Samarbete genom hela utvecklingen.", items: ["Git & GitHub", "Maven", "Docker", "Kubernetes", "npm", "Agila metoder"] },
];
const navigation = [["Om mig", "om-mig"], ["Kompetenser", "kompetenser"], ["Utbildning", "utbildning"], ["Projekt", "projekt"], ["Kontakt", "kontakt"]];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  return (
    <div className="cv-page">
      <header className="site-header">
        <a href="#" className="wordmark" aria-label="Tatjana Trajkovic, början av sidan">tatjana<span>.</span></a>
        <nav className="desktop-nav" aria-label="Huvudmeny">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <Button variant="outline" className="print-button" onClick={() => window.print()}><Download /> Spara CV</Button>
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Stäng meny" : "Öppna meny"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobilmeny">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>

      <main>
        <section className="hero" aria-labelledby="intro-title">
          <img className="hero-image" src={workspace} width={1536} height={1024} alt="Ljus arbetsplats med en laptop och kod på skärmen" />
          <div className="hero-inner">
            <span className="availability"><span /> JAVA · FULLSTACK · LIA</span>
            <p className="hero-eyebrow">Hej, jag är</p>
            <h1 id="intro-title">Tatjana<br />Trajkovic<span>.</span></h1>
            <p className="hero-role">Java- & fullstackutvecklare</p>
            <p className="hero-description">Med ett öga för detaljer och en grund i kvalitet.<br className="desktop-break" /> Nu bygger jag min framtid i kod.</p>
            <div className="hero-actions">
              <Button asChild size="lg"><a href="#utbildning">Se min utbildning <ArrowUpRight /></a></Button>
              <Button asChild variant="ghost" size="lg"><a href="#om-mig">Lär känna mig <ArrowDown /></a></Button>
            </div>
          </div>
          <div className="hero-bottom"><span>STUDERAR PÅ IT-HÖGSKOLAN</span><span>2025 — 2027 <ArrowDown size={14} /></span></div>
        </section>

        <section id="om-mig" className="section about-section">
          <div className="section-label"><span>01 / OM MIG</span><h2>En ny riktning.<br />Samma noggrannhet.</h2></div>
          <div className="about-copy"><p className="lead">Jag studerar till Javautvecklare på IT-Högskolan, med fokus på hela kedjan — från databaser och backend till det användaren möter.</p><p>Min bakgrund som legitimerad biomedicinsk analytiker på Sahlgrenska Universitetssjukhuset har gett mig ett analytiskt arbetssätt, stor noggrannhet och vana att arbeta i miljöer där kvalitet är avgörande. Det tar jag med mig in i utveckling.</p><div className="quality-note"><ShieldCheck size={20} /><span>Analytisk förmåga. Kvalitetstänk. Tvärfunktionellt samarbete.</span></div></div>
        </section>

        <section id="kompetenser" className="section skills-section">
          <div className="section-heading"><div><span className="eyebrow">02 / KOMPETENSER</span><h2>Min tekniska verktygslåda</h2></div><p>Backend som grund. Fullstack som perspektiv.</p></div>
          <div className="skill-grid">{skills.map(({ icon: Icon, title, text, items }) => <article className="skill-item" key={title}><Icon className="skill-icon" size={24} /><h3>{title}</h3><p>{text}</p><div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section id="utbildning" className="section education-section">
          <div className="section-label"><span>03 / UTBILDNING</span><h2>Kunskap som<br />blir praktik.</h2><p>En kombination av teknik,<br />projekt och problemlösning.</p></div>
          <div className="education-list">
            <article className="education-item"><div className="education-top"><span className="school-icon"><GraduationCap size={22} /></span><span className="date">SEP 2025 — JUN 2027</span><span className="current-label">Pågående</span></div><h3>Javautvecklare · Fullstack</h3><p className="school-name">IT-Högskolan (ITHS) · Yrkeshögskola</p><p>Projektbaserad utbildning med Java, databaser, webbapplikationer och integrationer. Agila arbetssätt och LIA knyter ihop teori med praktisk utveckling.</p><div className="education-facts"><span>400 YH-poäng</span><span>120 poäng LIA</span><span>2 år</span></div><Button variant="link" className="course-toggle" onClick={() => setShowCourses(!showCourses)} aria-expanded={showCourses} aria-controls="course-list">{showCourses ? "Dölj kursinnehåll" : "Visa utbildningens innehåll"}<ArrowDown className={showCourses ? "rotate-180" : ""} /></Button>{showCourses && <div id="course-list" className="course-list"><p>5 YH-poäng motsvarar 1 veckas studier.</p><table><caption className="sr-only">Utbildningens kurser och YH-poäng</caption><thead><tr><th>Kurs</th><th>Poäng</th></tr></thead><tbody>{courses.map(([name, points]) => <tr key={name}><td>{name}</td><td>{points} p</td></tr>)}</tbody><tfoot><tr><th>Totalt</th><th>400 p</th></tr></tfoot></table></div>}</article>
            <article className="education-item"><div className="education-top"><span className="school-icon"><Code2 size={21} /></span><span className="date">MAJ — NOV 2024</span></div><h3>Frontend Development</h3><p className="school-name">CODE by Comtrade</p><p>Intensiv utbildning med över 200 lärarledda timmar. HTML, CSS, JavaScript, Git, kodgranskning och testning. Avslutades med ett projekt för hotellbokning.</p></article>
            <article className="education-item"><div className="education-top"><span className="school-icon"><GraduationCap size={22} /></span><span className="date">SEP 2006 — JUN 2010</span></div><h3>Biomedicinsk analytiker</h3><p className="school-name">Malmö universitet · Yrkesexamen</p><p>Biomedicinsk laboratorievetenskap med fokus på analys, dokumentation, kvalitetssäkring och spårbarhet.</p></article>
          </div>
        </section>

        <section id="projekt" className="section project-section"><div className="section-heading"><div><span className="eyebrow">04 / PROJEKT</span><h2>Från lärande till lösning</h2></div><span className="project-type">UTBILDNINGSPROJEKT</span></div><article className="project-content"><div className="project-visual" aria-hidden="true"><div className="browser-bar"><span /><span /><span /><div>hotel booking / final project</div></div><div className="project-code"><span className="code-comment">// En idé blir en upplevelse.</span><p><span className="code-keyword">const</span> stay = &#123;</p><p className="code-indent">destination: <span className="code-string">'nästa äventyr'</span>,</p><p className="code-indent">builtWith: [<span className="code-string">'HTML', 'CSS', 'JavaScript'</span>]</p><p>&#125;;</p></div><div className="project-visual-bottom"><Code2 size={18} /><span>Frontend · Slutprojekt</span></div></div><div className="project-info"><span className="eyebrow">01 — CODE BY COMTRADE</span><h3>Hotellbokningswebbplats</h3><p>Utvecklade en funktionell webbplats för hotellbokning som slutprojekt i min frontendutbildning.</p><p>Projektet förenade frontendgrunder, JavaScript-logik och strukturerad kod till en sammanhängande webbapplikation.</p><div className="tags"><span>HTML</span><span>CSS</span><span>JavaScript</span></div></div></article></section>

        <section id="lia" className="lia-section"><div><span className="eyebrow">NÄSTA STEG / LIA</span><h2>Redo att lära.<br />Redo att bidra.</h2><p>Som en del av min utbildning ingår 120 YH-poäng LIA. Jag söker nu plats för hösten 2026 och vill arbeta med Java i praktiken — gärna där integrationer är i fokus.</p><span className="lia-line"><span /> Lärande i arbete · IT-Högskolan</span></div><div className="lia-card"><span className="eyebrow">MITT MÅL FÖR LIA</span><h3>Integrationslösningar</h3><p className="lia-org">Enheten Design och Mjukvaruutveckling · Koncernstab Digitalisering · Västra Götalandsregionen</p><ul className="lia-points"><li><strong>Java</strong><span>Backend, tjänster och testning — grunden jag bygger på IT-Högskolan.</span></li><li><strong>Integration</strong><span>Web services och integrationer finns med i min kursprofil och är det jag vill fördjupa.</span></li><li><strong>Tillsammans</strong><span>Jag trivs där man lyssnar in, ger feedback och lär av varandra.</span></li></ul><div className="tags"><span>Hösten 2026</span><span>120 YH-poäng</span><span>Göteborg</span></div></div></section>

        <section id="kontakt" className="section contact-section"><div className="section-heading"><div><span className="eyebrow">05 / KONTAKT</span><h2>Hör gärna av dig</h2></div><p>Maila eller ring — jag svarar gärna.</p></div><div className="contact-grid"><a className="contact-item" href="mailto:malina91983@gmail.com"><Mail size={18} /><span className="contact-label">E-post</span><span className="contact-value">malina91983@gmail.com</span></a><a className="contact-item" href="tel:+46700435391"><Phone size={18} /><span className="contact-label">Telefon</span><span className="contact-value">+46 700 435 391</span></a><a className="contact-item" href="https://www.linkedin.com/in/tatjana-trajkovic" target="_blank" rel="noreferrer"><Linkedin size={18} /><span className="contact-label">LinkedIn</span><span className="contact-value">tatjana-trajkovic</span></a><a className="contact-item" href="https://github.com/TatjanaTrajkovic" target="_blank" rel="noreferrer"><Github size={18} /><span className="contact-label">GitHub</span><span className="contact-value">TatjanaTrajkovic</span></a><span className="contact-item"><MapPin size={18} /><span className="contact-label">Ort</span><span className="contact-value">Göteborg</span></span></div></section>
      </main>
      <footer><a className="wordmark" href="#">tatjana<span>.</span></a><span>© 2026 Tatjana Trajkovic</span><span>Java & fullstack. Med omsorg om detaljerna.</span></footer>
    </div>
  );
}
