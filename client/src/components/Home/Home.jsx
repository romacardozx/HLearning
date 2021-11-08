import React from "react";
import ViewBase from "../ViewBase/view-base";
import Carousel from "../Carousel/Carousel";
import CoursesTop from "./CoursesTop";
import CarouselStep from "../Carousel/CarouselStep";

export default function Home() {
  return (
    <div>
      <ViewBase
        carousel={<Carousel />}
        courses={<CoursesTop />}
        steps={<CarouselStep />}
      />
    </div>
  );
}
