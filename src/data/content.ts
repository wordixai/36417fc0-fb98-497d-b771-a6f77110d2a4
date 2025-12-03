export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  description: string;
  coverImage: string;
  images: string[];
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  coverImage: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Minimal House",
    category: "Residential",
    location: "Los Angeles, CA",
    year: "2024",
    area: "280 m²",
    description: "A contemporary single-family residence that explores the relationship between indoor and outdoor spaces through careful material selection and spatial organization.",
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop"
    ],
    tags: ["Architecture", "Residential", "Modern"]
  },
  {
    id: "2",
    title: "Urban Office",
    category: "Commercial",
    location: "New York, NY",
    year: "2024",
    area: "1,200 m²",
    description: "A flexible workspace designed to accommodate evolving work patterns while maintaining visual clarity and functional efficiency.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&auto=format&fit=crop"
    ],
    tags: ["Architecture", "Commercial", "Workspace"]
  },
  {
    id: "3",
    title: "Gallery Space",
    category: "Cultural",
    location: "San Francisco, CA",
    year: "2023",
    area: "450 m²",
    description: "An adaptable exhibition space where architecture recedes to foreground the art while maintaining spatial character.",
    coverImage: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&auto=format&fit=crop"
    ],
    tags: ["Architecture", "Cultural", "Exhibition"]
  },
  {
    id: "4",
    title: "Courtyard Residence",
    category: "Residential",
    location: "Austin, TX",
    year: "2023",
    area: "350 m²",
    description: "A private residence organized around a central courtyard that mediates between public and private zones.",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&auto=format&fit=crop"
    ],
    tags: ["Architecture", "Residential", "Courtyard"]
  },
  {
    id: "5",
    title: "Restaurant Interior",
    category: "Interior",
    location: "Miami, FL",
    year: "2023",
    area: "180 m²",
    description: "A dining environment that balances intimacy with openness through strategic lighting and material choices.",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop"
    ],
    tags: ["Interior", "Hospitality", "Restaurant"]
  },
  {
    id: "6",
    title: "Loft Conversion",
    category: "Interior",
    location: "Brooklyn, NY",
    year: "2022",
    area: "120 m²",
    description: "Transformation of an industrial loft into a contemporary living space while preserving its original character.",
    coverImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&auto=format&fit=crop"
    ],
    tags: ["Interior", "Residential", "Conversion"]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Material Honesty in Contemporary Practice",
    category: "Design Philosophy",
    date: "2024-01-15",
    readTime: "5 min read",
    excerpt: "Exploring how authentic material expression shapes spatial experience and informs our design decisions.",
    content: "Material honesty has become a guiding principle in our practice...",
    coverImage: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?w=1200&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Urban Density and Human Scale",
    category: "Urban Design",
    date: "2023-12-10",
    readTime: "7 min read",
    excerpt: "Balancing the demands of urban density with the need for spaces that respond to human proportions.",
    content: "As cities continue to grow, architects face the challenge...",
    coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Adaptive Reuse: A Case Study",
    category: "Case Studies",
    date: "2023-11-22",
    readTime: "6 min read",
    excerpt: "How we transformed a 1920s warehouse into a contemporary cultural venue while respecting its industrial heritage.",
    content: "The challenge of adaptive reuse lies in finding the balance...",
    coverImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Light as a Design Tool",
    category: "Design Philosophy",
    date: "2023-10-08",
    readTime: "4 min read",
    excerpt: "Natural light shapes our perception of space. We examine strategies for harnessing daylight in residential projects.",
    content: "Light is the most fundamental element in architecture...",
    coverImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&auto=format&fit=crop"
  }
];
