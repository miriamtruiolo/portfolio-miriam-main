"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (showAllSkills, toggleShowAll) => (
      <div>
        <ul className="list-disc pl-2">
          {showAllSkills ? (
            <>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
            </>
          ) : (
            <>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </>
          )}
        </ul>
        <button
          onClick={toggleShowAll}
          className="mt-2 text-blue-500 underline"
        >
          {showAllSkills ? "Chiudi" : "Leggi tutto"}
        </button>
      </div>
    ),
  },
  {
    title: "certifications",
    id: "certifications",
    content: () => (
      <ul className="list-disc pl-2">
        <li>Master in Front End Development: start2impact University</li>
        <li>Master in Digital Marketing: start2impact University</li>
        <li>Diploma Superiore: Liceo Socio-psicopedagogico</li>
      </ul>
    ),
  },
  {
    title: "languages",
    id: "languages",
    content: () => (
      <ul className="list-disc pl-2">
        <li>Italiano: nativa</li>
        <li>Inglese: B2</li>
        <li>Spagnolo: B2</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const toggleShowAll = () => {
    setShowAllSkills((prev) => !prev);
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="hidden md:block"
          src="/images/about.png"
          alt="About"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Chi sono</h2>
          <p className="text-sm sm:text-base">
            Ciao! Mi chiamo <strong>Miriam</strong> e sono un Junior
            Developer con una solida base in Digital Marketing, in particolare
            nel copywriting e nel social media marketing.
            Grazie a tutte le skills maturate nel corso degli anni, affronto lo sviluppo web con un
            approccio orientato sia alla tecnica, che alla user experience.
            <br /> <br/> Al termine del 2024 ho completato un
            <strong> Master in Front-End Development </strong>presso
            start2impact University, grazie al quale ho approfondito strumenti e
            tecnologie fondamentali per il settore.
            <br /> Ad oggi sono pronta ad accogliere nuove opportunità lavorative che mi
            consentano di crescere e contribuire, con entusiasmo e capacità di problem solving.
          </p>
          <h3 className="text-xl font-bold text-white mt-4 mb-4">Conosciamoci meglio!</h3>
          <p>
            Viaggiare è per me una fonte inesauribile di
            ispirazione, ho esplorato oltre 13 paesi e vissuto in luoghi
            come le Filippine, l&apos;Indonesia e la Spagna. Amo anche lo sport:
            dalla sala pesi all&apos;arrampicata, fino alla pole dance, mi piace
            affrontare nuove sfide che richiedono determinazione e disciplina.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificazioni{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Lingue{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((data) => data.id === tab)?.content(
              showAllSkills,
              toggleShowAll
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
