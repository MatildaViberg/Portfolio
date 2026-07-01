import React from "react";
import ProjectCard from "./ProjectCard";

// Images
import Thesis from "../images/CasesCoverImg/Thesis.png";
import AI4UX from "../images/CasesCoverImg/SwedenCompanion.jpg";
import Vitalit from "../images/CasesCoverImg/vitalit.png";
import Arvered from "../images/CasesCoverImg/arvered.png";
import Matematikgeneratorn from "../images/CasesCoverImg/matte.png";

export default function Portfolio() {
  const featuredProject = {
    id: "thesis",
    title: "Master’s Thesis – Interaction & UX Design",
    description:
      "Exploring how people collaborate with AI when building software, and how control and decision-making unfold over time.",
    casesImg: Thesis,
    internalLink: "/thesis",
    tags: ["UX Research", "Interaction Design", "AI & Design"],
    featured: true,
  };

  const portfolios = [
    {
      id: "ai4ux",
      title: "AI4UX – AI in Design Workflows",
      description:
        "Exploring how AI can support UX workflows through ideation, prototyping, and decision-making. Focused on understanding the balance between automation and human creativity in design processes.",
      casesImg: AI4UX,
      internalLink: "/ai4ux",
      tags: ["AI & Design", "UX Research", "Interaction Design"],
    },
    {
      id: "matematikgeneratorn",
      title: "Matematikgeneratorn – AI Tool for Teachers",
      description:
        "UX research and design for an AI-powered tool that helps teachers generate high school math tests. Based on interviews, qualitative analysis, and the development of a design system and interactive wireframes.",
      casesImg: Matematikgeneratorn,
      internalLink: "/matematikgeneratorn",
      tags: ["UX Research", "AI", "Design Systems"],
    },
    {
      id: "vitalit",
      title: "Vitalit – Emergency Response Concept",
      description:
        "Concept design combining physical and digital interaction, including a wearable NFC solution linked to personal health data. Focused on usability, accessibility, and system-level thinking.",
      casesImg: Vitalit,
      internalLink: "/vitalit",
      tags: ["Interaction Design", "UX Concept", "Prototyping"],
    },
    {
      id: "nana",
      title: "Nana – Branding & Visual Storytelling",
      description:
        "A creative project exploring brand identity, visual design, and storytelling through graphic production and filmmaking. Focused on creating a cohesive and expressive visual language.",
      casesImg: Arvered,
      internalLink: "/nana",
      tags: ["Branding", "Visual Design", "Storytelling"],
    },
  ];

  return (
    <div name="work" className="bg-gradient-to-b to-black from-[#1B0227] w-full text-white py-24">
      <div className="max-w-screen-lg px-8 mx-auto flex flex-col w-full">

        {/* Header */}
        <div className="pb-12 text-left">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500/80 tracking-tight">
            Selected Work
          </p>
          <p className="py-6 text-gray-400 font-light max-w-xl text-base">
            A curated selection of projects focused on UX design, interaction, and the role of AI in creative processes.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-12">
          <ProjectCard project={featuredProject} />
        </div>

        {/* Supporting Projects */}
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
          {portfolios.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
}
