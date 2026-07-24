export type ProjectType = "visual" | "audio";
export type AspectRatio = "16:9" | "4:3" | "1:1" | "9:16";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  type: ProjectType;
  year: string;
  thumbnail: string;
  previewVideo: string;
  description: string;
  featured: boolean;
  aspectRatio: AspectRatio;
  gridSpan: 1 | 2;
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Zee Media Launch",
    client: "Zee Media Corporation",
    category: "Broadcast",
    type: "visual",
    year: "2019",
    thumbnail: "/images/client-library/IMG_20181115_173126.jpg",
    previewVideo: "/videos/projects/placeholder.mp4",
    description: "Complete channel packaging and graphics launch for 12 Zee Media channels.",
    featured: true,
    aspectRatio: "16:9",
    gridSpan: 2,
  },
  {
    id: "p2",
    title: "Kriza Emergency Bulb",
    client: "Jaquar",
    category: "Commercials",
    type: "visual",
    year: "2021",
    thumbnail: "/images/client-library/IMG_20181115_200821.jpg",
    previewVideo: "/videos/projects/placeholder.mp4",
    description: "A comprehensive advertising campaign highlighting Jaquar's innovative lighting solution.",
    featured: true,
    aspectRatio: "4:3",
    gridSpan: 1,
  },
  {
    id: "p3",
    title: "Cetaphil Digital",
    client: "Cetaphil",
    category: "Commercials",
    type: "audio",
    year: "2022",
    thumbnail: "/images/client-library/IMG_20181115_203319.jpg",
    previewVideo: "/videos/projects/placeholder.mp4",
    description: "Engaging digital advertisements targeting the Indian skincare market.",
    featured: true,
    aspectRatio: "1:1",
    gridSpan: 1,
  },
  {
    id: "p4",
    title: "Women of Substance",
    client: "WOS",
    category: "Broadcast",
    type: "audio",
    year: "2020",
    thumbnail: "/images/client-library/IMG_20181115_210302_HDR.jpg",
    previewVideo: "/videos/projects/placeholder.mp4",
    description: "A series of promos and webisodes featuring inspiring women like Supercar Blondie and Reem Al Marzouqi.",
    featured: true,
    aspectRatio: "9:16",
    gridSpan: 1,
  },
  {
    id: "p5",
    title: "Provider Contracting",
    client: "Newgen",
    category: "Live Events",
    type: "visual",
    year: "2021",
    thumbnail: "/images/client-library/IMG_20181117_122246.jpg",
    previewVideo: "/videos/projects/placeholder.mp4",
    description: "A dynamic brand film and motion graphics explaining complex provider contracting solutions.",
    featured: true,
    aspectRatio: "16:9",
    gridSpan: 1,
  },
  {
    id: "p6",
    title: "PV Port",
    client: "GIZ",
    category: "Commercials",
    type: "visual",
    year: "2022",
    thumbnail: "/images/client-library/IMG_20181117_122256.jpg",
    previewVideo: "/videos/projects/placeholder.mp4",
    description: "A brand film showcasing sustainable energy solutions.",
    featured: true,
    aspectRatio: "4:3",
    gridSpan: 2,
  },
];
