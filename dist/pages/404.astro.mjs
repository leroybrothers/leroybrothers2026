import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_rJqYIXTt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CkbTGpjW.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { ArrowLeft } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const NotFound = () => {
  return /* @__PURE__ */ jsx("section", { className: "min-h-[70vh] flex items-center justify-center px-6 md:px-12", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-xl", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-8xl md:text-9xl font-bold text-muted-foreground/20 mb-8", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-semibold mb-4", children: "Page Not Found" }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "/",
        className: "btn-museum inline-flex items-center",
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Projects"
        ]
      }
    )
  ] }) });
};

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found | Leroy Brothers", "description": "The page you're looking for doesn't exist or has been moved." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NotFound", NotFound, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/views/NotFound", "client:component-export": "default" })} ` })}`;
}, "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/404.astro", void 0);

const $$file = "/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
