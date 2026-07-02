import React from "react";
import { useNavigate } from "react-router-dom";

// 👉 Add your images here
import exhibition from "../images/Vitalit/exhibition.jpg";
import prototype3 from "../images/Vitalit/prototype3.png";
import prototype2 from "../images/Vitalit/prototype2.png";
import prototype5 from "../images/Vitalit/prototype5.png";
import prototype from "../images/Vitalit/prototype.jpg";
import sketching from "../images/Vitalit/sketching.png";

export default function MedicalDevice() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white">

            {/* ── Back button ── */}
            <div className="max-w-3xl mx-auto px-6 pt-8">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-gray-400 hover:text-white duration-200 hover:scale-105 text-sm"
                >
                    ← Back to Portfolio
                </button>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-20 space-y-24">

                {/* HERO */}
                <section className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Designing a Wearable System for Emergency Medical Access
                    </h1>

                    <p className="text-xl text-gray-400 leading-relaxed">
                        Exploring how NFC-based interaction can support decision-making in high-pressure situations.
                    </p>

                    <p className="text-gray-500 text-sm max-w-lg">
                        This project focuses on designing beyond screens, using physical interaction
                        and prototyping to explore how critical information can be accessed quickly and safely.
                    </p>

                    {exhibition && (
                        <img
                            src={exhibition}
                            alt="Vitalit exhibition showcase"
                            className="w-full rounded-xl shadow-xl mt-6"
                        />
                    )}
                </section>

                {/* OVERVIEW */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Overview</h2>

                    <p className="text-gray-300 leading-relaxed">
                        This project explores how personal medical information can be made accessible
                        in emergency situations through a wearable device. The concept centres around
                        a physical artefact embedded with NFC technology, allowing others to access
                        critical data when a user is unable to communicate.
                    </p>
                </section>

                {/* CHALLENGE */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">The Challenge</h2>

                    <p className="text-gray-300 leading-relaxed">
                        Research revealed a gap between how medical information is stored and how it is used in real-world situations.
                        In emergencies, people experience stress and uncertainty, making it difficult to act effectively.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        The challenge became understanding how to make critical medical information accessible,
                        understandable, and usable in time-sensitive situations.
                    </p>
                </section>

                {/* INSIGHTS */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Key Insights</h2>

                    <div className="space-y-3 text-gray-300">
                        <p>Users lack understanding of how their medical data is stored and accessed.</p>
                        <p>Emergency situations create stress and reduce decision-making ability.</p>
                        <p>Trust and clarity are essential when designing for health-related systems.</p>
                        <p>People need simple and immediate guidance when helping others.</p>
                    </div>


                </section>

                {/* CONCEPT */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Concept</h2>

                    <p className="text-gray-300 leading-relaxed">
                        The concept is a wearable device embedded with NFC technology that allows others
                        to scan and access medical information in emergency situations.
                    </p>
                    {sketching && (
                        <img
                            src={sketching}
                            alt="Sketching and ideation phase"
                            className="w-full rounded-xl shadow-xl mt-6"
                        />
                    )}

                    <p className="text-gray-300 leading-relaxed">
                        A key insight was identifying two users: the person wearing the device and
                        a medical professional responsible for adding verified information.
                    </p>

                    <p className="text-gray-400 max-w-xl">
                        This shifted the design from a simple storage idea to a system based on trust, accuracy, and real-world use.
                    </p>
                </section>

                {/* IDEATION */}
                <section className="space-y-12">
                    <h2 className="text-2xl font-semibold">Ideation & Interaction</h2>

                    <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed">
                            Different form factors were explored, such as bracelets, keychains, and necklaces,
                            to understand how the device could fit naturally into everyday use.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Scenario-based design</h3>

                        <p className="text-gray-300 leading-relaxed">
                            The concept was tested through bodystorming, acting out emergency scenarios.
                            This helped identify how users interact with the device in stressful situations.
                        </p>

                        <p className="text-gray-400 italic max-w-xl">
                            Designing for emergencies requires understanding behaviour, not just interaction flows.
                        </p>
                    </div>
                </section>

                {/* PROTOTYPING */}
                <section className="space-y-12">
                    <h2 className="text-2xl font-semibold">Prototyping</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                        {prototype && (
                            <img
                                src={prototype}
                                alt="Physical NFC prototype"
                                className="w-full h-64 object-cover rounded-xl shadow-xl"
                            />
                        )}
                        {prototype3 && (
                            <img
                                src={prototype3}
                                alt="3D printed wearable prototypes"
                                className="w-full h-64 object-cover rounded-xl shadow-xl"
                            />
                        )}
                        {sketching && (
                            <img
                                src={prototype2}
                                alt="Sketching and ideation phase"
                                className="w-full h-64 object-cover rounded-xl shadow-xl"
                            />
                        )}
                        {exhibition && (
                            <img
                                src={prototype5}
                                alt="Vitalit exhibition showcase"
                                className="w-full h-64 object-cover rounded-xl shadow-xl"
                            />
                        )}
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                            NFC technology was tested to explore how easily information could be accessed
                            through scanning. This helped evaluate feasibility and interaction simplicity.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            Physical prototypes were created using 3D modelling and printing,
                            allowing exploration of form, scale, and usability in real-world scenarios.
                        </p>

                        <p className="text-gray-400 max-w-xl">
                            Working with physical materials highlighted constraints and opportunities
                            that are not visible in digital design.
                        </p>
                    </div>
                </section>

                {/* OUTCOME */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Outcome</h2>

                    <p className="text-gray-300 leading-relaxed">
                        The project results in a conceptual wearable system that combines physical and digital interaction.
                        It demonstrates how design can support users in high-pressure contexts by making critical information accessible.
                    </p>

                    <p className="text-gray-400 italic max-w-xl">
                        Designing for safety requires balancing accessibility, trust, and simplicity.
                    </p>
                </section>

                {/* REFLECTION */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Reflection</h2>

                    <p className="text-gray-300 leading-relaxed">
                        This project strengthened my understanding of designing for real-world complexity,
                        where multiple users, context, and trust are essential.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        Working with physical prototyping expanded my perspective on interaction design,
                        showing how user experience extends beyond digital interfaces.
                    </p>

                    <p className="text-gray-400 italic max-w-xl">
                        It sparked a deeper interest in designing systems that bridge technology, people, and critical situations.
                    </p>
                </section>

            </div>
        </div>
    );
}

