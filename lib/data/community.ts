export const contactLocation = {
  name: "Holy Child School",
  address: "Cape Coast, Ghana",
  mapSearchQuery: "Holy Child School, Cape Coast, Ghana",
} as const;

export const committeeMessage = {
  paragraphs: [
    "The committee-approved message will be published here once supplied by NUHOPSA.",
  ],
  attribution: "NUHOPSA Committee",
};
// TODO: Replace the placeholder with approved committee copy and attribution.

export type ClassRepresentative = {
  classYear: string;
  name: string;
  email?: string;
};

export const classRepresentatives: ClassRepresentative[] = [];
// TODO: Add verified class years and representative details supplied by NUHOPSA.
