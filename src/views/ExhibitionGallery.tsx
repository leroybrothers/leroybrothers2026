import { exhibitions } from "@/data/exhibitions";
import { useMemo, useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { ArrowLeft, ExternalLink } from "lucide-react";
import SafeImg from "@/components/SafeImg";

interface ExhibitionGalleryProps {
  slug?: string;
}

const ExhibitionGallery = ({ slug: slugProp }: ExhibitionGalleryProps) => {
  const slug = slugProp ?? "";
  const exhibition = exhibitions.find((e) => e.slug === slug);

  const initialImages = useMemo(() => exhibition?.images ?? [], [exhibition?.images]);
  const [images, setImages] = useState<string[]>(initialImages);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!exhibition) {
    return (
      <section className="px-6 md:px-12 pt-32 pb-16">
        <div className="max-w-content mx-auto">
          <h1>Exhibition not found</h1>
          <a href="/exhibitions" className="text-muted-foreground hover:text-foreground">
            ← Back to Exhibitions
          </a>
        </div>
      </section>
    );
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const removeBroken = (badSrc: string) => {
    setImages((prev) => {
      const next = prev.filter((s) => s !== badSrc);
      // Clamp index if we removed images before/at current
      setCurrentIndex((idx) => Math.min(idx, Math.max(0, next.length - 1)));
      if (next.length === 0) setLightboxOpen(false);
      return next;
    });
  };

  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-12 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-content mx-auto">
          <a
            href="/exhibitions"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Exhibitions
          </a>

          <div className="stagger-children">
            <p className="project-label mb-4">{exhibition.year}</p>
            <h1 className="mb-4">{exhibition.title}</h1>
            {exhibition.location && <p className="text-lg text-muted-foreground">{exhibition.location}</p>}
            {exhibition.flickrAlbumUrl && (
              <a
                href={exhibition.flickrAlbumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-medium mt-6 px-4 py-2 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 group"
              >
                Explore full album →
                <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((image, index) => (
              <button
                key={image}
                onClick={() => openLightbox(index)}
                className="aspect-square overflow-hidden cursor-pointer group"
              >
                <SafeImg
                  src={image}
                  alt={`${exhibition.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onHardError={removeBroken}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
        title={exhibition.title}
      />
    </>
  );
};

export default ExhibitionGallery;
