import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_rJqYIXTt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CkbTGpjW.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { e as exhibitions } from '../chunks/exhibitions_CmAPDT4N.mjs';
import { useState } from 'react';
import { S as SafeImg, I as ImageLightbox } from '../chunks/ImageLightbox_DxPSsrUn.mjs';
import { ArrowRight } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const Exhibitions = () => {
  const [selectedExhibition, setSelectedExhibition] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const exhibitionsByYear = exhibitions.reduce((acc, exhibition) => {
    const year = exhibition.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(exhibition);
    return acc;
  }, {});
  const years = Object.keys(exhibitionsByYear).sort((a, b) => parseInt(b) - parseInt(a));
  const openLightbox = (exhibition, index) => {
    setSelectedExhibition(exhibition);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  const handleNext = () => {
    if (selectedExhibition) {
      setCurrentIndex((prev) => (prev + 1) % selectedExhibition.images.length);
    }
  };
  const handlePrev = () => {
    if (selectedExhibition) {
      setCurrentIndex((prev) => prev === 0 ? selectedExhibition.images.length - 1 : prev - 1);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "stagger-children", children: [
      /* @__PURE__ */ jsx("p", { className: "project-label mb-4", children: "Archive" }),
      /* @__PURE__ */ jsx("h1", { className: "mb-6", children: "Exhibitions" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed", children: "A visual archive of solo and group exhibitions around the world." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 pb-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: years.map((year) => /* @__PURE__ */ jsxs("div", { className: "mb-20 last:mb-0", children: [
      /* @__PURE__ */ jsx("div", { className: "sticky top-20 md:top-24 z-10 bg-background/95 backdrop-blur-sm py-4 mb-8 border-b border-border", children: /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl font-bold text-muted-foreground/30 tracking-tight", children: year }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-16", children: exhibitionsByYear[year].map((exhibition) => /* @__PURE__ */ jsxs("article", { className: "group", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-semibold", children: exhibition.title }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `/exhibition/${exhibition.slug}`,
                className: "flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors shrink-0",
                children: [
                  "View more photos",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
                ]
              }
            )
          ] }),
          exhibition.location && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: exhibition.location })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-3", children: exhibition.images.slice(0, 7).map((image, index) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => openLightbox(exhibition, index),
            className: "aspect-square overflow-hidden cursor-pointer group/img",
            children: /* @__PURE__ */ jsx(
              SafeImg,
              {
                src: image,
                alt: `${exhibition.title} - Image ${index + 1}`,
                className: "w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105",
                loading: "lazy"
              }
            )
          },
          `${exhibition.id}-${index}`
        )) })
      ] }, exhibition.id)) })
    ] }, year)) }) }),
    selectedExhibition && /* @__PURE__ */ jsx(
      ImageLightbox,
      {
        images: selectedExhibition.images,
        currentIndex,
        isOpen: lightboxOpen,
        onClose: () => setLightboxOpen(false),
        onNext: handleNext,
        onPrev: handlePrev,
        title: selectedExhibition.title
      }
    )
  ] });
};

const $$Exhibitions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The Ledger | Leroy Brothers \u2014 Exhibitions & NFTs", "description": "A visual archive of Leroy Brothers exhibitions. Solo and group shows around the world since 1997." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Exhibitions", Exhibitions, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/views/Exhibitions", "client:component-export": "default" })} ` })}`;
}, "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/exhibitions.astro", void 0);

const $$file = "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/exhibitions.astro";
const $$url = "/exhibitions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Exhibitions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
