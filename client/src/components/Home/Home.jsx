import React from "react";
import ViewBase from "../ViewBase/view-base";
import Carrusel from "../../components/Carrusel/Carrusel";
import CarruselPics from "../Carrusel/CarruselPics";

export default function Home() {
  return (
    <div>
      <ViewBase carousel={<CarruselPics />} carousel2={<Carrusel />} />
    </div>
  );
}
