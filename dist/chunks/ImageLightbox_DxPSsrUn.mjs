import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useMemo, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const FALLBACK_ORDER = ["b", "c", "z", "h"];
function withSuffix(url, suffix) {
  return url.replace(/_([a-z])\.jpg$/i, `_${suffix}.jpg`);
}
function ensureSuffix(url, suffix) {
  if (/_([a-z])\.jpg$/i.test(url)) return withSuffix(url, suffix);
  return url.replace(/\.jpg$/i, `_${suffix}.jpg`);
}
function SafeImg({ src, onHardError, ...imgProps }) {
  const [attempt, setAttempt] = useState(0);
  const [hidden, setHidden] = useState(false);
  const srcCandidates = useMemo(() => {
    const unique = [];
    for (const suf of FALLBACK_ORDER) {
      unique.push(ensureSuffix(src, suf));
    }
    if (!unique.includes(src)) unique.push(src);
    return unique;
  }, [src]);
  const currentSrc = srcCandidates[Math.min(attempt, srcCandidates.length - 1)];
  if (hidden) return null;
  return /* @__PURE__ */ jsx(
    "img",
    {
      ...imgProps,
      src: currentSrc,
      onError: (e) => {
        imgProps.onError?.(e);
        if (attempt < srcCandidates.length - 1) {
          setAttempt((a) => a + 1);
          return;
        }
        setHidden(true);
        onHardError?.(src);
      }
    }
  );
}

const ImageLightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  title
}) => {
  const [hidden, setHidden] = useState(false);
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrev();
          break;
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown, isOpen]);
  useEffect(() => {
    setHidden(false);
  }, [currentIndex, isOpen]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] bg-foreground/95 animate-fade-in", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "absolute top-6 right-6 z-10 p-2 text-background hover:opacity-70 transition-opacity",
        "aria-label": "Close lightbox",
        children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6" })
      }
    ),
    images.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onPrev,
          className: "absolute left-6 top-1/2 -translate-y-1/2 z-10 p-2 text-background hover:opacity-70 transition-opacity",
          "aria-label": "Previous image",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-8 h-8" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onNext,
          className: "absolute right-6 top-1/2 -translate-y-1/2 z-10 p-2 text-background hover:opacity-70 transition-opacity",
          "aria-label": "Next image",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-8 h-8" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-full h-full p-16", children: !hidden && /* @__PURE__ */ jsx(
      SafeImg,
      {
        src: images[currentIndex],
        alt: title ? `${title} - Image ${currentIndex + 1}` : `Image ${currentIndex + 1}`,
        className: "max-w-full max-h-full object-contain animate-fade-in",
        onHardError: () => setHidden(true)
      }
    ) }),
    images.length > 1 && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-background text-sm tracking-[0.2em]", children: [
      currentIndex + 1,
      " / ",
      images.length
    ] })
  ] });
};

export { ImageLightbox as I, SafeImg as S };
