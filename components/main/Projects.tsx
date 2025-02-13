import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12'>
        <ProjectCard
          src="/voice-assistant.jpg"
          title="Voice assistant"
          description="Developed a Voice Assistant in Python for browsing, managing shortcuts and being conected with a weather API to give real-time information"
        />
        <ProjectCard
          src="/nlp.jpeg"
          title="Classification Model"
          description="Developed an NLP model using a CSV dataset from IMDB to predict movie ratings. The model was trained to analyze movie reviews, extracting sentiment and key features to provide an accurate rating prediction. The process involved data preprocessing, feature extraction using NLP techniques, and model training to enhance predictive accuracy."
        />
        <ProjectCard
          src="/powerbiproyect.png"
          title="Power bi data analysis"
          description="I analyzed a CSV file containing information about departments across U.S. states using Power BI. I cleaned and organized the data, created relationships and transformations for optimal analysis, and developed interactive visualizations to highlight trends, departmental distribution, and key performance metrics across different states. This allowed for better insights and decision-making based on the data.."
        />
        <ProjectCard
          src="/coming-soon.webp"
          title="Cooming Soon"
          description="Comming soon.."
        />
      </div>
    </div>
  );
};

export default Projects;