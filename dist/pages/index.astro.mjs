import { b as createAstro, c as createComponent, d as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_rJqYIXTt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.leroybrothers.com");
const $$LandingLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LandingLayout;
  const { title = "Leroy Brothers | Toile Blanche", description = "Toile Blanche is the intersection of creativity and soulful hospitality, created by Leroy Brothers." } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site ?? "https://www.leroybrothers.com");
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/layouts/LandingLayout.astro", void 0);

const LandingPage = () => {
  const destinations = [{
    title: "Leroy Brothers",
    description: "Explore the latest art projects, international exhibitions, and digital innovations from the three brothers.",
    buttonText: "Explore the Art",
    href: "/art",
    isExternal: false
  }, {
    title: "Toile Blanche",
    description: "The Artistic Escape to Saint-Paul-de-Vence. Experience the boutique hotel and restaurant where the Leroy Brothers' aesthetic comes to life through soulful hospitality.",
    buttonText: "Book Your Stay",
    href: "https://www.toileblanche.com",
    isExternal: true
  }, {
    title: "TB Contemporary",
    description: "The Art Experience The bridge between the two. Discover the on-site art space, curated exhibitions and sculpture park. The artistic soul that defines the Toile Blanche estate.",
    buttonText: "Discover the Art Space",
    href: "https://www.toileblanchecontemporary.com",
    isExternal: true
  }];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsx("section", { className: "flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto w-full", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8
      }, className: "mb-12 md:mb-16", children: /* @__PURE__ */ jsx("img", { src: "/images/logo-leroy-brothers.png", alt: "Leroy Brothers", className: "w-12 h-12 md:w-16 md:h-16 object-contain" }) }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 40
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.2,
        duration: 0.8
      }, className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32", children: destinations.map((destination, index) => /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.3 + index * 0.1,
        duration: 0.6
      }, className: "group", children: /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold mb-4 tracking-tight uppercase", children: destination.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-8 min-h-[120px] font-serif", children: destination.description }),
        destination.isExternal ? /* @__PURE__ */ jsxs("a", { href: destination.href, target: "_blank", rel: "noopener noreferrer", className: "btn-museum inline-flex items-center group/btn", children: [
          /* @__PURE__ */ jsx("span", { className: "font-serif", children: destination.buttonText }),
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover/btn:translate-x-1" })
        ] }) : /* @__PURE__ */ jsxs("a", { href: destination.href, className: "btn-museum inline-flex items-center group/btn", children: [
          /* @__PURE__ */ jsx("span", { className: "font-serif", children: destination.buttonText }),
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover/btn:translate-x-1" })
        ] })
      ] }) }, destination.title)) }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 40
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.5,
        duration: 0.8
      }, children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl lg:text-6xl leading-tight tracking-tight mb-8 max-w-5xl md:text-lg font-thin", children: "Toile Blanche is the intersection of creativity and soulful hospitality, created by Leroy Brothers." }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed font-serif", children: "More than a destination, it is a living artistic concept where guests and art lovers engage in an immersive dialogue with contemporary art. Set within a legendary Mediterranean retreat, every encounter is designed to inspire, blending the avant-garde spirit of the artists with the timeless ease of Saint-Paul-de-Vence." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "px-6 md:px-12 lg:px-24 py-8 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Leroy Brothers"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Saint-Paul-de-Vence, France" })
    ] }) })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "title": "Leroy Brothers | Toile Blanche \u2014 Art, Hospitality & Contemporary Experience", "description": "Toile Blanche is the intersection of creativity and soulful hospitality, created by Leroy Brothers. Saint-Paul-de-Vence, France." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingPage", LandingPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/views/LandingPage", "client:component-export": "default" })} ` })}`;
}, "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/index.astro", void 0);

const $$file = "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
