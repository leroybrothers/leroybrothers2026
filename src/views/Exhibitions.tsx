import { exhibitions, Exhibition } from "@/data/exhibitions";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { ArrowRight } from "lucide-react";
import SafeImg from "@/components/SafeImg";

const Exhibitions = () => {
  const [selectedExhibition, setSelectedExhibition] = useState<Exhibition | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Group exhibitions by year
  const exhibitionsByYear = exhibitions.reduce((acc, exhibition) => {
    const year = exhibition.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(exhibition);
    return acc;
  }, {} as Record<string, Exhibition[]>);

  const years = Object.keys(exhibitionsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  const openLightbox = (exhibition: Exhibition, index: number) => {
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
      setCurrentIndex((prev) => (prev === 0 ? selectedExhibition.images.length - 1 : prev - 1));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-content mx-auto">
          <div className="stagger-children">
            <p className="project-label mb-4">Archive</p>
            <h1 className="mb-6">Exhibitions</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A visual archive of solo and group exhibitions around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibitions Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-content mx-auto">
          {years.map((year) => (
            <div key={year} className="mb-20 last:mb-0">
              {/* Year Header */}
              <div className="sticky top-20 md:top-24 z-10 bg-background/95 backdrop-blur-sm py-4 mb-8 border-b border-border">
                <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground/30 tracking-tight">{year}</h2>
              </div>

              {/* Exhibitions for this year */}
              <div className="space-y-16">
                {exhibitionsByYear[year].map((exhibition) => (
                  <article key={exhibition.id} className="group">
                    {/* Exhibition Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-2xl md:text-3xl font-semibold">{exhibition.title}</h3>
                        <a
                          href={`/exhibition/${exhibition.slug}`}
                          className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors shrink-0"
                        >
                          View more photos
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                      {exhibition.location && <p className="text-muted-foreground">{exhibition.location}</p>}
                    </div>

                    {/* Image Grid - 7 images */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-3">
                      {exhibition.images.slice(0, 7).map((image, index) => (
                        <button
                          key={`${exhibition.id}-${index}`}
                          onClick={() => openLightbox(exhibition, index)}
                          className="aspect-square overflow-hidden cursor-pointer group/img"
                        >
                          <SafeImg
                            src={image}
                            alt={`${exhibition.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedExhibition && (
        <ImageLightbox
          images={selectedExhibition.images}
          currentIndex={currentIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
          title={selectedExhibition.title}
        />
      )}
    </>
  );
};

export default Exhibitions;
