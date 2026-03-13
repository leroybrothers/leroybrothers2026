import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_rJqYIXTt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../../chunks/Layout_CkbTGpjW.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { a as getProjectBySlug, p as projects } from '../../../chunks/projects_DOGzUtwL.mjs';
import { ArrowLeft } from 'lucide-react';
export { renderers } from '../../../renderers.mjs';

const ProjectExplore = ({ slug: slugProp }) => {
  const slug = slugProp ?? "";
  const project = slug ? getProjectBySlug(slug) : void 0;
  if (!project) {
    return /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 pt-32 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-content mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { children: "Project not found" }),
      /* @__PURE__ */ jsx("a", { href: "/art", className: "text-muted-foreground hover:text-foreground", children: "← Back to Archive" })
    ] }) });
  }
  const yearDisplay = project.yearEnd ? `${project.year}–${project.yearEnd}` : project.year;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        className: "px-6 md:px-12 py-8",
        children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: `/project/${slug}`,
            className: "inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors group",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 transition-transform group-hover:-translate-x-1" }),
              "Back to Project"
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsx(
      motion.article,
      {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2, duration: 0.8 },
        className: "px-6 md:px-12 pb-24",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxs("header", { className: "mb-16", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 mb-8", children: [
              /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: yearDisplay }),
              /* @__PURE__ */ jsx("span", { className: "w-8 h-px bg-border" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: project.category })
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[0.95]", children: project.title }),
            /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-muted-foreground leading-relaxed", children: project.tagline })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "prose prose-lg prose-invert max-w-none", children: [
            project.exploreContent ? /* @__PURE__ */ jsx(
              "div",
              {
                className: "text-foreground/90 leading-relaxed text-lg whitespace-pre-line [&>strong]:font-bold",
                dangerouslySetInnerHTML: {
                  __html: project.exploreContent.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br />")
                }
              }
            ) : /* @__PURE__ */ jsx(Fragment, { children: project.extendedDescription ? /* @__PURE__ */ jsx("p", { className: "text-foreground/80 leading-relaxed text-lg mb-8 whitespace-pre-line", children: project.extendedDescription }) : /* @__PURE__ */ jsx("p", { className: "text-foreground/90 leading-relaxed text-xl mb-8", children: project.description }) }),
            project.quote && /* @__PURE__ */ jsxs("blockquote", { className: "my-16 pl-8 border-l-2 border-foreground not-prose", children: [
              /* @__PURE__ */ jsxs("p", { className: "font-display text-2xl md:text-3xl italic text-foreground/90 leading-relaxed mb-6", children: [
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
          ] }),
          /* @__PURE__ */ jsx("footer", { className: "mt-24 pt-12 border-t border-border", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: `/project/${slug}`,
              className: "inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors group",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 transition-transform group-hover:-translate-x-1" }),
                "View Gallery & Details"
              ]
            }
          ) })
        ] })
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
const $$Explore = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Explore;
  const { project } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${project.title} \u2014 In-Depth | Leroy Brothers`, "description": project.tagline }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectExplore", ProjectExplore, { "slug": project.slug, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/views/ProjectExplore", "client:component-export": "default" })} ` })}`;
}, "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/project/[slug]/explore.astro", void 0);

const $$file = "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/project/[slug]/explore.astro";
const $$url = "/project/[slug]/explore";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Explore,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
