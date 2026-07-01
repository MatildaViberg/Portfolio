import React from "react";
import { useNavigate } from "react-router-dom";

// 👉 Add your images here
import Hero from "../images/Nana/heronana.jpg";
import Wristband from "../images/Nana/bandlogo.png";
import Posters from "../images/Nana/nana_poster_final.jpg";

import Compact from "../images/Nana/compact.jpg";
import GraphicProfile from "../images/Nana/graphicprofile.jpg";
import Typography from "../images/Nana/typography.jpg";
import Moodboard from "../images/Nana/nana_pastell.jpeg";
import Instagram from "../images/Nana/instagramnana.jpg";
import Flag from "../images/Nana/nana_flagga.jpg";
import Maner from "../images/Nana/instagram.jpg"


export default function Nana() {
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
                        Nana
                    </h1>

                    <p className="text-purple-400 text-sm tracking-wide">
                        Concept Design · User-Centred Design · Brand & Interaction
                    </p>

                    <p className="text-xl text-gray-400 leading-relaxed">
                        Exploring how a wearable concept could support safety and social
                        interaction at large music festivals.
                    </p>

                    <img
                        src={Hero}
                        alt="Nana festival band concept"
                        className="rounded-xl w-full object-cover"
                    />
                </section>

                {/* OVERVIEW */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Overview</h2>

                    <p className="text-gray-300 leading-relaxed">
                        Nana is a concept design project focused on how technology could support
                        safety and social interaction at large festivals. The idea was developed
                        from a relatable challenge: losing track of friends in crowded environments.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        The concept proposes a wearable festival band connected to a mobile system,
                        allowing users to locate friends and feel more secure throughout an event.
                    </p>
                </section>

                {/* CHALLENGE */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">The Challenge</h2>

                    <p className="text-gray-300 leading-relaxed">
                        The project started with an open ideation phase, exploring different
                        possible directions. The concept of a GPS-enabled festival band was
                        selected based on its relevance to a target group that frequently
                        experiences uncertainty at large events.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        A key challenge was translating an abstract idea into something concrete
                        and understandable, without developing a fully functional system.
                    </p>
                </section>

                {/* PROCESS */}
                <section className="space-y-12">
                    <h2 className="text-2xl font-semibold">Process</h2>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                            Concept development through ideation
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Moodboards and value-based exploration were used to define the visual
                            direction. The goal was to create a brand that reflected feelings of
                            connection, safety, and ease of use.
                        </p>
                        <img src={Moodboard} alt="Nana moodboard" className="rounded-xl w-full object-cover" />

                        <p className="text-gray-300 leading-relaxed">
                            The concept was developed through brainstorming and idea selection,
                            focusing on solutions that felt relevant and relatable.
                        </p>
                    </div>


                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                            Visual exploration and identity
                        </h3>
                        <img src={Posters} alt="Nana posters" className="rounded-xl w-full object-cover" />
                        <img
                            src={Wristband}
                            alt="Festival wristband mockup"
                            className="rounded-xl w-full object-cover"
                        />
                        <img
                            src={Flag}
                            alt="Nana flagga"
                            className="rounded-xl w-full object-cover"
                        />



                    </div>
                </section>

                {/* OUTCOME */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Outcome</h2>


                    <p className="text-gray-300 leading-relaxed max-w-2xl">
                        The final outcome is a fictional product and visual identity that communicates how the concept
                        could function in a real-world festival context. The design focuses on clarity, recognition,
                        and usability, supporting the idea of safety and connection between users.
                    </p>

                    {/* IMAGE 1 — Concept communication */}
                    <div className="space-y-4">
                        <img src={Compact} alt="Nana compact" className="rounded-xl w-full object-cover" />

                        <p className="text-gray-400 text-sm max-w-xl">
                            The identity explores different logo variations and applications, emphasising clarity and recognisability across contexts.
                        </p>
                    </div>

                    {/* IMAGE 2 — Identity system */}
                    <div className="space-y-4">
                        <img src={GraphicProfile} alt="Nana graphic profile" className="rounded-xl w-full object-cover" />

                        <p className="text-gray-400 text-sm max-w-xl">
                            A consistent visual system was developed, including logo variations and iconography, to support a cohesive experience across touchpoints.
                        </p>
                    </div>

                    {/* IMAGE 3 — Typography + colour */}
                    <div className="space-y-4">
                        <img src={Typography} alt="Nana typography" className="rounded-xl w-full object-cover" />

                        <p className="text-gray-400 text-sm max-w-xl">
                            Typography and colour choices were guided by the intention to create a friendly, accessible, and trustworthy visual language.
                        </p>
                    </div>

                    <p className="text-gray-400 italic max-w-xl">
                        Although conceptual, the project demonstrates how visual design can support interaction ideas and make abstract concepts tangible.
                    </p>
                </section>
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">
                        Visual Identity Summary
                    </h2>

                    <p className="text-gray-300 leading-relaxed max-w-xl">
                        The final visual identity brings together colour, typography, and form into a cohesive system.
                        The goal was to create a clear and recognisable expression that feels approachable.
                        To make the full concept feel real and actual we decided to create a graphic profile that could be used on different platforms.
                        We created templates for posters, Instagram posts, and wristbands to show how the concept could work in a real-world festival context.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <img
                            src={Instagram}
                            alt="Nana logo variations and identity system"
                            className="rounded-xl w-full object-cover"
                        />

                        <img
                            src={Maner}
                            alt="Nana typography and colour palette"
                            className="rounded-xl w-full object-cover"
                        />
                    </div>
                </section>



            </div>
        </div>
    );
}
