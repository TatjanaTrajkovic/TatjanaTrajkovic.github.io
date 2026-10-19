import { createFileRoute } from "@tanstack/react-router";
import { Apple, ArrowDown, ArrowUpRight, Code2, Database, Briefcase, Download, FlaskConical, Github, Globe, GraduationCap, Layers, Linkedin, Mail, MapPin, Menu, Moon, Phone, Play, ShieldCheck, Smartphone, Sun, Terminal, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import workspace from "@/assets/developer-workspace.jpg";
import { ProjectSlides, type Slide } from "@/components/ProjectSlides";

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

type Lang = "sv" | "en";

const coursePoints = [60, 35, 30, 40, 30, 45, 20, 120, 20];
const skillIcons = [Code2, Layers, Database, Terminal];
const skillItems = [
  ["Java", "Spring Boot", "Spring Framework", "REST API", "OOP", "Microservices"],
  ["JavaScript", "React", "Vue.js", "HTML & CSS", "Node.js", "Express.js"],
  ["SQL", "NoSQL", "JUnit 5", "Mockito"],
  ["Git & GitHub", "Maven", "Docker", "Kubernetes", "npm"],
];
// Google Play page for Budgeteero.
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.budgeteero.app";
// Budgeteero's own website.
const BUDGETEERO_SITE_URL = "https://budgeteero.com";
// Live version of the hotel booking app on GitHub Pages.
const HOTEL_LIVE_URL = "https://tatjanatrajkovic.github.io/HotelBookingApp/";
// Screenshots per project, stored in public/projects/<project>/. An empty list shows the illustration instead.
const projectSlides: Record<"budget" | "lab" | "hotel", Slide[]> = {
  budget: [
    { src: "/projects/budgeteero/1.jpg", alt: "Budgeteero: sex skärmar från appen i ljust och mörkt läge" },
    { src: "/projects/budgeteero/2.jpg", alt: "Budgeteeros inloggning" },
    { src: "/projects/budgeteero/3.jpg", alt: "Översikt med kvar att spendera, inkomster, utgifter och budget" },
    { src: "/projects/budgeteero/4.jpg", alt: "Utgifter per kategori i ett cirkeldiagram" },
  ],
  lab: [
    { src: "/projects/labflow/1.jpg", alt: "LabFlow: översikt med dashboard, kod, databasmodell och teknikstack" },
    { src: "/projects/labflow/2.jpg", alt: "LabFlow: ett modernt system för laboratoriehantering" },
    { src: "/projects/labflow/3.jpg", alt: "LabFlows dashboard med prover, analyser och resultat" },
    { src: "/projects/labflow/4.png", alt: "SampleController i Java och projektstrukturen i IntelliJ" },
    { src: "/projects/labflow/5.jpg", alt: "Databasmodell med tabellerna sample, analysis och result" },
    { src: "/projects/labflow/6.jpg", alt: "Teknikstack: Java 17, Spring Boot, PostgreSQL, Docker, GitHub och IntelliJ IDEA" },
    { src: "/projects/labflow/7.jpg", alt: "Terminal med LabFlow och PostgreSQL som körs i Docker" },
    { src: "/projects/labflow/8.jpg", alt: "Anteckningsblock med nästa steg för LabFlow" },
  ],
  hotel: [
    { src: "/projects/hotel/1.jpg", alt: "Startsidan för Sandra's Hotell & Spa Resort med bokningsformulär" },
    { src: "/projects/hotel/2.jpg", alt: "Avsnitten om hotellet och rummen" },
    { src: "/projects/hotel/3.jpg", alt: "Avsnitten om restaurangen och spa" },
    { src: "/projects/hotel/4.jpg", alt: "Avsnittet om sightseeing" },
  ],
};
const navIds = ["om-mig", "kompetenser", "erfarenhet", "utbildning", "projekt", "kontakt"];

const t = {
  sv: {
    nav: ["Om mig", "Kompetenser", "Erfarenhet", "Utbildning", "Projekt", "Kontakt"],
    home: "Tatjana Trajkovic, början av sidan", mainMenu: "Huvudmeny", mobileMenu: "Mobilmeny",
    save: "Spara CV", openMenu: "Öppna meny", closeMenu: "Stäng meny",
    langLabel: "Show the page in English", langShort: "EN",
    toDark: "Byt till mörkt läge", toLight: "Byt till ljust läge",
    heroAlt: "Ljus arbetsplats med en laptop och kod på skärmen",
    hello: "Hej, jag är", role: "Java- & fullstackutvecklare",
    heroText1: "Med ett öga för detaljer och en grund i kvalitet.", heroText2: "Nu bygger jag min framtid i kod.",
    seeEdu: "Se min utbildning", getToKnow: "Lär känna mig", studying: "STUDERAR PÅ IT-HÖGSKOLAN",
    aboutLabel: "01 / OM MIG", aboutTitle: ["En ny riktning.", "Samma noggrannhet."],
    aboutLead: "Jag studerar till Javautvecklare på IT-Högskolan, med fokus på hela kedjan — från databaser och backend till det användaren möter.",
    aboutText: "Min bakgrund som legitimerad biomedicinsk analytiker på Sahlgrenska Universitetssjukhuset har gett mig ett analytiskt arbetssätt, stor noggrannhet och vana att arbeta i miljöer där kvalitet är avgörande. Det tar jag med mig in i utveckling.",
    quality: "Analytisk förmåga. Kvalitetstänk. Tvärfunktionellt samarbete.",
    skillsLabel: "02 / KOMPETENSER", skillsTitle: "Min tekniska verktygslåda", skillsSub: "Backend som grund. Fullstack som perspektiv.",
    skills: [["Backend", "Strukturerad kod och stabila tjänster."], ["Frontend", "Från gränssnitt till helhetsupplevelse."], ["Databaser & testning", "Data, kvalitet och tillförlitlighet."], ["Verktyg & arbetssätt", "Samarbete genom hela utvecklingen."]],
    skillExtra: [[], [], ["Databaser"], ["Agila metoder"]],
    expLabel: "03 / ERFARENHET", expTitle: ["Kvalitet i", "praktiken."], expSub: ["Testning av riktiga produkter", "ur användarens perspektiv."],
    testerTitle: "Software Tester (deltid)", testerOrg: "AI & SaaS Startup",
    testerText1: "Arbetar deltid med manuell mjukvarutestning av en AI-baserad SaaS-plattform inom B2B, med fokus på användargränssnitt, funktionalitet och användarupplevelse.",
    testerDate: "AUG 2026 — NU", testerTags: ["Manuell testning", "Användargränssnitt", "Funktionalitet", "Användarupplevelse"],
    eduLabel: "04 / UTBILDNING", eduTitle: ["Kunskap som", "blir praktik."], eduSub: ["En kombination av teknik,", "projekt och problemlösning."],
    ongoing: "Pågående", javaTitle: "Javautvecklare · Fullstack", ithsName: "IT-Högskolan (ITHS) · Yrkeshögskola",
    ithsText: "Projektbaserad utbildning med Java, databaser, webbapplikationer och integrationer. Agila arbetssätt och LIA knyter ihop teori med praktisk utveckling.",
    facts: ["400 YH-poäng", "120 poäng LIA", "2 år"], hideCourses: "Dölj kursinnehåll", showCourses: "Visa utbildningens innehåll",
    pointsNote: "5 YH-poäng motsvarar 1 veckas studier.", courseCaption: "Utbildningens kurser och YH-poäng",
    course: "Kurs", points: "Poäng", total: "Totalt",
    courses: ["Javaprogrammering", "Utveckling mot databaser", "Javaverktyg och byggmiljöer", "Komplex Javautveckling", "Web services och integrationer", "Utveckling av webbapplikationer", "Agil utveckling", "LIA", "Examensarbete"],
    comtradeDate: "MAJ — NOV 2024",
    comtradeText: "Intensiv utbildning med över 200 lärarledda timmar. HTML, CSS, JavaScript, Git, kodgranskning och testning. Avslutades med ett projekt för hotellbokning.",
    bmaTitle: "Biomedicinsk analytiker", bmaSchool: "Malmö universitet · Yrkesexamen",
    bmaText: "Biomedicinsk laboratorievetenskap med fokus på analys, dokumentation, kvalitetssäkring och spårbarhet.",
    projLabel: "05 / PROJEKT", projTitle: "Från lärande till lösning", projType: "ARBETE & UTBILDNING",
    phoneSub: "denna månad", phoneBottom: "Android & iPhone · kommande publicering",
    budgetTitle: "Budget-app för mobil", budgetSub: "Budgeteero",
    budgetText1: "Byggde Budgeteero på uppdrag för OneUp Engineering. Appen hjälper dig hålla koll på dina utgifter mot en budget du sätter själv.",
    budgetText2: "Jag stod för både appen och serverdelen — från gränssnittet i React Native till inloggning och API:er i Java.",
    budgetNote: "Publiceras i Google Play & App Store", storeSite: "Besök budgeteero.com", storePlay: "Hämta på Google Play", storeApple: "App Store – kommer snart",
    labHead: "PROVFLÖDE", labFlow: ["Inlämnat", "Analys", "Svar"], labTitle: "Laboratoriesystem för prover",
    labText1: "Bygger ett system där laboratoriepersonal registrerar patienter och prover, följer ett prov från inlämning till färdigt svar och söker fram prover på ID.",
    labText2: "Jag valde ett laboratoriesystem för att jag har arbetat som biomedicinsk analytiker och känner igen behoven. Projektet är mitt sätt att fördjupa mig i Java och backend — från databas och API till det som syns på skärmen.",
    labNote: "Pågår",
    codeComment: "// En idé blir en upplevelse.", codeDest: "'nästa äventyr'", hotelBottom: "Frontend · Slutprojekt",
    hotelTitle: "Hotellbokningswebbplats",
    hotelText1: "Utvecklade en funktionell webbplats för hotellbokning som slutprojekt i min frontendutbildning.",
    hotelText2: "Projektet förenade frontendgrunder, JavaScript-logik och strukturerad kod till en sammanhängande webbapplikation.",
    hotelFirst: "Detta är min första app – skapad helt utan AI-assistenter!",
    hotelLive: "Testa appen live",
    hotelLink: "Visa projektet på GitHub",
    liaLabel: "LIA / PRAKTIKPLATS", liaTitle: ["Praktikplatsen", "är säkrad."],
    liaText: "Som en del av min utbildning ingår 120 YH-poäng LIA. Praktikplatsen är säkrad och startar i november 2026. Jag gör den hos Västra Götalandsregionen, i enheten Design och Mjukvaruutveckling, fram till juni 2027 — med fokus på Java och integrationslösningar.",
    liaLine: "Lärande i arbete · IT-Högskolan", liaStatus: "Säkrad · start november 2026", liaCardLabel: "MIN PRAKTIKPLATS",
    liaCardTitle: "Integrationslösningar", liaOrg: "Enheten Design och Mjukvaruutveckling · Koncernstab Digitalisering · Västra Götalandsregionen",
    liaPoints: [["Java", "Backend, tjänster och testning — grunden jag tar med mig från IT-Högskolan."], ["Integration", "Web services och integrationer finns med i min kursprofil och är det jag vill fördjupa under praktiken."], ["Tillsammans", "Jag trivs där man lyssnar in, ger feedback och lär av varandra."]],
    liaTags: ["Nov 2026 — Jun 2027", "120 YH-poäng", "Göteborg"],
    contactLabel: "06 / KONTAKT", contactTitle: "Hör gärna av dig", contactSub: "Maila eller ring — jag svarar gärna.",
    email: "E-post", phone: "Telefon", city: "Ort", cityValue: "Göteborg",
    slidePrev: "Föregående bild", slideNext: "Nästa bild", slideGo: "Visa bild",
    footer: "Java & fullstack. Med omsorg om detaljerna.",
  },
  en: {
    nav: ["About", "Skills", "Experience", "Education", "Projects", "Contact"],
    home: "Tatjana Trajkovic, top of page", mainMenu: "Main menu", mobileMenu: "Mobile menu",
    save: "Save CV", openMenu: "Open menu", closeMenu: "Close menu",
    langLabel: "Visa sidan på svenska", langShort: "SV",
    toDark: "Switch to dark mode", toLight: "Switch to light mode",
    heroAlt: "Bright workspace with a laptop showing code",
    hello: "Hi, I'm", role: "Java & full-stack developer",
    heroText1: "With an eye for detail and a foundation in quality.", heroText2: "Now I'm building my future in code.",
    seeEdu: "See my education", getToKnow: "Get to know me", studying: "STUDYING AT IT-HÖGSKOLAN",
    aboutLabel: "01 / ABOUT", aboutTitle: ["A new direction.", "The same precision."],
    aboutLead: "I'm studying to become a Java developer at IT-Högskolan, focusing on the whole chain — from databases and backend to what the user sees.",
    aboutText: "My background as a licensed biomedical scientist at Sahlgrenska University Hospital has given me an analytical approach, great attention to detail and experience working where quality is critical. I bring that with me into development.",
    quality: "Analytical skills. Quality mindset. Cross-functional collaboration.",
    skillsLabel: "02 / SKILLS", skillsTitle: "My technical toolbox", skillsSub: "Backend as the foundation. Full-stack as the perspective.",
    skills: [["Backend", "Structured code and stable services."], ["Frontend", "From interface to the full experience."], ["Databases & testing", "Data, quality and reliability."], ["Tools & ways of working", "Collaboration throughout development."]],
    skillExtra: [[], [], ["Databases"], ["Agile methods"]],
    expLabel: "03 / EXPERIENCE", expTitle: ["Quality in", "practice."], expSub: ["Testing real products", "from the user's perspective."],
    testerTitle: "Software Tester (part-time)", testerOrg: "AI & SaaS Startup",
    testerText1: "Working part-time on manual software testing of an AI-based B2B SaaS platform, focusing on user interface, functionality and user experience.",
    testerDate: "AUG 2026 — PRESENT", testerTags: ["Manual testing", "User interface", "Functionality", "User experience"],
    eduLabel: "04 / EDUCATION", eduTitle: ["Knowledge that", "becomes practice."], eduSub: ["A combination of technology,", "projects and problem solving."],
    ongoing: "Ongoing", javaTitle: "Java Developer · Full-stack", ithsName: "IT-Högskolan (ITHS) · Higher Vocational Education",
    ithsText: "Project-based programme covering Java, databases, web applications and integrations. Agile ways of working and an internship (LIA) connect theory with hands-on development.",
    facts: ["400 credits", "120 credits internship", "2 years"], hideCourses: "Hide course content", showCourses: "Show programme content",
    pointsNote: "5 credits correspond to 1 week of study.", courseCaption: "Programme courses and credits",
    course: "Course", points: "Credits", total: "Total",
    courses: ["Java programming", "Database development", "Java tools and build environments", "Advanced Java development", "Web services and integrations", "Web application development", "Agile development", "Internship (LIA)", "Degree project"],
    comtradeDate: "MAY — NOV 2024",
    comtradeText: "Intensive programme with more than 200 instructor-led hours. HTML, CSS, JavaScript, Git, code review and testing. Finished with a hotel booking project.",
    bmaTitle: "Biomedical Scientist", bmaSchool: "Malmö University · Professional degree",
    bmaText: "Biomedical laboratory science focused on analysis, documentation, quality assurance and traceability.",
    projLabel: "05 / PROJECTS", projTitle: "From learning to solutions", projType: "WORK & EDUCATION",
    phoneSub: "this month", phoneBottom: "Android & iPhone · upcoming release",
    budgetTitle: "Budget app for mobile", budgetSub: "Budgeteero",
    budgetText1: "Built Budgeteero on assignment for OneUp Engineering. The app helps you keep track of your expenses against a budget you set yourself.",
    budgetText2: "I was responsible for both the app and the server side — from the React Native interface to login and APIs in Java.",
    budgetNote: "To be released on Google Play & the App Store", storeSite: "Visit budgeteero.com", storePlay: "Get it on Google Play", storeApple: "App Store – coming soon",
    labHead: "SAMPLE FLOW", labFlow: ["Received", "Analysis", "Result"], labTitle: "Laboratory sample system",
    labText1: "Building a system where laboratory staff register patients and samples, follow a sample from submission to final result, and search for samples by ID.",
    labText2: "I chose a laboratory system because I have worked as a biomedical scientist and recognise the needs. The project is my way of going deeper into Java and backend — from database and API to what appears on screen.",
    labNote: "In progress",
    codeComment: "// An idea becomes an experience.", codeDest: "'next adventure'", hotelBottom: "Frontend · Final project",
    hotelTitle: "Hotel booking website",
    hotelText1: "Developed a functional hotel booking website as the final project of my frontend programme.",
    hotelText2: "The project combined frontend fundamentals, JavaScript logic and structured code into a cohesive web application.",
    hotelFirst: "This is my first app — created entirely without AI assistants!",
    hotelLive: "Try the app live",
    hotelLink: "View the project on GitHub",
    liaLabel: "INTERNSHIP / LIA", liaTitle: ["Internship", "secured."],
    liaText: "My programme includes a 120-credit internship (LIA). The placement is secured and starts in November 2026. I will do it at Region Västra Götaland, in the Design and Software Development unit, until June 2027 — focusing on Java and integration solutions.",
    liaLine: "Learning at work · IT-Högskolan", liaStatus: "Secured · starts November 2026", liaCardLabel: "MY INTERNSHIP",
    liaCardTitle: "Integration solutions", liaOrg: "Design and Software Development unit · Group Staff Digitalisation · Region Västra Götaland",
    liaPoints: [["Java", "Backend, services and testing — the foundation I bring from IT-Högskolan."], ["Integration", "Web services and integrations are part of my courses and what I want to deepen during the internship."], ["Together", "I thrive where people listen, give feedback and learn from each other."]],
    liaTags: ["Nov 2026 — Jun 2027", "120 credits", "Gothenburg"],
    contactLabel: "06 / CONTACT", contactTitle: "Feel free to get in touch", contactSub: "Email or call — I'm happy to answer.",
    email: "Email", phone: "Phone", city: "Location", cityValue: "Gothenburg, Sweden",
    slidePrev: "Previous image", slideNext: "Next image", slideGo: "Show image",
    footer: "Java & full-stack. With care for the details.",
  },
} as const;

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [lang, setLang] = useState<Lang>("sv");
  const [dark, setDark] = useState(false);
  const c = t[lang];

  useEffect(() => {
    if (localStorage.getItem("cv-lang") === "en") setLang("en");
    if (localStorage.getItem("cv-theme") === "dark") setDark(true);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("cv-lang", lang);
  }, [lang]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("cv-theme", dark ? "dark" : "light");
  }, [dark]);

  const navigation = navIds.map((id, i) => [c.nav[i], id]);
  return (
    <div className="cv-page">
      <header className="site-header">
        <a href="#" className="wordmark" aria-label={c.home}>tatjana<span>.</span></a>
        <nav className="desktop-nav" aria-label={c.mainMenu}>{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <div className="header-tools">
          <Button variant="outline" className="lang-button" aria-label={c.langLabel} title={c.langLabel} onClick={() => setLang(lang === "sv" ? "en" : "sv")}>{c.langShort}</Button>
          <Button variant="outline" size="icon" className="theme-button" aria-label={dark ? c.toLight : c.toDark} title={dark ? c.toLight : c.toDark} onClick={() => setDark(!dark)}>{dark ? <Sun /> : <Moon />}</Button>
          <Button variant="outline" className="print-button" onClick={() => window.print()}><Download /> {c.save}</Button>
        </div>
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? c.closeMenu : c.openMenu} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        {menuOpen && <nav className="mobile-nav" aria-label={c.mobileMenu}>{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>

      <main>
        <section className="hero" aria-labelledby="intro-title">
          <img className="hero-image" src={workspace} width={1536} height={1024} alt={c.heroAlt} />
          <div className="hero-inner">
            <span className="availability"><span /> JAVA · FULLSTACK · LIA</span>
            <p className="hero-eyebrow">{c.hello}</p>
            <h1 id="intro-title">Tatjana<br />Trajkovic<span>.</span></h1>
            <p className="hero-role">{c.role}</p>
            <p className="hero-description">{c.heroText1}<br className="desktop-break" /> {c.heroText2}</p>
            <div className="hero-actions">
              <Button asChild size="lg"><a href="#utbildning">{c.seeEdu} <ArrowUpRight /></a></Button>
              <Button asChild variant="ghost" size="lg"><a href="#om-mig">{c.getToKnow} <ArrowDown /></a></Button>
            </div>
          </div>
          <div className="hero-bottom"><span>{c.studying}</span><span>2025 — 2027 <ArrowDown size={14} /></span></div>
        </section>

        <section id="om-mig" className="section about-section">
          <div className="section-label"><span>{c.aboutLabel}</span><h2>{c.aboutTitle[0]}<br />{c.aboutTitle[1]}</h2></div>
          <div className="about-copy"><p className="lead">{c.aboutLead}</p><p>{c.aboutText}</p><div className="quality-note"><ShieldCheck size={20} /><span>{c.quality}</span></div></div>
        </section>

        <section id="kompetenser" className="section skills-section">
          <div className="section-heading"><div><span className="eyebrow">{c.skillsLabel}</span><h2>{c.skillsTitle}</h2></div><p>{c.skillsSub}</p></div>
          <div className="skill-grid">{c.skills.map(([title, text], i) => { const Icon = skillIcons[i]!; return <article className="skill-item" key={i}><Icon className="skill-icon" size={24} /><h3>{title}</h3><p>{text}</p><div className="tags">{[...(skillItems[i] ?? []), ...(c.skillExtra[i] ?? [])].map(item => <span key={item}>{item}</span>)}</div></article>; })}</div>
        </section>

        <section id="erfarenhet" className="section education-section">
          <div className="section-label"><span>{c.expLabel}</span><h2>{c.expTitle[0]}<br />{c.expTitle[1]}</h2><p>{c.expSub[0]}<br />{c.expSub[1]}</p></div>
          <div className="education-list">
            <article className="education-item"><div className="education-top"><span className="school-icon"><Briefcase size={21} /></span><span className="date">{c.testerDate}</span><span className="current-label">{c.ongoing}</span></div><h3>{c.testerTitle}</h3><p className="school-name">{c.testerOrg}</p><p>{c.testerText1}</p><div className="education-facts">{c.testerTags.map(x => <span key={x}>{x}</span>)}</div></article>
          </div>
        </section>

        <section id="utbildning" className="section education-section">
          <div className="section-label"><span>{c.eduLabel}</span><h2>{c.eduTitle[0]}<br />{c.eduTitle[1]}</h2><p>{c.eduSub[0]}<br />{c.eduSub[1]}</p></div>
          <div className="education-list">
            <article className="education-item"><div className="education-top"><span className="school-icon"><GraduationCap size={22} /></span><span className="date">SEP 2025 — JUN 2027</span><span className="current-label">{c.ongoing}</span></div><h3>{c.javaTitle}</h3><p className="school-name">{c.ithsName}</p><p>{c.ithsText}</p><div className="education-facts">{c.facts.map(f => <span key={f}>{f}</span>)}</div><Button variant="link" className="course-toggle" onClick={() => setShowCourses(!showCourses)} aria-expanded={showCourses} aria-controls="course-list">{showCourses ? c.hideCourses : c.showCourses}<ArrowDown className={showCourses ? "rotate-180" : ""} /></Button>{showCourses && <div id="course-list" className="course-list"><p>{c.pointsNote}</p><table><caption className="sr-only">{c.courseCaption}</caption><thead><tr><th>{c.course}</th><th>{c.points}</th></tr></thead><tbody>{c.courses.map((name, i) => <tr key={name}><td>{name}</td><td>{coursePoints[i]} p</td></tr>)}</tbody><tfoot><tr><th>{c.total}</th><th>400 p</th></tr></tfoot></table></div>}</article>
            <article className="education-item"><div className="education-top"><span className="school-icon"><Code2 size={21} /></span><span className="date">{c.comtradeDate}</span></div><h3>Frontend Development</h3><p className="school-name">CODE by Comtrade</p><p>{c.comtradeText}</p></article>
            <article className="education-item"><div className="education-top"><span className="school-icon"><GraduationCap size={22} /></span><span className="date">SEP 2006 — JUN 2010</span></div><h3>{c.bmaTitle}</h3><p className="school-name">{c.bmaSchool}</p><p>{c.bmaText}</p></article>
          </div>
        </section>

        <section id="projekt" className="section project-section"><div className="section-heading"><div><span className="eyebrow">{c.projLabel}</span><h2>{c.projTitle}</h2></div><span className="project-type">{c.projType}</span></div>
          <article className="project-content">{projectSlides.budget.length ? <ProjectSlides slides={projectSlides.budget} prevLabel={c.slidePrev} nextLabel={c.slideNext} slideLabel={c.slideGo} /> : <div className="project-visual project-phone" aria-hidden="true"><div className="phone-frame"><div className="phone-notch" /><span className="phone-label">BUDGETEERO</span><span className="phone-sub">{c.phoneSub}</span><div className="phone-bar"><span /></div><ul className="phone-rows"><li><span /><em /></li><li><span /><em /></li><li><span /><em /></li></ul></div><div className="project-visual-bottom"><Smartphone size={18} /><span>{c.phoneBottom}</span></div></div>}<div className="project-info"><span className="eyebrow">01 — ONEUP ENGINEERING</span><h3>{c.budgetTitle}</h3><p className="project-subtitle">{c.budgetSub}</p><p>{c.budgetText1}</p><p>{c.budgetText2}</p><div className="tags"><span>React Native</span><span>TypeScript</span><span>Expo</span><span>Java</span><span>Spring Boot</span><span>Spring Security &amp; JWT</span><span>Maven</span></div><div className="store-links"><a className="store-link" href={BUDGETEERO_SITE_URL} target="_blank" rel="noreferrer"><Globe size={14} />{c.storeSite}</a><a className="store-link" href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><Play size={14} />{c.storePlay}</a><span className="store-link is-soon" aria-disabled="true"><Apple size={14} />{c.storeApple}</span></div></div></article>
          <article className="project-content">{projectSlides.lab.length ? <ProjectSlides slides={projectSlides.lab} prevLabel={c.slidePrev} nextLabel={c.slideNext} slideLabel={c.slideGo} /> : <div className="project-visual project-lab" aria-hidden="true"><div className="lab-head"><span className="lab-dot" />{c.labHead}<span className="lab-id">STATUS</span></div><ul className="lab-flow"><li className="is-done">{c.labFlow[0]}</li><li className="is-active">{c.labFlow[1]}</li><li>{c.labFlow[2]}</li></ul><div className="lab-bar"><span /></div><ul className="lab-rows"><li><span /><em /></li><li><span /><em /></li><li><span /><em /></li></ul><div className="project-visual-bottom"><FlaskConical size={18} /><span>Java · Spring Boot · PostgreSQL · React</span></div></div>}<div className="project-info"><span className="eyebrow">02 — LABFLOW</span><h3>{c.labTitle}</h3><p>{c.labText1}</p><p>{c.labText2}</p><div className="tags"><span>Java</span><span>Spring Boot</span><span>PostgreSQL</span><span>React</span></div><span className="project-note">{c.labNote}</span></div></article>
          <article className="project-content">{projectSlides.hotel.length ? <ProjectSlides slides={projectSlides.hotel} prevLabel={c.slidePrev} nextLabel={c.slideNext} slideLabel={c.slideGo} /> : <div className="project-visual" aria-hidden="true"><div className="browser-bar"><span /><span /><span /><div>hotel booking / final project</div></div><div className="project-code"><span className="code-comment">{c.codeComment}</span><p><span className="code-keyword">const</span> stay = &#123;</p><p className="code-indent">destination: <span className="code-string">{c.codeDest}</span>,</p><p className="code-indent">builtWith: [<span className="code-string">'HTML', 'CSS', 'JavaScript'</span>]</p><p>&#125;;</p></div><div className="project-visual-bottom"><Code2 size={18} /><span>{c.hotelBottom}</span></div></div>}<div className="project-info"><span className="eyebrow">03 — CODE BY COMTRADE</span><h3>{c.hotelTitle}</h3><p>{c.hotelText1}</p><p>{c.hotelText2}</p><p className="project-first">{c.hotelFirst}</p><div className="tags"><span>HTML</span><span>CSS</span><span>JavaScript</span></div><div className="project-links"><a className="project-link is-primary" href={HOTEL_LIVE_URL} target="_blank" rel="noreferrer"><Play size={16} /> {c.hotelLive} <ArrowUpRight size={15} /></a><a className="project-link" href="https://github.com/TatjanaTrajkovic/HotelBookingApp" target="_blank" rel="noreferrer"><Github size={16} /> {c.hotelLink} <ArrowUpRight size={15} /></a></div></div></article>
        </section>

        <section id="lia" className="lia-section"><div><span className="eyebrow">{c.liaLabel}</span><h2>{c.liaTitle[0]}<br />{c.liaTitle[1]}</h2><p>{c.liaText}</p><span className="lia-line"><span /> {c.liaLine}</span></div><div className="lia-card"><span className="lia-status"><span />{c.liaStatus}</span><span className="eyebrow">{c.liaCardLabel}</span><h3>{c.liaCardTitle}</h3><p className="lia-org">{c.liaOrg}</p><ul className="lia-points">{c.liaPoints.map(([k, v]) => <li key={k}><strong>{k}</strong><span>{v}</span></li>)}</ul><div className="tags">{c.liaTags.map(x => <span key={x}>{x}</span>)}</div></div></section>

        <section id="kontakt" className="section contact-section"><div className="section-heading"><div><span className="eyebrow">{c.contactLabel}</span><h2>{c.contactTitle}</h2></div><p>{c.contactSub}</p></div><div className="contact-grid"><a className="contact-item" href="mailto:malina91983@gmail.com"><Mail size={18} /><span className="contact-label">{c.email}</span><span className="contact-value">malina91983@gmail.com</span></a><a className="contact-item" href="tel:+46700435391"><Phone size={18} /><span className="contact-label">{c.phone}</span><span className="contact-value">+46 700 435 391</span></a><a className="contact-item" href="https://www.linkedin.com/in/tatjana-trajkovic" target="_blank" rel="noreferrer"><Linkedin size={18} /><span className="contact-label">LinkedIn</span><span className="contact-value">tatjana-trajkovic</span></a><a className="contact-item" href="https://github.com/TatjanaTrajkovic" target="_blank" rel="noreferrer"><Github size={18} /><span className="contact-label">GitHub</span><span className="contact-value">TatjanaTrajkovic</span></a><span className="contact-item"><MapPin size={18} /><span className="contact-label">{c.city}</span><span className="contact-value">{c.cityValue}</span></span></div></section>
      </main>
      <footer><a className="wordmark" href="#">tatjana<span>.</span></a><span>© 2026 Tatjana Trajkovic</span><span>{c.footer}</span></footer>
    </div>
  );
}
