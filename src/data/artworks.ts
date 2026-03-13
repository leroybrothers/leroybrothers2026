export interface ArtworkCategory {
  id: string;
  title: string;
  description: string;
  artworks: string[];
  exhibitionViews: string[];
}

export const artworkCategories: ArtworkCategory[] = [
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
      "/images/artworks/compositions/composition-10.png",
    ],
  exhibitionViews: [
      "/images/artworks/compositions/exhibition-11.jpg",
      "/images/artworks/compositions/exhibition-9.jpg",
      "/images/artworks/compositions/exhibition-14.jpg",
      "/images/artworks/compositions/exhibition-10.jpg",
      "/images/artworks/compositions/exhibition-16.jpg",
      "/images/artworks/compositions/exhibition-12.jpg",
      "/images/artworks/compositions/exhibition-15.jpg",
      "/images/artworks/compositions/exhibition-13.jpg",
    ],
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
      "/images/artworks/dissections/dissection-9.jpg",
    ],
    exhibitionViews: [
      "/images/artworks/dissections/exhibition-1.jpg",
      "/images/artworks/dissections/exhibition-2.jpg",
      "/images/artworks/compositions/exhibition-7.jpg",
      "/images/artworks/compositions/exhibition-8.jpg",
    ],
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
      "/images/artworks/msg-paintings/msg-6.jpg",
    ],
    exhibitionViews: [
      "/images/artworks/msg-paintings/exhibition-1.jpg",
      "/images/artworks/msg-paintings/exhibition-2.jpg",
      "/images/artworks/msg-paintings/exhibition-3.jpg",
      "/images/artworks/msg-paintings/exhibition-4.jpg",
      "/images/artworks/msg-paintings/exhibition-5.jpg",
    ],
  },
  {
    id: "user-portraits",
    title: "User Portraits",
    description: "Portrait studies of digital identities and online personas.",
    artworks: [
      "/images/artworks/user-portraits/portrait-1.jpg",
      "/images/artworks/user-portraits/portrait-2.jpg",
    ],
    exhibitionViews: [
      "/images/artworks/user-portraits/exhibition-1.jpg",
      "/images/artworks/user-portraits/exhibition-2.jpg",
      "/images/artworks/user-portraits/exhibition-3.jpg",
      "/images/artworks/user-portraits/exhibition-4.jpg",
    ],
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
      "/images/artworks/transfer-paintings/transfer-5.jpg",
    ],
    exhibitionViews: [
      "/images/artworks/transfer-paintings/exhibition-1.jpg",
      "/images/artworks/transfer-paintings/exhibition-2.jpg",
      "/images/artworks/compositions/exhibition-1.jpg",
      "/images/artworks/compositions/exhibition-2.jpg",
      "/images/artworks/compositions/exhibition-3.jpg",
      "/images/artworks/compositions/exhibition-4.jpg",
      "/images/artworks/compositions/exhibition-5.jpg",
      "/images/artworks/compositions/exhibition-6.jpg",
    ],
  },
  {
    id: "decompositions",
    title: "Decompositions",
    description: "Explorations of decay, entropy, and the breakdown of digital imagery.",
    artworks: [
      "/images/artworks/decompositions/decomposition-1.jpg",
      "/images/artworks/decompositions/decomposition-2.jpg",
      "/images/artworks/decompositions/decomposition-3.jpg",
      "/images/artworks/decompositions/decomposition-4.jpg",
    ],
    exhibitionViews: [
      "/images/artworks/decompositions/exhibition-1.jpg",
      "/images/artworks/decompositions/exhibition-2.jpg",
      "/images/artworks/decompositions/exhibition-3.jpg",
    ],
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
      "/images/artworks/segmentations/segmentation-6.jpg",
    ],
    exhibitionViews: [
      "/images/artworks/segmentations/exhibition-1.jpg",
    ],
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
      "/images/artworks/overlays/overlay-10.jpg",
    ],
    exhibitionViews: [],
  },
];
