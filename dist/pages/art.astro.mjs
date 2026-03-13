import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_rJqYIXTt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CkbTGpjW.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { g as getProjectsByYear } from '../chunks/projects_DOGzUtwL.mjs';
import { ArrowDown } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const ProjectCard = ({ project, index, variant = "default" }) => {
  const yearDisplay = project.yearEnd ? `${project.year}–${project.yearEnd}` : project.year;
  if (variant === "featured") {
    return /* @__PURE__ */ jsx(
      "a",
      {
        href: `/project/${project.slug}`,
        className: "group block",
        children: /* @__PURE__ */ jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden glitch-hover scanlines", children: [
                /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] bg-muted", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: project.thumbnail,
                    alt: project.title,
                    className: `w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${project.thumbnailPosition === "bottom" ? "object-bottom" : project.thumbnailPosition === "top" ? "object-top" : "object-center"}`,
                    loading: index < 2 ? "eager" : "lazy"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "noise-overlay" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
                /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4", children: yearDisplay }),
                /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 group-hover:text-muted-foreground transition-colors duration-500", children: project.title }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8 leading-relaxed line-clamp-3", children: project.tagline }),
                /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "View Project →" })
              ] })
            ]
          }
        )
      }
    );
  }
  if (variant === "compact") {
    return /* @__PURE__ */ jsx(
      "a",
      {
        href: `/project/${project.slug}`,
        className: "group block",
        children: /* @__PURE__ */ jsxs("article", { className: "flex gap-6 py-4 border-b border-border hover:border-foreground transition-colors duration-500", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative w-20 h-20 flex-shrink-0 overflow-hidden glitch-hover", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: project.thumbnail,
                alt: project.title,
                className: "w-full h-full object-cover transition-all duration-500 group-hover:scale-110",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "noise-overlay" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center min-w-0", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1", children: yearDisplay }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-medium truncate group-hover:text-muted-foreground transition-colors duration-500", children: project.title })
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsx(
    motion.article,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { delay: Math.min(index * 0.1, 0.3), duration: 0.6 },
      children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/project/${project.slug}`,
          className: "group block",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden mb-6 glitch-hover scanlines", children: [
              /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] bg-muted", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.thumbnail,
                  alt: project.title,
                  loading: index < 4 ? "eager" : "lazy",
                  className: `w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${project.thumbnailPosition === "bottom" ? "object-bottom" : project.thumbnailPosition === "top" ? "object-top" : "object-center"}`
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "noise-overlay" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-background opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-foreground/80 px-4 py-2", children: "View Project" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: yearDisplay }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl md:text-2xl font-semibold tracking-tight group-hover:text-muted-foreground transition-colors duration-500", children: project.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-2", children: project.tagline })
            ] })
          ]
        }
      )
    }
  );
};

const Index = () => {
  const allProjectsByYear = getProjectsByYear();
  const projectsByDecade = allProjectsByYear.reduce((acc, project) => {
    const decade = Math.floor(parseInt(project.year) / 10) * 10;
    if (!acc[decade]) {
      acc[decade] = [];
    }
    acc[decade].push(project);
    return acc;
  }, {});
  const decades = Object.keys(projectsByDecade).map(Number).sort((a, b) => b - a);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto w-full relative", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1 },
          className: "max-w-5xl",
          children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2, duration: 0.8 },
                className: "flex items-center gap-4 mb-8",
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/images/logo-leroy-brothers.png",
                      alt: "Leroy Brothers",
                      className: "block w-10 h-10 md:w-12 md:h-12 object-contain"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground text-left leading-none", children: "Contemporary Art Collective — Est. 1997" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4, duration: 0.8 },
                className: "text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.85] uppercase mb-12 text-left",
                style: { letterSpacing: "-0.06em" },
                children: [
                  "Leroy",
                  /* @__PURE__ */ jsx("br", {}),
                  "Brothers"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.6, duration: 0.8 },
                className: "text-lg md:text-xl text-muted-foreground max-w-2xl mb-16 leading-relaxed text-left",
                children: "Interrogating identity and digital culture through algorithms, social media, and crowdsourced data to critique and reflect online reality."
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.8, duration: 0.8 },
                className: "text-left",
                children: /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "#archive",
                    className: "btn-museum inline-flex items-center group",
                    children: [
                      /* @__PURE__ */ jsx("span", { children: "Enter The Archive" }),
                      /* @__PURE__ */ jsx(ArrowDown, { className: "w-4 h-4 transition-transform group-hover:translate-y-1" })
                    ]
                  }
                )
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1.2, duration: 0.8 },
          className: "absolute bottom-8 right-6 md:right-12",
          children: /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground writing-vertical", children: "Scroll to explore" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { id: "archive", className: "px-6 md:px-12 py-24 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-content mx-auto", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-24 md:mb-32",
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4", children: "01 — The Archive" }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight", children: "All Projects" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative", children: decades.map((decade, decadeIndex) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8 },
          className: "mb-32 md:mb-48 last:mb-0",
          children: [
            /* @__PURE__ */ jsx("div", { className: "sticky top-20 md:top-24 z-10 bg-background py-6 mb-16 md:mb-24", children: /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground uppercase tracking-[0.3em]", children: decadeIndex === 0 ? "Recent" : "Archive" }),
              /* @__PURE__ */ jsxs("h3", { className: "font-display text-7xl md:text-9xl font-black text-foreground/10 tracking-tighter", children: [
                decade,
                "s"
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 md:gap-y-32", children: projectsByDecade[decade].map((project, index) => /* @__PURE__ */ jsx(
              ProjectCard,
              {
                project,
                index
              },
              project.id
            )) })
          ]
        },
        decade
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 py-32 md:py-48 border-t border-border", children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "max-w-4xl",
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-8", children: "Collaboration" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8", children: "Let's create something together" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mb-12", children: "Interested in exhibitions, commissions, or collaborative projects? We're always exploring new territories." }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:nicolas@leroybrothers.com",
              className: "btn-museum",
              children: "Get in Touch"
            }
          )
        ]
      }
    ) }) })
  ] });
};

const $$Art = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The Archive | Leroy Brothers \u2014 All Projects", "description": "Explore the full archive of Leroy Brothers projects. Contemporary AI art, post-internet aesthetics, and digital culture since 1997." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Index", Index, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/views/Index", "client:component-export": "default" })} ` })}`;
}, "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/art.astro", void 0);

const $$file = "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/art.astro";
const $$url = "/art";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Art,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
