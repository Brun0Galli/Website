import React from "react";
import CertificationCard from "../sub/CertificationCard";

const Education = () => {
  return (
    <div
      className="relative z-[40] flex flex-col items-center justify-center py-20"
      id="education"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Education
      </h1>
      <div className='relative z-[20] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12'>
        <CertificationCard 
          img="/Cibersecurity1.png"
          title='Google Foundations of Cibersecurity' 
          pdfSrc='https://coursera.org/share/496b2a70e1f98fda3e9e5ab8c07af7cd'
        />
        <CertificationCard 
          img="/Python_total.png"
          title='Python TOTAL - Programador Avanzado en 16 días' 
          pdfSrc='https://www.udemy.com/certificate/UC-9b26b1e4-6318-4c13-a2f0-2c02ffd10ac1/'
        />
        <CertificationCard 
          img="/Datascience.png"
          title='Curso de Data Science en Python Desde Cero + ChatGPT [2024]' 
          pdfSrc='https://www.udemy.com/certificate/UC-52314508-f86d-4b8c-af04-6d749ea1025c/'
        />
        <CertificationCard 
          img="/Docker.png"
          title='Docker de cero a experto: con Compose y Swarm' 
          pdfSrc='https://www.udemy.com/certificate/UC-31ef1f8b-6451-43e3-88eb-ed04c11b4d5b/'
        />
      </div>
    </div>
  );
};

export default Education;
