import React, { useEffect } from "react";
import "../Styles/Home2.css";
import curry from "../assets/yo.jpeg";
import TiltedCard from "../Components/cardsproy/cardsproy.jsx";
import yoAbout from "../assets/yotraje.jpg";
import SpotlightCard from "../Components/cards/cards.jsx";
import GooeyNav from "../Components/nav/nav.jsx";
import hotel from "../assets/hotel.png";
import calcu from "../assets/calcu.png";

const techData = {
    lenguajes: [
        { icon: "devicon-python-plain", name: "Python" },
        { icon: "devicon-javascript-plain", name: "JavaScript" },
    ],
    frontend: [
        { icon: "devicon-html5-plain", name: "HTML" },
        { icon: "devicon-css3-plain", name: "CSS" },
        { icon: "devicon-react-original", name: "React" },
    ],
    backend: [
        { icon: "devicon-nodejs-plain", name: "Node.js" },
        { icon: "devicon-flask-original", name: "Flask" },
    ],
    database: [
        { icon: "devicon-postgresql-plain", name: "PostgreSQL" },
        { icon: "devicon-supabase-plain", name: "Supabase" },
    ],
    tools: [
        { icon: "devicon-git-plain", name: "Git" },
        { icon: "devicon-github-original", name: "GitHub" },
        { icon: "devicon-vitejs-plain", name: "Vite" },
    ],
};

function TechCategory({ items, title }) {
    return (
        <div className="tech-category">
            <h3 className="tech-category-title">{title}</h3>
            <div className="cards-container">
                {items.map((item, i) => (
                    <SpotlightCard key={i} className="tech-card" spotlightColor="rgba(139, 92, 246, 0.25)">
                        <i className={item.icon}></i>
                        <p>{item.name}</p>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
}

export default function Home() {

    useEffect(() => {

        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("active");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".reveal-left");
        hiddenElements.forEach((el)=>observer.observe(el));

    }, []);

    

    const navItems = [
        { label: "Inicio", href: "#inicio" },
        { label: "Sobre mí", href: "#sobre-mi" },
        { label: "Tecnologías", href: "#tecnologias" },
        { label: "Proyectos", href: "#proyectos" },
        { label: "Contacto", href: "#contacto" },
    ];

    const handleNavClick = (item) => {
        const id = item.href?.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="main">
            <div className="nav-wrapper">
                <GooeyNav
                    items={navItems}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                    onItemClick={handleNavClick}
                />
            </div>

            <section id="inicio" className="hero revelar-start">
                <div className="hero-inner">
                    <div className="hero-left">
                        <h1 className="hero-name">Facundo Sanz</h1>

                        <h2 className="hero-role">
                            Analista y Desarrollador de Software
                        </h2>

                        <p className="hero-desc">
                            Especializado en desarrollo de software y análisis de sistemas,
                            con experiencia en desarrollo web y construcción de soluciones tecnológicas.
                        </p>
                    </div>

                    <div className="hero-right">
                        <div className="profile-pic">
                            <img src={curry} alt="Facundo Sanz"/>
                        </div>
                    </div>
                </div>
            </section>


            <section id="sobre-mi" className="about-me reveal-left">
                <div className="contenido">
                    <div className="about-text">
                        <h2 className="section-title">Sobre mí</h2>
                        <p className="section-desc">
                            Hola! Soy Facundo, estudiante de Ingeniería Informática enfocado en desarrollo de software y análisis de sistemas. Tengo conocimientos en desarrollo web y análisis de datos. Disfruto aprender nuevas tecnologías, resolver problemas mediante programación y construir aplicaciones que transformen ideas en soluciones.
                        </p>

                        <p className="section-desc">
                            Actualmente me enfoco en fortalecer mis habilidades en desarrollo de software y en el manejo y análisis de información para crear proyectos prácticos y útiles.
                        </p>

                        <p className="section-desc">
                            A futuro, me interesa profundizar en áreas como la inteligencia artificial y la ciberseguridad, campos que considero clave para el desarrollo tecnológico en los próximos años.
                        </p>

                        <ul className="info-list">
                            <li>📍​ Salta, Argentina</li>
                            <li>🎓 Carrera Académica: Ingeniería Informática</li>
                            <li>💻 <b>Áreas:</b> Desarrollo de Software, Análisis de Sistemas, Desarrollo Web</li>
                            <li>⚽ <b>Deportes:</b> Fútbol y Básquet</li>
                            <li>🌐 <b>Inglés:</b> Intermedio – Avanzado</li>
                        </ul>
                    </div>

                        <div className="about-image">
                            <img src={curry} alt="Facundo" />
                        </div>

                </div>
            </section>

            <section id="tecnologias" className="skills reveal-left">
                <div className="skills-title-wrapper">
                    <h2 className="section-title">Tecnologías</h2>
                </div>
                <div className="contenido contenido-skills">
                <TechCategory items={techData.lenguajes} title="Lenguajes" />
                <TechCategory items={techData.frontend} title="Frontend" />
                <TechCategory items={techData.backend} title="Backend" />
                <TechCategory items={techData.database} title="Database" />
                <TechCategory items={techData.tools} title="Tools" />
                </div>
            </section>

            <section id="proyectos" className="projects reveal-left">
                <div className="projects-title-wrapper">
                    <h2 className="section-title">Proyectos</h2>
                    <p className="projects-desc">
                        Algunos proyectos que desarrollé utilizando distintas tecnologías.
                    </p>
                </div>
                <div className="contenido contenido-projects">
                    <div className="projects-grid">

                        <TiltedCard
                            imageSrc={calcu}
                            altText="Calculadora Científica"
                            captionText="Flask, HTML, CSS"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip
                            displayOverlayContent
                            overlayContent={
                                <a className="tilted-card-demo-text" href="https://sanz05.github.io/PROYECTO-LENGUAJES-IV/" target="_blank" rel="noopener noreferrer">
                                    Hotel California
                                </a>
                            }
                        /> 

                        <TiltedCard
                            imageSrc={hotel}
                            altText="Proyecto Hotel California"
                            captionText="HTML, CSS, JavaScript, React, Vite, Node.js, Supabase"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip
                            displayOverlayContent
                            overlayContent={
                                <a className="tilted-card-demo-text" href="https://sanz05.github.io/PROYECTO-LENGUAJES-IV/" target="_blank" rel="noopener noreferrer">
                                    Hotel California
                                </a>
                            }
                        />
                        
                        

                        <TiltedCard
                            imageSrc={hotel}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Kendrick Lamar - GNX"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip
                            displayOverlayContent
                            overlayContent={
                                <a className="tilted-card-demo-text" href="https://sanz05.github.io/PROYECTO-LENGUAJES-IV/" target="_blank" rel="noopener noreferrer">
                                    Hotel California
                                </a>
                            }
                        />
                    </div>
                </div>
            </section>

            <section id="contacto" className="contact reveal-left">
                <div className="contact-title-wrapper">
                    <h2 className="section-title">Contacto</h2>
                </div>
                <div className="contenido contenido-contact">
                    <a href="mailto:sanzfacundo05@gmail.com" className="contact-link">
                        <span className="contact-icon">✉</span>
                        <span>Via Email</span>
                    </a>
                    <a href="https://github.com/sanz05" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="devicon-github-original"></i>
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/facundo-sanz-103a8b276/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="devicon-linkedin-plain"></i>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </section>

            <footer className="footer">
                <p>© 2026 Facundo Sanz</p>
                <p>Ingeniería Informática · Argentina</p>
            </footer>

        </div>
    );
}


