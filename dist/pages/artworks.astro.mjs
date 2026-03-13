import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_rJqYIXTt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CkbTGpjW.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { I as ImageLightbox } from '../chunks/ImageLightbox_DxPSsrUn.mjs';
export { renderers } from '../renderers.mjs';

const artworkCategories = [
  {
    id: "compositions",
    title: "Compositions",
    description: "Mixed media compositions exploring digital culture and contemporary society.",
    artworks: [
      "/images/artworks/compositions/composition-1.png",
      "/images/artworks/compositions/composition-2.png",
      "/images/artworks/compositions/composition-3.png",
      "/images/artworks/compositions/composition-4.png",
      "/images/artworks/compositions/composition-5.png",
      "/images/artworks/compositions/composition-6.png",
      "/images/artworks/compositions/composition-7.png",
      "/images/artworks/compositions/composition-8.png",
      "/images/artworks/compositions/composition-9.png",
      "/images/artworks/compositions/composition-10.png"
    ],
    exhibitionViews: [
      "/images/artworks/compositions/exhibition-11.jpg",
      "/images/artworks/compositions/exhibition-9.jpg",
      "/images/artworks/compositions/exhibition-14.jpg",
      "/images/artworks/compositions/exhibition-10.jpg",
      "/images/artworks/compositions/exhibition-16.jpg",
      "/images/artworks/compositions/exhibition-12.jpg",
      "/images/artworks/compositions/exhibition-15.jpg",
      "/images/artworks/compositions/exhibition-13.jpg"
    ]
  },
  {
    id: "dissections",
    title: "Dissections",
    description: "Analytical deconstructions of imagery and visual language.",
    artworks: [
      "/images/artworks/dissections/dissection-1.jpg",
      "/images/artworks/dissections/dissection-2.jpg",
      "/images/artworks/dissections/dissection-3.jpg",
      "/images/artworks/dissections/dissection-4.jpg",
      "/images/artworks/dissections/dissection-5.jpg",
      "/images/artworks/dissections/dissection-6.jpg",
      "/images/artworks/dissections/dissection-7.jpg",
      "/images/artworks/dissections/dissection-8.jpg",
      "/images/artworks/dissections/dissection-9.jpg"
    ],
    exhibitionViews: [
      "/images/artworks/dissections/exhibition-1.jpg",
      "/images/artworks/dissections/exhibition-2.jpg",
      "/images/artworks/compositions/exhibition-7.jpg",
      "/images/artworks/compositions/exhibition-8.jpg"
    ]
  },
  {
    id: "msg-paintings",
    title: "MSG Paintings",
    description: "Paintings inspired by digital messaging culture and online communication.",
    artworks: [
      "/images/artworks/msg-paintings/msg-1.jpg",
      "/images/artworks/msg-paintings/msg-2.jpg",
      "/images/artworks/msg-paintings/msg-3.jpg",
      "/images/artworks/msg-paintings/msg-4.jpg",
      "/images/artworks/msg-paintings/msg-5.jpg",
      "/images/artworks/msg-paintings/msg-6.jpg"
    ],
    exhibitionViews: [
      "/images/artworks/msg-paintings/exhibition-1.jpg",
      "/images/artworks/msg-paintings/exhibition-2.jpg",
      "/images/artworks/msg-paintings/exhibition-3.jpg",
      "/images/artworks/msg-paintings/exhibition-4.jpg",
      "/images/artworks/msg-paintings/exhibition-5.jpg"
    ]
  },
  {
    id: "user-portraits",
    title: "User Portraits",
    description: "Portrait studies of digital identities and online personas.",
    artworks: [
      "/images/artworks/user-portraits/portrait-1.jpg",
      "/images/artworks/user-portraits/portrait-2.jpg"
    ],
    exhibitionViews: [
      "/images/artworks/user-portraits/exhibition-1.jpg",
      "/images/artworks/user-portraits/exhibition-2.jpg",
      "/images/artworks/user-portraits/exhibition-3.jpg",
      "/images/artworks/user-portraits/exhibition-4.jpg"
    ]
  },
  {
    id: "transfer-paintings",
    title: "Transfer Paintings",
    description: "Works exploring the transfer of imagery between media and contexts.",
    artworks: [
      "/images/artworks/transfer-paintings/transfer-1.jpg",
      "/images/artworks/transfer-paintings/transfer-2.jpg",
      "/images/artworks/transfer-paintings/transfer-3.jpg",
      "/images/artworks/transfer-paintings/transfer-4.jpg",
      "/images/artworks/transfer-paintings/transfer-5.jpg"
    ],
    exhibitionViews: [
      "/images/artworks/transfer-paintings/exhibition-1.jpg",
      "/images/artworks/transfer-paintings/exhibition-2.jpg",
      "/images/artworks/compositions/exhibition-1.jpg",
      "/images/artworks/compositions/exhibition-2.jpg",
      "/images/artworks/compositions/exhibition-3.jpg",
      "/images/artworks/compositions/exhibition-4.jpg",
      "/images/artworks/compositions/exhibition-5.jpg",
      "/images/artworks/compositions/exhibition-6.jpg"
    ]
  },
  {
    id: "decompositions",
    title: "Decompositions",
    description: "Explorations of decay, entropy, and the breakdown of digital imagery.",
    artworks: [
      "/images/artworks/decompositions/decomposition-1.jpg",
      "/images/artworks/decompositions/decomposition-2.jpg",
      "/images/artworks/decompositions/decomposition-3.jpg",
      "/images/artworks/decompositions/decomposition-4.jpg"
    ],
    exhibitionViews: [
      "/images/artworks/decompositions/exhibition-1.jpg",
      "/images/artworks/decompositions/exhibition-2.jpg",
      "/images/artworks/decompositions/exhibition-3.jpg"
    ]
  },
  {
    id: "segmentations",
    title: "Segmentations",
    description: "Fragmented realities exploring the boundaries between digital and physical perception.",
    artworks: [
      "/images/artworks/segmentations/segmentation-1.jpg",
      "/images/artworks/segmentations/segmentation-2.jpg",
      "/images/artworks/segmentations/segmentation-3.jpg",
      "/images/artworks/segmentations/segmentation-4.jpg",
      "/images/artworks/segmentations/segmentation-5.jpg",
      "/images/artworks/segmentations/segmentation-6.jpg"
    ],
    exhibitionViews: [
      "/images/artworks/segmentations/exhibition-1.jpg"
    ]
  },
  {
    id: "overlays",
    title: "Overlays",
    description: "Layered visual narratives blending multiple realities, texts, and found imagery into cohesive compositions.",
    artworks: [
      "/images/artworks/overlays/overlay-1.jpg",
      "/images/artworks/overlays/overlay-2.jpg",
      "/images/artworks/overlays/overlay-3.jpg",
      "/images/artworks/overlays/overlay-4.jpg",
      "/images/artworks/overlays/overlay-5.jpg",
      "/images/artworks/overlays/overlay-6.jpg",
      "/images/artworks/overlays/overlay-7.jpg",
      "/images/artworks/overlays/overlay-8.jpg",
      "/images/artworks/overlays/overlay-9.jpg",
      "/images/artworks/overlays/overlay-10.jpg"
    ],
    exhibitionViews: []
  }
];

const Artworks = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  const activeCategory = selectedCategory ? artworkCategories.find((c) => c.id === selectedCategory) : null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "stagger-children", children: [
      /* @__PURE__ */ jsx("p", { className: "project-label mb-4", children: "Current Production" }),
      /* @__PURE__ */ jsx("h1", { className: "mb-6 font-display", children: "Artworks" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed", children: "Explore our body of work across different series and techniques." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 pb-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: artworkCategories.map((category) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setSelectedCategory(
          selectedCategory === category.id ? null : category.id
        ),
        className: `px-4 py-2 text-sm uppercase tracking-[0.1em] border transition-colors ${selectedCategory === category.id ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"}`,
        children: category.title
      },
      category.id
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 pb-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-content mx-auto", children: selectedCategory && activeCategory ? /* @__PURE__ */ jsxs("div", { className: "animate-fade-in", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-semibold mb-3", children: activeCategory.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: activeCategory.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm uppercase tracking-[0.15em] text-muted-foreground mb-6", children: "Selected Works" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3", children: activeCategory.artworks.map((image, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "aspect-square relative overflow-hidden cursor-pointer group",
            onClick: () => openLightbox(activeCategory.artworks, index),
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: image,
                alt: `${activeCategory.title} ${index + 1}`,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                loading: "lazy"
              }
            )
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm uppercase tracking-[0.15em] text-muted-foreground mb-6", children: "Exhibition Views" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: activeCategory.exhibitionViews.map((image, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "overflow-hidden cursor-pointer group",
            onClick: () => openLightbox(activeCategory.exhibitionViews, index),
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: image,
                alt: `${activeCategory.title} Exhibition View ${index + 1}`,
                className: "w-full block group-hover:scale-105 transition-transform duration-500",
                loading: "lazy"
              }
            )
          },
          index
        )) })
      ] })
    ] }, selectedCategory) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: artworkCategories.map((category) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "cursor-pointer group",
        onClick: () => setSelectedCategory(category.id),
        children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-square relative overflow-hidden mb-3", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: category.artworks[0],
              alt: category.title,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
              loading: "lazy"
            }
          ) }),
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-wide mb-1", children: category.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: category.description })
        ]
      },
      category.id
    )) }) }) }),
    /* @__PURE__ */ jsx(
      ImageLightbox,
      {
        images: lightboxImages,
        currentIndex: lightboxIndex,
        isOpen: lightboxOpen,
        onClose: () => setLightboxOpen(false),
        onNext: () => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length),
        onPrev: () => setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)
      }
    )
  ] });
};

const $$Artworks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The Machine | Leroy Brothers \u2014 Artworks & Algorithms", "description": "Explore artworks and algorithmic creations by Leroy Brothers. AI art, digital media, and contemporary practice." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Artworks", Artworks, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/views/Artworks", "client:component-export": "default" })} ` })}`;
}, "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/artworks.astro", void 0);

const $$file = "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/artworks.astro";
const $$url = "/artworks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Artworks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
