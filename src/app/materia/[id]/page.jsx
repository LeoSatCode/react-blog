import React from "react";
import { api } from "@/lib/api";
import ClientMateria from "./ClientMateria";

export async function generateStaticParams() {
  const { data } = await api.get("/news");

  return data.map((item) => ({ id: item.id }));
}

const MateriaPage = async ({ params }) => {
  const { id } = params;

  try {

    const { data } = await api.get("/news", {
      params: { id: `eq.${id}`, select: "*" },
    });

    if (!data || data.length === 0) {
      return <div>Content not found.</div>;
    }

    const article = data[0]; 

    return <ClientMateria article={article} articleId={id} />;
  } catch (error) {
    console.error(error);
    return <div>Error loading matter.</div>;
  }
};

export default MateriaPage;
