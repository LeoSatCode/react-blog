import React from "react";
import { api } from "@/lib/api";
import ClientTagPage from "./ClientTagPage";


export async function generateStaticParams() {
  const { data } = await api.get("/news");


  const tags = [...new Set(data.map((item) => item.tags.split(",")).flat())];
  return tags.map((tagName) => ({ tagName }));
}

const TagPage = async ({ params }) => {
  const { tagName } = params;

  const { data } = await api.get("/news", {
    params: { tags: `ilike.%${tagName}%`, select: "*", order: "date.desc" },
  });

  return <ClientTagPage tagName={tagName} articles={data} />;
};

export default TagPage;
