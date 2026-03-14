import { ImgHTMLAttributes, useMemo, useState } from "react";

type SafeImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  /** Called only when all fallbacks fail */
  onHardError?: (badSrc: string) => void;
};

const FALLBACK_ORDER = ["b", "c", "z", "h"] as const;

function withSuffix(url: string, suffix: string) {
  return url.replace(/_([a-z])\.jpg$/i, `_${suffix}.jpg`);
}

function ensureSuffix(url: string, suffix: string) {
  // If it already has a Flickr size suffix, swap it. Otherwise try adding before .jpg
  if (/_([a-z])\.jpg$/i.test(url)) return withSuffix(url, suffix);
  return url.replace(/\.jpg$/i, `_${suffix}.jpg`);
}

export default function SafeImg({ src, onHardError, ...imgProps }: SafeImgProps) {
  const [attempt, setAttempt] = useState(0);
  const [hidden, setHidden] = useState(false);

  const srcCandidates = useMemo(() => {
    const unique: string[] = [];
    for (const suf of FALLBACK_ORDER) {
      unique.push(ensureSuffix(src, suf));
    }
    if (!unique.includes(src)) unique.push(src);
    return unique;
  }, [src]);

  const currentSrc = srcCandidates[Math.min(attempt, srcCandidates.length - 1)];

  if (hidden) return null;

  return (
    <img
      {...imgProps}
      src={currentSrc}
      onError={(e) => {
        imgProps.onError?.(e);
        if (attempt < srcCandidates.length - 1) {
          setAttempt((a) => a + 1);
          return;
        }
        setHidden(true);
        onHardError?.(src);
      }}
    />
  );
}
