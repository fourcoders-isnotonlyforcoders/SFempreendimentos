import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { CarrouselCard, CarrouselContainer } from "./styles";

export const Carrousel: React.FC = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    },
    loop: true
  });

  return (
    <>
      <div
        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
      >
        Antes
      </div>
      <CarrouselContainer ref={sliderRef} className="keen-slider">
        {[...Array(5)].map((_, index) => {
          return (
            <CarrouselCard className="keen-slider__slide">
              <h1>{index + 1}</h1>
            </CarrouselCard>
          );
        })}
      </CarrouselContainer>
      <div
        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
      >
        Depois
      </div>
    </>
  );
};
