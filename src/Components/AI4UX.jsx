import React from "react";

// Add images later if needed
import Hero from "../images/AI4UX/companionhero.jpg"

export default function AI4UX() {
    return (
        <div className="bg-black text-white min-h-screen px-6 sm:px-8 py-20">
            <div className="max-w-4xl mx-auto space-y-28">

                {/* HERO */}
                <section className="space-y-8">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        AI4UX – Designing with AI in UX Workflows
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        This project explored how AI changes the way designers work —
                        not just what we design, but how we think, iterate, and make decisions.
                    </p>

                    <p className="text-gray-500 text-sm max-w-xl">
                        Instead of focusing only on the final interface, the project became
                        an exploration of designing with AI systems that behave unpredictably.
                    </p>

                    {Hero && (
                        <img
                            src={Hero}
                            alt="AI UX process overview"
                            className="rounded-xl mt-6 opacity-90"
                        />

                    )}
                    <p> Link to the project: </p>
                    <a href="https://sweden-companion.vercel.app/"> https://sweden-companion.vercel.app/ </a>
                </section>


                {/* FRAMING */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Framing</h2>

                    <p className="text-gray-300 max-w-2xl">
                        When designing for international students, it quickly became clear that
                        a static information system wasn’t enough. Users needed different things
                        at different times, depending on their situation.
                    </p>

                    <p className="text-gray-300 max-w-2xl">
                        This led to a key question that guided the project:
                    </p>

                    <p className="text-purple-300 text-lg font-medium max-w-xl">
                        How do you design a system when the content is created dynamically by AI?
                    </p>
                </section>


                {/* PROCESS (split layout for experimental feel) */}
                <section className="grid md:grid-cols-2 gap-10 items-start">

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Exploration</h2>

                        <p className="text-gray-300">
                            The process began by exploring a wide range of possible AI applications.
                            Using the AI Meets Design toolkit, we generated ideas across multiple domains.
                        </p>

                        <p className="text-gray-300">
                            Instead of starting with a fixed problem, the project began with possibilities —
                            and gradually became more focused.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                        <p className="text-gray-300 text-sm">
                            → The process didn’t start with a solution.
                            → It started with exploring what AI *could be used for*.
                        </p>
                    </div>

                </section>


                {/* DESIGNING WITH AI (CORE SECTION) */}
                <section className="space-y-10">

                    <h2 className="text-2xl font-semibold">Designing with AI</h2>

                    <p className="text-gray-300 max-w-2xl">
                        As the project progressed, it became clear that designing with AI
                        differs fundamentally from traditional UX work.
                    </p>

                    {/* layered cards */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
                            <p className="text-gray-300 text-sm">
                                Generating interfaces was fast and easy,
                                but controlling the outcome was difficult.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
                            <p className="text-gray-300 text-sm">
                                Small changes in prompts led to completely different results,
                                making iteration unpredictable.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
                            <p className="text-gray-300 text-sm">
                                The design process shifted from designing UI
                                to refining how we communicate with the system.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
                            <p className="text-gray-300 text-sm">
                                Multiple iterations were required to get a usable result,
                                making prompt design a central part of the workflow.
                            </p>
                        </div>

                    </div>
                </section>


                {/* AI AS TOOL */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">AI in the Design Process</h2>

                    <p className="text-gray-300 max-w-2xl">
                        AI was not only part of the final product — it was used throughout
                        the design process itself.
                    </p>

                    <ul className="text-gray-300 space-y-2">
                        <li>• Generating personas</li>
                        <li>• Refining prompts</li>
                        <li>• Exploring ideas</li>
                        <li>• Supporting team decisions</li>
                    </ul>

                    <p className="text-gray-500 text-sm italic max-w-xl">
                        At times, AI acted as both a tool and a mediator in the design process.
                    </p>
                </section>


                {/* FINAL CONCEPT */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">The Concept</h2>

                    <p className="text-gray-300 max-w-2xl">
                        The final concept was an AI-powered system designed to support
                        international students moving to Sweden, combining personalised
                        checklists with an AI assistant.
                    </p>

                    <p className="text-gray-300 max-w-2xl">
                        Instead of presenting fixed information, the system adapts
                        to each user’s context and needs.
                    </p>
                </section>



                {/* KEY INSIGHTS GRID */}
                <section className="space-y-10">
                    <h2 className="text-2xl font-semibold">Key Insights</h2>

                    <div className="grid sm:grid-cols-2 gap-6">

                        <div className="bg-purple-900/20 border border-purple-400/20 rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">Prompting is design</h3>
                            <p className="text-sm text-gray-300">
                                Writing prompts became a core design skill, shaping both behaviour and output.
                            </p>
                        </div>

                        <div className="bg-purple-900/20 border border-purple-400/20 rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">AI introduces uncertainty</h3>
                            <p className="text-sm text-gray-300">
                                Unlike traditional systems, behaviour cannot be fully predicted or controlled.
                            </p>
                        </div>

                        <div className="bg-purple-900/20 border border-purple-400/20 rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">Iteration becomes essential</h3>
                            <p className="text-sm text-gray-300">
                                Design shifts from planning to testing, refining, and adjusting continuously.
                            </p>
                        </div>

                        <div className="bg-purple-900/20 border border-purple-400/20 rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">The role of the designer changes</h3>
                            <p className="text-sm text-gray-300">
                                Designers guide system behaviour rather than fully defining it upfront.
                            </p>
                        </div>

                    </div>
                </section>


                {/* REFLECTION */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Reflection</h2>

                    <p className="text-gray-300 max-w-2xl">
                        This project changed how I see UX design when working with AI.
                        Instead of creating complete solutions, the role becomes guiding,
                        testing, and shaping systems that behave dynamically.
                    </p>

                    <p className="text-gray-300 max-w-2xl">
                        It also made clear that designing AI is not just about interfaces,
                        but about understanding how systems interpret input and generate outcomes.
                    </p>
                </section>

            </div>
        </div>
    );
}
