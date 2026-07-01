import React from "react";
import { useNavigate } from "react-router-dom";

// 👉 Import your images here
// Adjust paths based on your project structure
import Hero from "../images/matematik/hero.png";
import AIOutput from "../images/matematik/ai-output.png";
import Homepage from "../images/matematik/homepage.png";
import Toggle from "../images/matematik/toggle.png";
import Grading from "../images/matematik/grading.png";

export default function Matematikgeneratorn() {
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
                            Matematikgeneratorn
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed">
                            Designing a more usable and trustworthy AI tool for teachers generating and grading math tests.
                        </p>

                        <p className="text-gray-500 text-sm max-w-lg">
                            This project challenged how I think about designing for AI — not just as a tool,
                            but as something users need to understand and trust.
                        </p>

                        <img
                            src={Hero}
                            alt="Overview of the Matematikgeneratorn interface"
                            className="rounded-xl w-full object-cover"
                        />
                    </section>

                    {/* OVERVIEW */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Overview</h2>

                        <p className="text-gray-300 leading-relaxed">
                            Matematikgeneratorn is an AI-powered tool designed to help teachers generate
                            and grade math tests through prompt-based interaction. This project focused on
                            improving the usability of the system and aligning it with how teachers
                            actually create and evaluate tests in their daily work.
                        </p>
                    </section>


                    {/* CHALLENGE */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">The Challenge</h2>

                        <p className="text-gray-300 leading-relaxed">
                            Early exploration revealed that while the system had strong technical potential,
                            its usability introduced friction. The interaction relied heavily on prompt-based
                            inputs, which created uncertainty for users unfamiliar with how to structure input.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            The workflow from generating tests to grading them lacked clarity,
                            and the interface introduced unnecessary cognitive load, especially
                            for teachers with varying levels of digital experience.
                        </p>
                    </section>

                    {/* INSIGHTS */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Key Insights</h2>

                        <div className="space-y-3">
                            <p>Teachers prioritise speed and efficiency due to constant time pressure.</p>
                            <p>Clarity is more important than flexibility, especially in early interactions.</p>
                            <p>AI tools need guidance to build trust.</p>
                            <p>Workflows must align with existing teaching practices.</p>
                        </div>

                    </section>

                    {/* AI OUTPUT */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">System Evaluation</h2>
                        <p className="text-gray-300 leading-relaxed">
                            To better understand the system, I tested how the AI generated content behaved in different scenarios.
                        </p>

                        <img
                            src={AIOutput}
                            alt="Example of AI-generated math test and solution"
                            className="rounded-xl w-full object-cover"
                        />

                        <p className="text-gray-300 leading-relaxed">
                            Testing the system revealed that the AI could generate structured
                            and detailed solutions, but the clarity and difficulty of the
                            questions varied. While technically capable, the lack of control
                            and transparency made it difficult for users to trust and rely on the output.
                        </p>
                        <p className="text-gray-400 max-w-xl">
                            Based on these insights, the design focused on reducing cognitive load,
                            improving clarity, and making the system easier to approach for first-time users.
                        </p>
                    </section>

                    {/* DESIGN DECISIONS */}
                    <section className="space-y-12">
                        <h2 className="text-2xl font-semibold">Design Decisions</h2>

                        {/* Homepage */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                From action-based to overview-driven navigation
                            </h3>



                            <img
                                src={Homepage}
                                alt="Redesigned homepage layout"
                                className="rounded-xl w-full object-cover"
                            />

                            <p className="text-gray-300 leading-relaxed">

                                Instead of guiding users directly into a single action, the homepage was redesigned
                                to provide an overview of available tasks. This allows users to orient themselves
                                before taking action, reducing confusion and improving navigation

                            </p>
                        </div>

                        {/* Cognitive Load */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                Simplifying interaction through progressive disclosure
                            </h3>

                            <img
                                src={Toggle}
                                alt="Interface showing hidden inputs and toggle functionality"
                                className="rounded-xl w-full object-cover"
                            />

                            <p className="text-gray-300 leading-relaxed">

                                Advanced inputs were hidden by default and revealed only when needed.
                                This reduces visual complexity for new users while still allowing more experienced users
                                to access additional control when required.

                            </p>
                        </div>

                        {/* Grading */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                Simplified Grading Flow
                            </h3>

                            <img
                                src={Grading}
                                alt="Updated grading interface with drag and drop"
                                className="rounded-xl w-full object-cover"
                            />

                            <p className="text-gray-300 leading-relaxed">

                                The grading process was redesigned into a clear three-step workflow,
                                combining previously separate actions into a single interface.
                                This reduces friction and helps users move through the process
                                in a predictable and structured way.
                            </p>

                            <p className="text-gray-400 max-w-xl italic">
                                A structured flow reduces uncertainty, especially when working with complex data inputs.
                            </p>

                        </div>
                    </section>

                    {/* OUTCOME */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Outcome</h2>

                        <p className="text-gray-300 leading-relaxed">
                            The redesigned concept creates a clearer and more approachable interaction model,
                            reducing cognitive load and aligning more closely with how teachers actually work in practice.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            By focusing on clarity, structure, and guided interaction, the design lowers the barrier
                            for adopting AI tools in everyday workflows, making the system feel more understandable and reliable.
                        </p>

                        <p className="text-gray-400 max-w-xl italic">
                            This project shifted my perspective on designing for AI — not as a feature, but as something that needs to be clearly guided and understood.
                        </p>


                    </section>

                </div>
            </div>
        </div>

    );
}

