import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_rJqYIXTt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CkbTGpjW.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { I as ImageLightbox } from '../../chunks/ImageLightbox_DxPSsrUn.mjs';
import { a as getProjectBySlug, p as projects } from '../../chunks/projects_DOGzUtwL.mjs';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const ProjectDetail = ({ slug: slugProp }) => {
  const slug = slugProp ?? "";
  const project = slug ? getProjectBySlug(slug) : void 0;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  if (!project) {
    return /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 pt-32 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-content mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { children: "Project not found" }),
      /* @__PURE__ */ jsx("a", { href: "/art", className: "text-muted-foreground hover:text-foreground", children: "← Back to Archive" })
    ] }) });
  }
  const yearDisplay = project.yearEnd ? `${project.year}–${project.yearEnd}` : project.year;
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % project.images.length);
  };
  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        className: "px-6 md:px-12 py-8",
        children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/art",
            className: "inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors group",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 transition-transform group-hover:-translate-x-1" }),
              "Back to Archive"
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2, duration: 0.8 },
        className: "px-6 md:px-12 mb-16 md:mb-24",
        children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "group relative overflow-hidden cursor-pointer glitch-hover scanlines",
            onClick: () => openLightbox(0),
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.thumbnail,
                  alt: project.title,
                  className: "w-full h-auto max-h-[75vh] object-contain transition-all duration-700"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "noise-overlay" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-transparent transition-colors duration-500 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-background opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/80 px-4 py-2", children: "View Full Size" }) })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 mb-16 md:mb-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4, duration: 0.8 },
          className: "lg:col-span-8",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 mb-8", children: [
              /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: yearDisplay }),
              /* @__PURE__ */ jsx("span", { className: "w-8 h-px bg-border" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: project.category })
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[0.95]", children: project.title }),
            /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed", children: project.tagline }),
            /* @__PURE__ */ jsx("div", { className: "space-y-6 border-t border-border pt-12", children: /* @__PURE__ */ jsx("p", { className: "text-foreground/80 leading-relaxed text-lg", children: project.description }) }),
            project.quote && /* @__PURE__ */ jsxs("blockquote", { className: "mt-16 pl-8 border-l-2 border-foreground", children: [
              /* @__PURE__ */ jsxs("p", { className: "font-display text-xl md:text-2xl italic text-foreground/90 leading-relaxed mb-4", children: [
                '"',
                project.quote.text,
                '"'
              ] }),
              (project.quote.author || project.quote.source) && /* @__PURE__ */ jsxs("footer", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
                project.quote.author && /* @__PURE__ */ jsx("span", { children: project.quote.author }),
                project.quote.author && project.quote.source && /* @__PURE__ */ jsx("span", { children: " — " }),
                project.quote.source && /* @__PURE__ */ jsx("cite", { children: project.quote.source })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.6, duration: 0.8 },
          className: "lg:col-span-4",
          children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-32 space-y-8", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `/project/${slug}/explore`,
                className: "btn-museum w-full justify-center",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "In-Depth Art Statement" }),
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })
                ]
              }
            ),
            project.externalLink && /* @__PURE__ */ jsxs(
              "a",
              {
                href: project.externalLink,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "btn-museum w-full justify-center",
                children: [
                  /* @__PURE__ */ jsx("span", { children: slug === "uncanny-council" ? "Enter The Council Live" : "View Live Project" }),
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })
                ]
              }
            ),
            slug === "successful-artist" && /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://medium.com/how-to-be-a-successful-contemporary-artist-from-a",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "btn-museum w-full justify-center",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "Read the Book Here" }),
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })
                ]
              }
            )
          ] })
        }
      )
    ] }) }) }),
    project.images.length > 1 && /* @__PURE__ */ jsx(
      motion.section,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "px-6 md:px-12 py-16 md:py-24 border-t border-border",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-content mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl font-semibold", children: "Gallery" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]", children: [
              project.images.length,
              " Images"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-1", children: project.images.map((image, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: index * 0.05, duration: 0.5 },
              className: "relative overflow-hidden cursor-pointer glitch-hover",
              onClick: () => openLightbox(index),
              children: [
                /* @__PURE__ */ jsx("div", { className: "aspect-square", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: image,
                    alt: `${project.title} - Image ${index + 1}`,
                    className: "w-full h-full object-cover transition-all duration-500 hover:scale-105",
                    loading: "lazy"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "noise-overlay" })
              ]
            },
            index
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      ImageLightbox,
      {
        images: project.images,
        currentIndex: lightboxIndex,
        isOpen: lightboxOpen,
        onClose: () => setLightboxOpen(false),
        onNext: nextImage,
        onPrev: prevImage,
        title: project.title
      }
    )
  ] });
};

const $$Astro = createAstro("https://www.leroybrothers.com");
function getStaticPaths() {
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { project } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${project.title} | Leroy Brothers`, "description": project.tagline }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetail", ProjectDetail, { "slug": project.slug, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/views/ProjectDetail", "client:component-export": "default" })} ` })}`;
}, "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/project/[slug].astro", void 0);

const $$file = "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/project/[slug].astro";
const $$url = "/project/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
