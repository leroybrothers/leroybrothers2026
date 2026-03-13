import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_rJqYIXTt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CkbTGpjW.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { e as exhibitions } from '../../chunks/exhibitions_CmAPDT4N.mjs';
import { useMemo, useState } from 'react';
import { S as SafeImg, I as ImageLightbox } from '../../chunks/ImageLightbox_DxPSsrUn.mjs';
import { ArrowLeft, ExternalLink } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const ExhibitionGallery = ({ slug: slugProp }) => {
  const slug = slugProp ?? "";
  const exhibition = exhibitions.find((e) => e.slug === slug);
  const initialImages = useMemo(() => exhibition?.images ?? [], [exhibition?.images]);
  const [images, setImages] = useState(initialImages);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!exhibition) {
    return /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 pt-32 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-content mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { children: "Exhibition not found" }),
      /* @__PURE__ */ jsx("a", { href: "/exhibitions", className: "text-muted-foreground hover:text-foreground", children: "← Back to Exhibitions" })
    ] }) });
  }
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
  };
  const removeBroken = (badSrc) => {
    setImages((prev) => {
      const next = prev.filter((s) => s !== badSrc);
      setCurrentIndex((idx) => Math.min(idx, Math.max(0, next.length - 1)));
      if (next.length === 0) setLightboxOpen(false);
      return next;
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 pt-32 pb-12 md:pt-40 md:pb-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-content mx-auto", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/exhibitions",
          className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors mb-8",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Back to Exhibitions"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "stagger-children", children: [
        /* @__PURE__ */ jsx("p", { className: "project-label mb-4", children: exhibition.year }),
        /* @__PURE__ */ jsx("h1", { className: "mb-4", children: exhibition.title }),
        exhibition.location && /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: exhibition.location }),
        exhibition.flickrAlbumUrl && /* @__PURE__ */ jsxs(
          "a",
          {
            href: exhibition.flickrAlbumUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-3 text-sm font-medium mt-6 px-4 py-2 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 group",
            children: [
              "Explore full album →",
              /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 group-hover:rotate-12 transition-transform" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 pb-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4", children: images.map((image, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => openLightbox(index),
        className: "aspect-square overflow-hidden cursor-pointer group",
        children: /* @__PURE__ */ jsx(
          SafeImg,
          {
            src: image,
            alt: `${exhibition.title} - Image ${index + 1}`,
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
            loading: "lazy",
            onHardError: removeBroken
          }
        )
      },
      image
    )) }) }) }),
    /* @__PURE__ */ jsx(
      ImageLightbox,
      {
        images,
        currentIndex,
        isOpen: lightboxOpen,
        onClose: () => setLightboxOpen(false),
        onNext: handleNext,
        onPrev: handlePrev,
        title: exhibition.title
      }
    )
  ] });
};

const $$Astro = createAstro("https://www.leroybrothers.com");
function getStaticPaths() {
  return exhibitions.map((exhibition) => ({
    params: { slug: exhibition.slug },
    props: { exhibition }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { exhibition } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${exhibition.title} | Leroy Brothers`, "description": exhibition.location ? `${exhibition.title} \u2014 ${exhibition.location}` : exhibition.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ExhibitionGallery", ExhibitionGallery, { "slug": exhibition.slug, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/views/ExhibitionGallery", "client:component-export": "default" })} ` })}`;
}, "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/exhibition/[slug].astro", void 0);

const $$file = "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/exhibition/[slug].astro";
const $$url = "/exhibition/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
