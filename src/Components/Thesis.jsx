import React from "react";
import { useNavigate } from "react-router-dom";

// Optional image imports (add later)

//This is a stupid naming MATILDA!!!
import Hero from "../images/thesis/apps.png"


export default function Thesis() {
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

                        <p className="text-gray-500 text-sm max-w-xl">
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
        </div>
    );
}