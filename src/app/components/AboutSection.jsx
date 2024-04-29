"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Ingeniería en Sistemas de Información, Universidad Tecnológica
          Nacional, UTN-FRD (2020-actualidad)
        </li>
        <li>Desarrollador Front-end Academia Guayerd (2021)</li>
        <li>
          Bachillerato en economía y administración Colegio Mano Amiga Santa
          María (2013-2018)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a
            href="https://drive.google.com/file/d/1l23udoj-mnPbjkLMiLy6V-NZ63d6iLue/view?usp=sharing"
            target="_blank"
            className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
          >
            <span>Certificado de Desarrollador Front-end academia Guayerd</span>
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1NBYANOTw9TBbqWuKs2YTESBUGx2tmGC6/view?usp=sharing"
            target="_blank"
            className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
          >
            <span>Certificado SQL Desafío Latam</span>
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mi </h2>
          <p className="text-base lg:text-lg">
            Soy un full stack web developer con muchas ganas de aprender y
            crecer profesionalmente. Cuento con experiencia como QA tester
            freelancer en la plataforma uTest. Soy estudiante de Ingeniería en
            Sistemas de Información. Me especialice en el Stack de Java Script tanto para el Front como Back-end. Tengo dominio de base datos relacionales y no relacionales.
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
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificados{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
