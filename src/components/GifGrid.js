import React from "react";
import { useFecthGift } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFecthGift(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <span className="card animate__animated animate__tada">Loading..</span>
      )}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
