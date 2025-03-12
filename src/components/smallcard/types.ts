import { StaticImageData } from "next/image";

export interface SmallCardProps {
    image: string | StaticImageData; 
    tags: string[]; 
    date: string;
    title: string; 
    readingTime: string; 
    description: string;
  }
  