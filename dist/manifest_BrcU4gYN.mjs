import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_rJqYIXTt.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/","adapterName":"","routes":[{"file":"file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/dist/art/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/art","isIndex":false,"type":"page","pattern":"^\\/art\\/?$","segments":[[{"content":"art","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/art.astro","pathname":"/art","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/dist/artworks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/artworks","isIndex":false,"type":"page","pattern":"^\\/artworks\\/?$","segments":[[{"content":"artworks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/artworks.astro","pathname":"/artworks","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/dist/exhibitions/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/exhibitions","isIndex":false,"type":"page","pattern":"^\\/exhibitions\\/?$","segments":[[{"content":"exhibitions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/exhibitions.astro","pathname":"/exhibitions","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.leroybrothers.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/art.astro",{"propagation":"none","containsHead":true}],["/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/artworks.astro",{"propagation":"none","containsHead":true}],["/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/exhibition/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/exhibitions.astro",{"propagation":"none","containsHead":true}],["/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/project/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/gregoryleroy/Documents/Github/leroybrothers-main/src/pages/project/[slug]/explore.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/art@_@astro":"pages/art.astro.mjs","\u0000@astro-page:src/pages/artworks@_@astro":"pages/artworks.astro.mjs","\u0000@astro-page:src/pages/exhibition/[slug]@_@astro":"pages/exhibition/_slug_.astro.mjs","\u0000@astro-page:src/pages/exhibitions@_@astro":"pages/exhibitions.astro.mjs","\u0000@astro-page:src/pages/project/[slug]/explore@_@astro":"pages/project/_slug_/explore.astro.mjs","\u0000@astro-page:src/pages/project/[slug]@_@astro":"pages/project/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BrcU4gYN.mjs","@/views/About":"_astro/About.CEIg9Pww.js","@/views/NotFound":"_astro/NotFound.BIfJHWUR.js","@/views/Artworks":"_astro/Artworks.DJ5_Rl8g.js","@/views/Exhibitions":"_astro/Exhibitions.D_O2ArEq.js","@/views/ProjectExplore":"_astro/ProjectExplore.DI78EMlL.js","@/views/ProjectDetail":"_astro/ProjectDetail.IsKLa9wX.js","@/views/ExhibitionGallery":"_astro/ExhibitionGallery.BwK73hqx.js","@/views/LandingPage":"_astro/LandingPage.CMuZFq1V.js","@/views/Index":"_astro/Index.DMwJS9-a.js","@/components/Header":"_astro/Header.vmRGYq0G.js","@/components/Footer":"_astro/Footer.C5ycGHHw.js","@/components/Providers":"_astro/Providers.DOf7Z6Zm.js","@astrojs/react/client.js":"_astro/client.DuXEJpo0.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/dist/404.html","/file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/dist/about/index.html","/file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/dist/art/index.html","/file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/dist/artworks/index.html","/file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/dist/exhibitions/index.html","/file:///Users/gregoryleroy/Documents/Github/leroybrothers-main/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"5GkPueqxataQgyL0D+JS4i/vdrfdSRS1nPQUK4cggtc=","experimentalEnvGetSecretEnabled":false});

export { manifest };
