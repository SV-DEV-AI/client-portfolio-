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
    category: "Broadcast Design",
    type: "visual",
    year: "2019",
    thumbnail: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2000&auto=format&fit=crop",
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
    category: "Brand Campaign",
    type: "visual",
    year: "2021",
    thumbnail: "https://images.unsplash.com/photo-1542204637-e67bc7d41e48?q=80&w=2000&auto=format&fit=crop",
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
    category: "Digital Advertising",
    type: "audio",
    year: "2022",
    thumbnail: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop",
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
    category: "Series Production",
    type: "audio",
    year: "2020",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop",
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
    category: "Motion Graphics",
    type: "visual",
    year: "2021",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
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
    category: "Brand Film",
    type: "visual",
    year: "2022",
    thumbnail: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2000&auto=format&fit=crop",
    previewVideo: "/videos/projects/placeholder.mp4",
    description: "A brand film showcasing sustainable energy solutions.",
    featured: true,
    aspectRatio: "4:3",
    gridSpan: 2,
  },
];
