import React from "react";
import { Link } from "react-scroll";

export function Button({
    children,
    type = "primary", // "primary" | "secondary"
    to,
    href,
    icon,
}) {
    const baseStyles =
        "inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-200 ease-out cursor-pointer";

    const variants = {
        primary:
            "text-white border border-fuchsia-400/40 hover:border-fuchsia-400 hover:bg-fuchsia-500/10 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(217,70,239,0.3)]",
        secondary:
            "text-gray-300 border border-white/20 hover:border-white/40 hover:text-white hover:bg-white/5 hover:scale-[1.02] hover:-translate-y-0.5",
    };

    const iconStyles =
        "transition-transform duration-200 ease-out group-hover:translate-x-1";

    // ✅ Internal scroll link
    if (to) {
        return (
            <Link
                to={to}
                smooth
                duration={500}
                className={`group ${baseStyles} ${variants[type]}`}
            >
                {children}
                {icon && <span className={iconStyles}>{icon}</span>}
            </Link>
        );
    }

    // ✅ External link (CV)
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group ${baseStyles} ${variants[type]}`}
        >
            {children}
            {icon && <span className={iconStyles}>{icon}</span>}
        </a>
    );
}