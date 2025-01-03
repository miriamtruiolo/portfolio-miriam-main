"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sito Web Personal Trainer (PT)",
    description: "Sito web per una PT di Valencia, progettato su misura secondo le sue esigenze specifiche",
    image: "/images/projects/sitoMary.png",
    tag: ["All", "FrontEnd"],
    previewUrl: "https://mhealthyfit.netlify.app/",
  },
  {
    id: 2,
    title: "Climate App",
    description: "Applicazione per analizzare dati sul cambiamento climatico, includendo NO2, CO2 e altri parametri",
    image: "/images/projects/climateApp.png",
    tag: ["All", "FrontEnd"],
    previewUrl: "https://climate-app-s2i.netlify.app/",
  },
  {
    id: 3,
    title: "Library App",
    description: "L'obiettivo di quest'app è la ricerca di libri per categoria",
    image: "/images/projects/booksApp.png",
    tag: ["All", "FrontEnd"],
    previewUrl: "https://js-advanced-project.netlify.app",
  },
  {
    id: 4,
    title: "Meditation App",
    description: "App di meditazione, con timer integrato ed effetti sonori per un'esperienza rilassante",
    image: "/images/projects/meditationApp.png",
    tag: ["All", "Marketing"],
    previewUrl: "https://react-meditation-s2i.netlify.app/",
  },
  {
    id: 5,
    title: "Primo portolio personale",
    description: "Primo progetto personale, rappresenta il punto di partenza per monitorare la mia crescita",
    image: "/images/projects/portfolioVecchio.png",
    tag: ["All", "Marketing"],
    previewUrl: "https://miriamtruiolo.netlify.app/ ",
  },
  {
    id: 6,
    title: "Italy Food Awards",
    description: "Analisi e proposta di sviluppo della presenza online",
    image: "/images/projects/image6.png",
    tag: ["All", "Marketing"],
    previewUrl: "https://www.canva.com/design/DAF1Kjye5aM/367ZxvIx_witaa9Hr913Ag/view?utm_content=DAF1Kjye5aM&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Progetti
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;