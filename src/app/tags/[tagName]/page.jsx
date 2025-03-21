import React from "react";
import { api } from "@/lib/api";
import ClientTagPage from "./ClientTagPage";


export async function generateStaticParams() {
  const { data } = await api.get("/news");


  const tags = [...new Set(data.map((item) => item.tags.split(",")).flat())];
  return tags.map((tagName) => ({ tagName }));
}

const TagPage = async ({ params }) => {
  let { tagName } = params;

  tagName = tagName.trim().toLowerCase();

  const { data } = await api.get("/news", {
    params: { tags: `ilike.%${tagName}%`, select: "*", order: "date.desc" },
  });

  if (!data || data.length === 0) {
    return (
      <div>
        <h1>Tag not found.</h1>
      </div>
    );
  }

  return <ClientTagPage tagName={tagName} articles={data} />;
};

export default TagPage;