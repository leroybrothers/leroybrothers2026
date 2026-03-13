import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_rJqYIXTt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CkbTGpjW.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const About = () => {
  const timelineRef = useRef(null);
  const timelineEvents = [
    { year: "1997", title: "Formation", description: "Leroy Brothers collective founded in Belgium" },
    { year: "2003", title: "MySpace Era", description: "Pioneering social media portraiture" },
    { year: "2006", title: "Artmann Gallery", description: "Outsourced painters, prêt-à-crocher collections" },
    { year: "2010", title: "Axel King", description: "Cult of the superstar — art created with crowdsourced creativity" },
    { year: "2013", title: "Witness Your World", description: "Crowdsourced art creation as collective awareness" },
    { year: "2016", title: "Witness My Face", description: "Interactive installation at Pukkelpop — short-lived celebrity as participation" },
    { year: "2021", title: "NFT Collection", description: "Entering blockchain art space" },
    { year: "2023", title: "Arora Vale", description: "AI artist collaboration begins" },
    { year: "2025", title: "Present", description: "Mechanisms of art in an AI-driven society" }
  ];
  const soloExhibitions = [
    { year: "2024", title: "Presenting Arora Vale", venue: "Toile Blanche Contemporary, Saint-Paul de Vence" },
    { year: "2021", title: "Segmented Realities", venue: "IFA Gallery, Brussels" },
    { year: "2020", title: "Be Part of Art", venue: "VINCI, Brussels" },
    { year: "2019", title: "Variations on an Existing Theme", venue: "Lightroom 35, Ghent" },
    { year: "2016", title: "Witness My Face", venue: "Pukkelpop Music Festival, Kiewit" },
    { year: "2016", title: "The Aesthetics of Coding", venue: "Podgorny Robinson Gallery, Saint-Paul de Vence" },
    { year: "2016", title: "We all have at least one meaningful Picture or Thought to share", venue: "Podgorny Robinson Gallery, Paris" },
    { year: "2016", title: "Coding as Social & Creative Inception", venue: "IFA Gallery, Brussels" },
    { year: "2015", title: "Witness Your World: Testimonies of the Network Users", venue: "Spazio Bogogno, Milan" },
    { year: "2014", title: "Dissections in the Cloud", venue: "Mia&D Singapore with Shtager Gallery" },
    { year: "2014", title: "Witness Your World: Extracts from our picture & message culture", venue: "At The Gallery, Antwerp" },
    { year: "2013", title: "Witness Your World for Mumiy Troll – part 3", venue: "Lazarev Foundation, Saint Petersburg" },
    { year: "2013", title: "Witness Your World for Mumiy Troll – part 2", venue: "MMOMA Moscow Museum of Modern Art" },
    { year: "2013", title: "Windows to the World", venue: "Guy Pieters Gallery, Saint-Paul de Vence" },
    { year: "2013", title: "Witness Your World for Mumiy Troll – part 1", venue: "ArtEtazh Museum of Modern Art, Vladivostok" },
    { year: "2012", title: "Portraitures of Accidental Human Relationships", venue: "acb Galeria, Budapest" },
    { year: "2012", title: "Leroy Brothers Summer Show", venue: "Galerie St Paul Art Moderne, Saint-Paul de Vence" },
    { year: "2011", title: "Symbiotic Cloud Intelligence: BDRTist", venue: "Art Beijing" },
    { year: "2011", title: "How to be a Successful Contemporary Artist from A to Z", venue: "Art Labor Gallery, Shanghai" },
    { year: "2008", title: "The user as creativity source", venue: "W3 Art Center, Vlissingen" },
    { year: "2006", title: "Artmann paintings by Gorki frontman, Luc De Vos", venue: "Artmann Gallery, Ghent" },
    { year: "2005", title: "Artmann Painting Collection", venue: "Artmann Gallery, Ghent" },
    { year: "2004", title: "MySpace User Portraits", venue: "VanRam Gallery, Ghent" },
    { year: "2002", title: "Carte Blanche", venue: "CIAC, Carros" }
  ];
  const groupExhibitions = [
    { year: "2017", title: "Ghost", venue: "STUK Leuven" },
    { year: "2017", title: "Celibataire Divas", venue: "Herkenrode Refuge, Hasselt" },
    { year: "2017", title: "On The Go (not comparable)", venue: "Zaal 29, MAart KunstRoute" },
    { year: "2017", title: "S-T-ARTS: Innovation at the nexus of Science, Technology & Arts", venue: "DG Connect (European Commission), Brussels" },
    { year: "2017", title: "If I disappear", venue: "IFA Gallery, Brussels" },
    { year: "2017", title: "Ghost", venue: "Recyclart Art Center, Brussels" },
    { year: "2017", title: "Jacobus", venue: "Church of Saint Jacobs, Ghent" },
    { year: "2016", title: "Identity as a TM", venue: "City Triennale Hasselt" },
    { year: "2016", title: "Teleportation", venue: "Art Labor Gallery, Shanghai" },
    { year: "2015", title: "The Wrong: New Digital Art Biennale", venue: "Homeostasis Lab Pavillon" },
    { year: "2015", title: "3 Generations of Belgian artists: Paul Delvaux / Wim Delvoye / Leroy Brothers", venue: "At The Gallery, Antwerp" },
    { year: "2012", title: "A Neverending Mess", venue: "Art Labor Gallery, Shanghai" },
    { year: "2011", title: "This could be your show!", venue: "ShContemporary (Hot Spot), Shanghai" },
    { year: "2011", title: "The best of 5 Years Art Labor", venue: "Art Labor Gallery, Shanghai" },
    { year: "2010", title: "Lernaean Strouthion: extraction from Axel King", venue: "World Expo, Jing An Sculpture Park, Shanghai" },
    { year: "2010", title: "Outsourced painting production from Dafen", venue: "Don Gallery, Shanghai" },
    { year: "2008", title: "Update II: New Media Art Award: Axel King", venue: "Liedts-Meesen Foundation, Ghent" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 py-24 md:py-40", children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8", children: [
            /* @__PURE__ */ jsx("p", { className: "project-label mb-4", children: "About" }),
            /* @__PURE__ */ jsx("h1", { className: "mb-6", children: "The Collective" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-8", children: "Questioning the Mechanics of Art" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-2xl", children: "Leroy Brothers have spent over two decades interrogating the systems that construct artistic value and identity in the contemporary art world." })
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3, duration: 0.8 },
              className: "lg:col-span-4",
              children: /* @__PURE__ */ jsxs("div", { className: "aspect-[3/4] overflow-hidden glitch-hover", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/images/leroy-brothers-portrait.jpg",
                    alt: "Leroy Brothers",
                    className: "w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "noise-overlay" })
              ] })
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-16 md:py-24 border-y border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-content mx-auto px-6 md:px-12 mb-12", children: [
        /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4", children: "Timeline" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold", children: "1997 — Present" })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: timelineRef,
          className: "flex gap-1 overflow-x-auto pb-8 px-6 md:px-12 snap-x snap-mandatory scrollbar-hide",
          style: { scrollbarWidth: "none", msOverflowStyle: "none" },
          children: timelineEvents.map((event, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: index * 0.1, duration: 0.5 },
              className: "flex-shrink-0 w-64 md:w-80 snap-start border border-border p-6 md:p-8 hover:bg-secondary/50 transition-colors duration-500",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-mono text-3xl md:text-4xl font-bold text-foreground/20 block mb-4", children: event.year }),
                /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: event.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: event.description })
              ]
            },
            event.year
          ))
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto px-6 md:px-12 mt-4", children: /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-muted-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }),
        "Scroll to explore"
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 py-24 md:py-40", children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "lg:col-span-7 space-y-8",
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Biography" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-foreground/80 leading-relaxed text-lg", children: [
              /* @__PURE__ */ jsx("p", { children: "Working at the intersection of conceptual art, digital culture, and institutional critique, the Leroy Brothers have spent over two decades interrogating the systems that construct artistic value and identity in the contemporary art world." }),
              /* @__PURE__ */ jsx("p", { children: "Their practice spans painting, installation, performance, and digital media, often creating elaborate fictions—fictional artists, fictional brands, fictional worlds—that reveal the underlying mechanisms of the art market and celebrity culture." }),
              /* @__PURE__ */ jsx("p", { children: "Notable projects include the MySpace Portrait Paintings (2003-2006), which documented the birth of social media self-presentation; Witness Your World (2013-2015), a series of interactive installations transforming social media into collaborative artworks; and Axel King (2010), a fictional artist persona that operated within real art world contexts." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.2, duration: 0.8 },
          className: "lg:col-span-5",
          children: /* @__PURE__ */ jsxs("div", { className: "border border-foreground p-8 md:p-12", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-6", children: "Philosophy" }),
            /* @__PURE__ */ jsx("blockquote", { className: "font-display text-xl md:text-2xl italic leading-relaxed mb-6", children: '"We are interested in the space between authenticity and construction, where identity becomes performance and commerce becomes critique."' }),
            /* @__PURE__ */ jsx("footer", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "— Leroy Brothers" })
          ] })
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 py-24 md:py-32 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-content mx-auto", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4", children: "Selected Exhibitions" }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold", children: "Solo Shows" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-0", children: soloExhibitions.map((exhibition, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.02, duration: 0.5 },
          className: "grid grid-cols-12 gap-4 py-6 border-b border-border hover:bg-secondary/30 transition-colors duration-300 px-4 -mx-4",
          children: [
            /* @__PURE__ */ jsx("span", { className: "col-span-2 md:col-span-1 font-mono text-sm text-muted-foreground", children: exhibition.year }),
            /* @__PURE__ */ jsx("div", { className: "col-span-10 md:col-span-5", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: exhibition.title }) }),
            /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-6 md:text-right", children: /* @__PURE__ */ jsx("h3", { className: "font-display text-base md:text-lg font-medium", children: exhibition.venue }) })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 py-24 md:py-32 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-content mx-auto", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          children: /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold", children: "Group Shows" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-0", children: groupExhibitions.map((exhibition, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.02, duration: 0.5 },
          className: "grid grid-cols-12 gap-4 py-6 border-b border-border hover:bg-secondary/30 transition-colors duration-300 px-4 -mx-4",
          children: [
            /* @__PURE__ */ jsx("span", { className: "col-span-2 md:col-span-1 font-mono text-sm text-muted-foreground", children: exhibition.year }),
            /* @__PURE__ */ jsx("div", { className: "col-span-10 md:col-span-5", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: exhibition.title }) }),
            /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-6 md:text-right", children: /* @__PURE__ */ jsx("h3", { className: "font-display text-base md:text-lg font-medium", children: exhibition.venue }) })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 py-32 md:py-48 bg-foreground text-background", children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-background/50 block mb-6", children: "Press & Inquiries" }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold mb-6", children: "Get in Touch" }),
            /* @__PURE__ */ jsx("p", { className: "text-background/60 mb-8", children: "For press materials, exhibition inquiries, and collaboration proposals." }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "mailto:nicolas@leroybrothers.com",
                className: "inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] border border-background px-8 py-4 hover:bg-background hover:text-foreground transition-all duration-500",
                children: [
                  "Contact Studio",
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-background/50 block mb-6", children: "Representation" }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold mb-4", children: "Toile Blanche Contemporary" }),
            /* @__PURE__ */ jsx("p", { className: "text-background/60 mb-6", children: "Saint-Paul de Vence, France" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://www.toileblanchecontemporary.com/artists/29-leroy-brothers/works/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 font-mono text-sm text-background/80 hover:text-background transition-colors",
                children: [
                  "View Available Works",
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })
                ]
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
};

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The Collective | Leroy Brothers \u2014 About Us", "description": "Leroy Brothers: Belgian contemporary art collective interrogating identity, technology, and the mechanisms of the art world since 1997." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "About", About, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/views/About", "client:component-export": "default" })} ` })}`;
}, "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/about.astro", void 0);

const $$file = "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
