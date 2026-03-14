import { useState } from "react";
import { artworkCategories } from "@/data/artworks";
import ImageLightbox from "@/components/ImageLightbox";

const Artworks = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const activeCategory = selectedCategory 
    ? artworkCategories.find(c => c.id === selectedCategory)
    : null;

  return (
    <>
      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-content mx-auto">
          <div className="stagger-children">
            <p className="project-label mb-4">Current Production</p>
            <h1 className="mb-6 font-display">Artworks</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Explore our body of work across different series and techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-content mx-auto">
          <div className="flex flex-wrap gap-3">
            {artworkCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
                className={`px-4 py-2 text-sm uppercase tracking-[0.1em] border transition-colors ${
                  selectedCategory === category.id
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-content mx-auto">
          {selectedCategory && activeCategory ? (
            <div key={selectedCategory} className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                  {activeCategory.title}
                </h2>
                <p className="text-muted-foreground">
                  {activeCategory.description}
                </p>
              </div>

              {/* Artworks Grid */}
              <div className="mb-12">
                <h3 className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-6">
                  Selected Works
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {activeCategory.artworks.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square relative overflow-hidden cursor-pointer group"
                      onClick={() => openLightbox(activeCategory.artworks, index)}
                    >
                      <img
                        src={image}
                        alt={`${activeCategory.title} ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Exhibition Views */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-6">
                  Exhibition Views
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.exhibitionViews.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden cursor-pointer group"
                      onClick={() => openLightbox(activeCategory.exhibitionViews, index)}
                    >
                      <img
                        src={image}
                        alt={`${activeCategory.title} Exhibition View ${index + 1}`}
                        className="w-full block group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {artworkCategories.map((category) => (
                <div
                  key={category.id}
                  className="cursor-pointer group"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="aspect-square relative overflow-hidden mb-3">
                    <img
                      src={category.artworks[0]}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1">{category.title}</h3>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)}
      />
    </>
  );
};

export default Artworks;
