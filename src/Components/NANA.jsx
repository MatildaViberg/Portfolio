import React from "react";
import { useNavigate } from "react-router-dom";

export default function NANA() {
    const navigate = useNavigate();

    const body1 = `A auctor sodales tortor purus. Turpis posuere porttitor fermentum rhoncus nunc risus. Sapien facilisi quis id gravida viverra enim lorem. Tincidunt tempor sit egestas ac. Turpis eget quam amet nunc scelerisque lectus suspendisse consequat. Amet aliquam nunc placerat et nisl mattis id praesent etiam. Adipiscing a proin elementum eget scelerisque quisque purus. Mauris nunc ut eget et magna massa vivamus lacus pharetra. Ac cras dui nulla mattis cursus sit pellentesque adipiscing. Dolor leo varius nunc libero cursus eu a orci. Facilisis scelerisque sed bibendum aliquet vulputate semper vel justo massa. Tempus arcu sit pellentesque varius eu ipsum eros. Ultrices viverra ultrices augue faucibus commodo diam accumsan risus. Etiam nullam ultricies eget viverra et aliquet purus sit. Nibh suspendisse vivamus amet enim.`;

    const body2 = `A auctor sodales tortor purus. Turpis posuere porttitor fermentum rhoncus nunc risus. Sapien facilisi quis id gravida viverra enim lorem. Tincidunt tempor sit egestas ac. Turpis eget quam amet nunc scelerisque lectus suspendisse consequat. Amet aliquam nunc placerat et nisl mattis id praesent etiam. Adipiscing a proin elementum eget scelerisque quisque purus. Mauris nunc ut eget et magna massa vivamus lacus pharetra. Ac cras dui nulla mattis cursus sit pellentesque adipiscing. Dolor leo varius nunc libero cursus eu a orci. Facilisis scelerisque sed bibendum aliquet vulputate semper vel justo massa. Tempus arcu sit pellentesque varius eu ipsum eros. Ultrices viverra ultrices augue faucibus commodo diam accumsan risus. Etiam nullam ultricies eget viverra et aliquet purus sit. Nibh suspendisse vivamus amet enim.`;

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1B0227] to-black text-white">

            {/* ── Back button ── */}
            <div className="max-w-screen-lg mx-auto px-8 pt-8">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-gray-400 hover:text-white duration-200 hover:scale-105 text-sm"
                >
                    ← Back to Portfolio
                </button>
            </div>

            <div className="max-w-screen-lg mx-auto px-8 pb-24">

                {/* ── Title ── */}
                <h1 className="text-6xl font-bold mt-8 mb-12 tracking-tight">AI4UX</h1>

                {/* ── Hero image (full width) ── */}
                <div className="w-full h-72 sm:h-96 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center mb-12">
                    <span className="text-gray-500 text-sm">Image</span>
                </div>

                {/* ── Two-column text ── */}
                <div className="grid sm:grid-cols-2 gap-10 mb-16">
                    <p className="text-gray-300 leading-relaxed text-sm">{body1}</p>
                    <p className="text-gray-300 leading-relaxed text-sm">{body2}</p>
                </div>

                {/* ── Image left, text right ── */}
                <div className="grid sm:grid-cols-2 gap-10 items-center mb-16">
                    <div className="w-full h-64 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Image</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">{body1}</p>
                </div>

                {/* ── Text left, image right ── */}
                <div className="grid sm:grid-cols-2 gap-10 items-center mb-16">
                    <p className="text-gray-300 leading-relaxed text-sm">{body2}</p>
                    <div className="w-full h-64 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Image</span>
                    </div>
                </div>

                {/* ── Two images side by side ── */}
                <div className="grid sm:grid-cols-2 gap-6 mb-16">
                    <div className="w-full h-56 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Image</span>
                    </div>
                    <div className="w-full h-56 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Image</span>
                    </div>
                </div>

                {/* ── Full-width closing image ── */}
                <div className="w-full h-72 sm:h-96 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image</span>
                </div>

            </div>
        </div>
    );
}
