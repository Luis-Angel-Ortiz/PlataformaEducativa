import { useState } from 'react';

const OfertaEducativa = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [showJustification, setShowJustification] = useState(true);

  const handleImageClick = (image: string) => {
    setActiveImage(image);
    setShowJustification(true);
  };

  const renderContent = () => {
    switch (activeImage) {
      case 'alimentos':
        return {
          justification: "Las tendencias globalizadoras, actualmente exigen mayor competitividad y profesionalismo del recurso humano, como pieza clave en el desarrollo nacional. Los altos índices de desnutrición, la escasez de alimentos y la pobreza en aumento de los suelos, son problemas que alertan hacia la búsqueda de un mayor y mejor aprovechamiento de los recursos naturales. En México se produce gran diversidad de éstos y su optimización depende en gran medida de las alternativas de conservación y procesamiento que ofrecen la industria alimentaria, a través de sus distintas aplicaciones tecnológicas. La carrera de Técnico en producción industrial de alimentos ofrece las competencias profesionales que permiten al estudiante conservar y procesar las distintas materias primas de origen primario, como las frutas, hortalizas, cereales, carnes, aves, pescados, mariscos y derivados lácteos, en productos y subproductos, que exigen la aplicación de conocimiento para su aprovechamiento. Asimismo podrá desarrollar competencias genéricas relacionadas principalmente con la participación en los procesos de comunicación en distintos contextos, la integración efectiva a los equipos de trabajo y la intervención consciente, desde su comunidad en particular, en el país y el mundo en general, todo con apego al cuidado del medio ambiente. La formación profesional se inicia en el segundo semestre y se concluye en el sexto semestre desarrollando en este lapso de tiempo las competencias: ejecutar procesos de conservación y transformación de alimentos, aplicando la reglamentación, legislación y normatividad vigente, hacia el cumplimiento de los estándares establecidos de calidad e inocuidad; al mismo tiempo que pueda evaluar los resultados obtenidos, que le permitirán realizar ajustes de mejora continua en la producción y optimización de recursos, hasta el sexto semestre de la carrera técnica. Todas estas competencias posibilitan al egresado su incorporación al mundo laboral o desarrollar procesos productivos independientes, de acuerdo con sus intereses profesionales o las necesidades en su entorno social. Los primeros tres módulos de la carrera técnica tienen una duración de 272 horas cada uno, y los dos últimos de 192, un total de 1200 horas de formación profesional.",
          curriculumMap: "",
        };
      case 'enfermeria':
        return {
          justification: "La carrera de Técnico en Enfermería General ofrece las competencias profesionales que permiten al estudiante aplicar medidas preventivas, cuidados de baja y mediana complejidad al adulto, procedimientos de enfermería médico-quirúrgico, cuidado de la mujer en edad reproductiva y el niño y cuidado del adulto mayor. Asimismo, podrá desarrollar las competencias genéricas que al estudiante le permitan conocerse y valorarse a sí mismo, sustentar una postura personal sobre temas de interés y relevancia general, elegir y practicar estilos de vida saludables, participar y colaborar de manera efectiva en equipos diversos, escuchar, interpretar y emitir mensajes pertinentes en distintos contextos, desarrollar innovaciones y proponer soluciones a problemas a partir de métodos establecidos. Además del desarrollo de competencias de productividad y empleabilidad tales como trabajo en equipo, comunicación efectiva, adaptabilidad, atención al proceso, orientación al logro, planeación y organización, orientación a la mejora continua, atención al cliente, relaciones interpersonales y ética personal. Todas estas competencias posibilitan al egresado su incorporación al mundo laboral o desarrollar procesos productivos independientes, de acuerdo con sus intereses profesionales o las necesidades en su entorno social en diversos sitios de inserción como: consultorios del sector público y privado para el cuidado de la salud, servicios de bancos de órganos, bancos de sangre y otros servicios auxiliares al tratamiento médico prestado por el sector público y privado, consultorios de medicina especializados del sector público y privado, servicios de enfermería a domicilio, hospitales generales del sector público y privado, centros de planificación familiar, centros del sector público y privado para la atención de pacientes que no requieren hospitalización, consulta externa de atención al niño y la madre, asilos y otras residencias para el cuidado de ancianos, centros del sector público dedicados a la atención y cuidado diurno de ancianos y discapacitados. Las competencias antes mencionadas se desarrollan en cinco módulos con una duración de 272 horas cada uno, sumando un total de 1360 horas de formación profesional, además se incluyen las prácticas clínicas con una duración de 192 horas para cada uno de los módulos. Cabe mencionar que como apoyo a la formación profesional se instrumentó un curso propedéutico extracurricular obligatorio que se cursa en el primer semestre, teniendo una duración de 100 horas; los contenidos se refieren a la Fundamentación Teórica de Enfermería con una duración de 40 horas, así como Anatomía y Fisiología con 60 horas.",
          curriculumMap: "",
        };
      case 'suelos':
        return {
          justification: "",
          curriculumMap: "",
        };
      default:
        return {
          justification: '',
          curriculumMap: '',
        };
    }
  };

  const content = renderContent();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                onClick={() => handleImageClick('suelos')}
                className="lg:h-65 md:h-50 w-full object-cover object-center transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                src="https://cecytech.edu.mx/web/assets/img/ofertaeducativa/suelos.png"
                alt="Suelos"
              />
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                onClick={() => handleImageClick('alimentos')}
                className="lg:h-65 md:h-50 w-full object-cover object-center transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                src="https://cecytech.edu.mx/web/assets/img/ofertaeducativa/alimentos.png"
                alt="Alimentos"
              />
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                onClick={() => handleImageClick('enfermeria')}
                className="lg:h-65 md:h-50 w-full object-cover object-center transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                src="https://cecytech.edu.mx/web/assets/img/ofertaeducativa/enfermeria.png"
                alt="Enfermería"
              />
            </div>
          </div>
        </div>

        {activeImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-2/3">
              <h2 className="text-lg font-semibold">Detalles de la especialidad</h2>
              <div className="flex justify-between mt-4">
                <button
                  className={`px-4 py-2 ${showJustification ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
                  onClick={() => {
                    setShowJustification(true);
                  }}
                >
                  Justificación
                </button>
                <button
                  className={`px-4 py-2 ${!showJustification ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
                  onClick={() => {
                    setShowJustification(false);
                  }}
                >
                  Mapa Curricular
                </button>
              </div>

              <textarea
                readOnly
                className="mt-4 w-full h-48 p-2 border rounded"
                value={showJustification ? content.justification : content.curriculumMap}
              />
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => {
                    setActiveImage(null);
                  }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
  
  export default OfertaEducativa;
  