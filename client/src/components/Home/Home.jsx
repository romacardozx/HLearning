import React from "react";
import ViewBase from "../ViewBase/view-base";
import Carrusel from '../../components/Carrusel/Carrusel';

export default function Home() {
  return (
    <div>
      <ViewBase
      carousel={<Carrusel />}
      />
    </div>
  );
}