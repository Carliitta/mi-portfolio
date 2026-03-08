import React, { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Zap, Users, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import imgBilletera from '../assets/app.png'
import imgBondy from '../assets/bondy.png'
import yo from '../assets/mi.jpg'

function Portfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate()
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    const projects = [
        {
            id: "billetera-digital",
            title: "App móvil – Billetera digital",
            description:
                "Aplicación móvil publicada en Google Play con más de 100.000 descargas, enfocada en el pago de boletos de transporte urbano y utilizada activamente en la ciudad.",
            tags: ["React Native", "Expo", "Redux", "Push Notifications"],
            image: imgBilletera,
            link: "https://play.google.com/store/apps/details?id=com.serviciosurbanos.misionero&hl=es_AR",
        },
        {
            id: "transporte-urbano",
            title: "App de transporte urbano- BondiYA!",
            description:
                "Desarrollo de aplicación móvil con mapas interactivos para mostrar paradas de colectivos y tiempos de arribo aproximados utilizando datos de ubicación.",
            tags: ["React Native", "Expo", "MapLibre", "Zustand"],
            image: imgBondy,
            hasDetail: true,
            link:"https://play.google.com/store/apps/details?id=com.serviciosurbanos.bondiya&hl=en-US"
        },
    ];

    const skills = [
        {
            category: "Frontend",
            items: [
                "React",
                "Redux",
                "Zustand",
                "JavaScript",
                "Bootstrap",
                "Tailwind CSS",
            ],
        },
        {
            category: "Desarrollo Mobile",
            items: ["React Native", "Expo", "EAS Build", "Expo CLI"],
        },
        {
            category: "Herramientas",
            items: ["Git", "GitHub", "Postman", "Trello"],
        },
    ];

    return (
        <div className="bg-white text-black">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-gray-100 backdrop-blur-md z-50 border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-amber-700/40 to-amber-950/80 bg-clip-text text-transparent">
                        CR
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8">
                        {["inicio", "proyectos", "casos", "habilidades", "contacto"].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="capitalize text-sm font-medium hover:text-amber-950/70 transition cursor-pointer"
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-amber-950/60 border-t border-slate-800 py-4">
                        {["inicio", "proyectos", "casos", "habilidades", "contacto"].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="text-white block w-full text-left px-4 py-2 capitalize text-sm hover:bg-gray-400 transition"
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section
                id="inicio"
                className="min-h-screen pt-20 flex items-center justify-center px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-700/30 to-amber-950/80 p-1">
                            <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                                <img
                                    src={yo}
                                    alt="Foto de perfil"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>

                        <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight text-gray-600">
                            Hola, soy{" "}
                            <span className="bg-gradient-to-r from-amber-700/40 to-amber-950/80 bg-clip-text text-transparent">
                                Carla Rodriguez
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
                            Desarrolladora Frontend especializada en React, React Native y
                            Expo.
                        </p>

                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => scrollToSection("proyectos")}
                                className="cursor-pointer px-8 py-3 bg-gradient-to-r from-amber-700/40 to-amber-950/80 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-900/50 transition"
                            >
                                Ver Proyectos
                            </button>
                            <button
                                onClick={() => scrollToSection("contacto")}
                                className="cursor-pointer px-8 py-3 border border-amber-600 text-amber-950 font-semibold rounded-lg hover:border-amber-900 transition"
                            >
                                Contactame
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section
                id="proyectos"
                className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-950/60"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4 text-center text-white">
                        Proyectos Destacados
                    </h2>
                    <p className="text-gray-100 text-center mb-12 max-w-2xl mx-auto">
                        Aquí están algunos de mis mejores trabajos.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="border-gray-50/40 border-2 h-64 rounded-md mb-4 transition transform group-hover:scale-105 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-100 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white text-amber-700 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {project.hasDetail ? (
                                    <button
                                        onClick={() => navigate(`/proyect/${project.id}`)}
                                        className="cursor-pointer inline-flex items-center gap-2 text-white hover:text-gray-300 transition"
                                    >
                                        Ver Detalles <ExternalLink size={16} />
                                    </button>
                                ) : (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer inline-flex items-center gap-2 text-white hover:text-gray-300 transition"
                                    >
                                        Ver Proyecto <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* casos de estudio */}
            <section id="casos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-700">
                    Casos de Estudio
                </h2>
                <div className="max-w-4xl bg-white mx-auto border-2 border-amber-950/20 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-amber-950 mb-3">
                        Dashboard de Administración Interna
                    </h3>

                    <p className="text-gray-800 mb-3">
                        Plataforma interna para gestión de usuarios y operaciones
                        administrativas.
                    </p>

                    <ul className="text-gray-700 text-sm space-y-2 mb-4">
                        <li>• Desarrollo de UI con React</li>
                        <li>• Formularios y validaciones </li>
                        <li>• Manejo de estados globales</li>
                        <li>• Integración con APIs REST</li>
                        <li>• Roles y permisos</li>
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {["React", "Redux", "Tailwind", "API REST"].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-amber-950/10 text-amber-700 text-xs rounded-full border border-amber-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4 text-center text-gray-700">
                        Habilidades y Tecnologías
                    </h2>
                    <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
                        Herramientas y tecnologías que manejo para crear aplicaciones.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skillGroup, idx) => (
                            <div
                                key={idx}
                                className="bg-amber-950/60 p-6 rounded-xl border border-gray-500 hover:border-cyan-400/50 transition"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {idx === 0 && <Code2 className="text-amber-400" size={24} />}
                                    {idx === 1 && <Zap className="text-amber-400" size={24} />}
                                    {idx === 2 && <Users className="text-amber-400" size={24} />}
                                    <h3 className="text-xl font-semibold text-white">
                                        {skillGroup.category}
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {skillGroup.items.map((item, i) => (
                                        <li key={i} className="text-gray-200">
                                            • {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 text-gray-700">
                        ¿Listo para Colaborar?
                    </h2>
                    <p className="text-amber-950/70 mb-12">
                        Siempre estoy interesada en conocer nuevos proyectos y
                        oportunidades.
                    </p>

                    <div className="flex gap-6 justify-center mb-12 flex-wrap">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=carla.rodriguez340@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-amber-950/50 text-white font-semibold rounded-lg hover:bg-amber-950/30 transition"
                        >
                            <Mail size={20} /> Enviar correo
                        </a>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Carliitta"
                            className="flex items-center gap-2 px-6 py-3 text-gray-700 border border-amber-800/40 hover:bg-amber-950/30 rounded-lg transition"
                        >
                            <Github size={20} /> GitHub
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/carla-yamila-rodriguez/"
                            className="flex items-center gap-2 px-6 py-3 text-gray-700 border border-amber-800/40 hover:bg-amber-950/30 rounded-lg transition"
                        >
                            <Linkedin size={20} /> LinkedIn
                        </a>
                    </div>

                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} · Portfolio de Carla Yamila Rodriguez —
                        Frontend Developer
                    </p>
                </div>
            </section>
        </div>
    );
}


export default Portfolio