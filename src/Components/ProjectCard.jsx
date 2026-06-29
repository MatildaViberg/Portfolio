import React from "react";
import { Link } from "react-router-dom";
import { HiExternalLink, HiArrowRight } from "react-icons/hi";

export default function ProjectCard({ project }) {
  const { title, description, casesImg, web, internalLink, tags, featured } = project;

  const CardWrapper = ({ children, className }) => {
    if (internalLink) {
      return (
        <Link
          to={internalLink}
          className={className}
          aria-label={`View case study: ${title}`}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={web}
        target="_blank"
        rel="noreferrer"
        className={className}
        aria-label={`Visit project: ${title}`}
      >
        {children}
      </a>
    );
  };

  const wrapperClasses = `
    group block w-full 
    bg-neutral-900/50 backdrop-blur-md 
    border border-neutral-800/80 
    rounded-2xl overflow-hidden 
    hover:border-neutral-700 
    hover:shadow-xl hover:shadow-purple-900/20 
    transition-all duration-500 cursor-pointer
    ${featured ? "lg:flex lg:col-span-2" : ""}
  `;

  return (
    <CardWrapper className={wrapperClasses}>

      {/* IMAGE */}
      <div
        className={`relative overflow-hidden ${featured
          ? "lg:w-3/5 min-h-[300px]"
          : "aspect-video"
          }`}
      >
        <img
          src={casesImg}
          alt={`${title} project preview`}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition duration-500" />
      </div>

      {/* CONTENT */}
      <div
        className={`p-6 sm:p-8 flex flex-col justify-between ${featured ? "lg:w-2/5" : ""
          }`}
      >
        <div>

          {/* FEATURED LABEL */}
          {featured && (
            <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase mb-3 block">
              Featured Project
            </span>
          )}

          {/* TAG CATEGORY LINE */}
          {tags && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase tracking-wide text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* TITLE */}
          <h3
            className={`font-semibold text-white group-hover:text-purple-300 transition-colors mb-3 ${featured ? "text-3xl" : "text-xl"
              }`}
          >
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-prose">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-2 text-sm text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
          <span>{internalLink ? "Read case study" : "View project"}</span>
          {internalLink ? (
            <HiArrowRight className="transition-transform group-hover:translate-x-1.5" />
          ) : (
            <HiExternalLink className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          )}
        </div>
      </div>
    </CardWrapper>
  );
}
