import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import img1 from '../assets/cap-parana1.png'
import img2 from '../assets/cap-parana2.png'
import img3 from '../assets/cap-parana3.png'

import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Zap, Users, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
function ProjectDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate()
  // Imágenes de ejemplo (reemplaza con tus imágenes reales)
  const images = [
    img1,
    img2,
    img3,
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Botón de regreso */}
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center gap-2 text-amber-950 hover:text-amber-700 mb-8 transition"
        >
          <ArrowLeft size={20} />
          Volver al portfolio
        </button>

        {/* Título */}
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          App de Transporte Urbano
        </h1>

        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Aplicación móvil de transporte urbano desarrollada para mejorar la experiencia
          de los usuarios al planificar sus viajes. Permite visualizar paradas de
          colectivos, recorridos activos y estimaciones de llegada en tiempo real.
       
        </p>


        {/* Carrusel */}
        <div className="relative mb-8">
          <div className="relative h-96 md:h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-xl">
            <img
              src={images[currentImage]}
              alt={`Captura ${currentImage + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Botones de navegación */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={24} className="text-amber-950" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={24} className="text-amber-950" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-3 h-3 rounded-full transition ${idx === currentImage
                      ? "bg-amber-950 scale-125"
                      : "bg-white/70 hover:bg-white"
                    }`}
                  aria-label={`Ir a imagen ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Contador */}
          <p className="text-center mt-4 text-gray-600 text-sm">
            {currentImage + 1} / {images.length}
          </p>
        </div>

        {/* Detalles técnicos */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Características Principales
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-amber-700 font-bold">•</span>
              <span>
                Integración de mapa mediante <strong>MapLibre</strong> para una visualización precisa de recorridos.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-amber-700 font-bold">•</span>
              <span>
                Visualización en tiempo real de paradas y trayectos activos de transporte
                urbano.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-amber-700 font-bold">•</span>
              <span>
                Cálculo dinámico de tiempos de arribo basado en datos de geolocalización y
                posición del vehículo.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-amber-700 font-bold">•</span>
              <span>
                Interfaz intuitiva y responsive, optimizada para dispositivos móviles
                Android e iOS.
              </span>
            </li>

           
          </ul>


          <div className="mt-6 flex flex-wrap gap-2">
            {["React Native","Zustand", "Expo", "MapLibre"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-amber-950/10 text-amber-700 text-sm rounded-full border border-amber-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectDetail