import React from "react";
import { useNavigate } from "react-router-dom";




import Hero from "../images/thesis/apps.png"
import Base44 from "../images/thesis/Base44.png"
import FigmaMake from "../images/thesis/FigmaMake1.png"
import GoogleAI from "../images/thesis/GoogleAI.png"
import Lovable from "../images/thesis/Lovable.png"
import { useState } from "react";



export default function Thesis() {
    const tools = [
        {
            name: "Base44",
            image: Base44,
            observations: [
                "Strong visual hierarchy and polished UI",
                "Generated the most complete feature set",
                "Added a 'My Garden' feature that was not included in the original prompt",
                "Demonstrated how AI can expand the scope of a solution by inferring user needs"
            ],
            takeaway:
                "Added persistent storage through a 'My Garden' feature without being instructed to do so, demonstrating how AI systems actively interpret and expand user intent.",
        },
        {
            name: "Google AI Studio",
            image: GoogleAI,
            observations: [
                "Recognised the gardening domain and adapted the visual design accordingly",
                "Added a Recent Scans feature for returning users",
                "Introduced navigation and premium subscription functionality that was not requested",
                "Demonstrated how AI can make product and business assumptions beyond the original prompt"
            ],
            takeaway:
                "Generated a subscription model, navigation structure, and additional product pages without being instructed to do so, highlighting how AI systems infer business and product requirements rather than simply implementing functionality."
        },

        {
            name: "Figma Make",
            image: FigmaMake,
            observations: [
                "Most closely followed the original prompt",
                "Clear and structured information architecture",
                "Avoided introducing unnecessary functionality",
                "Responded effectively to later iterations and feature requests"
            ],
            takeaway:
                "Unlike the other tools, Figma Make primarily treated the prompt as a specification to implement rather than a product concept to expand. This resulted in a predictable and focused solution that required fewer revisions."
        },

        {
            name: "Lovable",
            image: Lovable,
            observations: [
                "Added a 'My Garden' feature despite it not being included in the original prompt",
                "Created a strong visual identity and cohesive branding",
                "Maintained a focused user flow without introducing unnecessary complexity",
                "Balanced AI-generated initiative with adherence to the original concept"
            ],
            takeaway:
                "Expanded the original concept by introducing a garden management feature while remaining close to the intended user experience. Demonstrated how AI can infer useful functionality without significantly altering the product scope."
        },
    ];
    const [selectedTool, setSelectedTool] = useState(null);

    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-black to-white text-white">

            {/* ── Back button ── */}
            <div className="max-w-screen-lg mx-auto px-8 pt-8">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-gray-400 hover:text-white duration-200 hover:scale-105 text-sm"
                >
                    ← Back to Portfolio
                </button>

            </div>
            <div className="bg-black text-white min-h-screen px-6 sm:px-8 py-20">
                <div className="max-w-3xl mx-auto space-y-24">

                    {/* HERO */}
                    <section className="space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                            Negotiating Control in Human–AI Co-Coding
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                            My thesis focused on how people interact with AI tools when building
                            software together, and how control and decision-making unfold during that process.
                        </p>

                        <p className="text-gray-400 text-sm max-w-xl">
                            To explore this, participants were asked to create applications they wanted to build,
                            while their actions and decisions were observed in real time.
                        </p>

                        {/* HERO IMAGE */}
                        {Hero && (
                            <img
                                src={Hero}
                                alt="Human-AI interaction in co-coding process"
                                className="mt-6 rounded-xl shadow-xl"
                            />
                        )}
                    </section>


                    {/* OVERVIEW */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Overview</h2>

                        <p className="text-gray-300 leading-relaxed">
                            In this thesis, I explored how people collaborate with generative AI
                            when creating software. The focus was not on what the AI produces,
                            but on how interaction unfolds between human and system during the process.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            The study was conducted as a qualitative experiment where participants
                            built applications using a generative AI tool, while their behaviour
                            and decisions were observed and analysed.
                        </p>
                    </section>

                    {/* CORE QUESTION */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Core Question</h2>

                        <p className="text-gray-300 leading-relaxed">
                            How do people maintain a sense of control and make decisions
                            when working with AI systems that can act and generate on their own?
                        </p>
                    </section>
                    {/* PRE-STUDY */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">Pre-Study: Comparing AI Development Tools</h2>

                        <p className="text-gray-300 leading-relaxed">
                            Before conducting the main study, I carried out a pre-study to better understand
                            how different AI-powered development tools interpret and implement the same user intent.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            Using an identical prompt, I built the same application across four AI development
                            platforms and compared the resulting interfaces, workflows, functionality and design decisions.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            The goal was not to determine which tool performed best, but to explore how AI systems
                            translate user intent into software and how those differences might affect the user experience.
                        </p>
                    </section>
                    <div className="grid md:grid-cols-2 gap-6">
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                onClick={() => setSelectedTool(tool)}
                                className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/30 hover:scale-[1.01] transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="bg-black p-4">
                                    <img
                                        src={tool.image}
                                        alt={tool.name}
                                        className="w-full h-auto rounded-lg object-cover"
                                    />
                                </div>

                                <div className="p-5 space-y-4">
                                    <h3 className="text-lg font-semibold">
                                        {tool.name}
                                    </h3>



                                    <ul className="space-y-1 text-sm text-gray-300">
                                        {tool.observations.map((item) => (
                                            <li key={item}>• {item}</li>

                                        ))}

                                    </ul>
                                    <p className="text-sm text-purple-300 leading-relaxed">
                                        {tool.takeaway}
                                    </p>

                                </div>

                            </div>
                        ))}
                    </div>


                    <section className="space-y-4">
                        <p className="text-gray-400 text-sm">
                            All four applications were generated from the exact same prompt.
                            Despite identical instructions, the tools produced notably different
                            design patterns, workflows, implementations and feature priorities.
                        </p>
                    </section>


                    {/* APPROACH */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Approach</h2>

                        <p className="text-gray-300 leading-relaxed">
                            Participants were asked to create an application they wanted to build
                            using a generative AI tool. This allowed them to work in a way that felt natural,
                            rather than following a predefined task.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            During the sessions, participants thought aloud while working, making it possible
                            to observe how they made decisions, handled uncertainty, and interacted with the AI in real time.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            The sessions were recorded and analysed to understand how interaction,
                            collaboration, and control developed throughout the process.
                        </p>
                    </section>
                    <section className="space-y-10">
                        <h2 className="text-2xl font-semibold">Key Findings</h2>

                        <div className="grid sm:grid-cols-2 gap-6">

                            {/* CARD 1 */}
                            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300">
                                <h3 className="text-lg font-semibold mb-3">
                                    Control shifts over time
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    During the sessions, participants didn’t control every step.
                                    Instead, they often let the AI act first, and then stepped in afterwards
                                    to evaluate and adjust the result.
                                </p>
                            </div>

                            {/* CARD 2 */}
                            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300">
                                <h3 className="text-lg font-semibold mb-3">
                                    Delegation with responsibility
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Participants relied on the AI to handle implementation,
                                    while they guided the direction and evaluated outcomes.
                                    The AI handled the “how”, while the human defined the “what”.
                                </p>
                            </div>

                            {/* CARD 3 */}
                            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300">
                                <h3 className="text-lg font-semibold mb-3">
                                    Working with uncertainty
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    At many points, participants were unsure what the AI was doing.
                                    Instead of understanding the system, they relied on visible output
                                    and continued from there.
                                </p>
                            </div>

                            {/* CARD 4 */}
                            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300">
                                <h3 className="text-lg font-semibold mb-3">
                                    Accept first, evaluate later
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Participants often accepted AI-generated output to see the result,
                                    and then evaluated and modified it afterwards.
                                    Acceptance became part of the workflow.
                                </p>
                            </div>

                        </div>
                    </section>


                    {/* DESIGN IMPLICATIONS */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Design Implications</h2>

                        <p className="text-gray-300 leading-relaxed">
                            Designing AI systems is not about giving users full control at every step.
                            Instead, it is about supporting interaction over time, where users can act,
                            evaluate, and adjust in cycles.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            Clear system states, reversibility, and the ability to test and iterate on results
                            are more important than full transparency of how the system works internally.
                        </p>
                    </section>


                    {/* MY ROLE */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">My Role</h2>

                        <p className="text-gray-300 leading-relaxed">
                            I designed and conducted the study, facilitated participant sessions,
                            and analysed the data using qualitative methods.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            The work focused on understanding interaction patterns and behaviour,
                            rather than evaluating the technical performance of the AI tool.
                        </p>
                    </section>


                    {/* REFLECTION */}
                    <section className="space-y-4 pb-10">
                        <h2 className="text-2xl font-semibold">Reflection</h2>

                        <p className="text-gray-300 leading-relaxed">
                            This thesis changed how I think about working with AI.
                            Rather than designing for full control, I now see AI systems
                            as collaborators that require guidance, timing, and continuous evaluation.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            It also made clear that good interaction design is not about removing uncertainty,
                            but about helping people work with it.
                        </p>
                    </section>

                </div>
            </div>
            {selectedTool && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
                    onClick={() => setSelectedTool(null)}
                >
                    <div
                        className="bg-zinc-900 border border-white/10 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedTool(null)}
                            className="absolute right-6 top-4 text-3xl text-gray-400 hover:text-white"
                        >
                            ×
                        </button>

                        <h2 className="text-3xl font-bold mb-6">
                            {selectedTool.name}
                        </h2>

                        <img
                            src={selectedTool.image}
                            alt={selectedTool.name}
                            className="w-full h-auto rounded-lg object-cover"
                        />

                        <h3 className="text-xl font-semibold mb-3">
                            Key Observations
                        </h3>

                        <ul className="space-y-2 text-gray-300 mb-6">
                            {selectedTool.observations.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">
                            Research Takeaway
                        </h3>

                        <p className="text-purple-300 leading-relaxed">
                            {selectedTool.takeaway}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}