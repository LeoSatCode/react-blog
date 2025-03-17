import { StaticImageData } from "next/image";

export interface SmallCardProps {
  id: string; 
  image: string | StaticImageData;
  tags: string[];
  date: string;
  title: string;
  readingTime: string;
  description: string;
}
