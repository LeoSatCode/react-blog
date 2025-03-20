import React from "react";
import { api } from "@/lib/api";
import ClientMateria from "./ClientMateria";

export interface PageProps {
  params: { id: string };
}


export async function generateStaticParams() {
  const { data } = await api.get("/news"); 
  return data.map((item: { id: string }) => ({ id: item.id }));
}


const MateriaPage = async ({ params }: PageProps) => {
  const { id } = params;

 
  const { data } = await api.get("/news", {
    params: { id: `eq.${id}`, select: "*" },
  });

  if (!data || data.length === 0) {
    return <div>Matéria não encontrada.</div>;
  }

  const article = data[0];

  return <ClientMateria article={article} articleId={id} />;
};

export default MateriaPage;
