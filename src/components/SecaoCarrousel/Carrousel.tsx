import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  CarrouselContainer,
  CarrouselImageContainer,
  CarrouselCardImage,
} from "./styles";

const animation = { duration: 4000, easing: (t: number) => t };

export const Carrousel: React.FC = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 20 },
      },
    },
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  return (
    <CarrouselContainer>
      <CarrouselImageContainer ref={sliderRef} className="keen-slider">
        <CarrouselCardImage
          className="keen-slider__slide"
          src="/images/project1.jpg"
        />
        <CarrouselCardImage
          className="keen-slider__slide"
          src="/images/project2.jpg"
        />
        <CarrouselCardImage
          className="keen-slider__slide"
          src="/images/project3.jpg"
        />
        <CarrouselCardImage
          className="keen-slider__slide"
          src="/images/project4.jpg"
        />
        <CarrouselCardImage
          className="keen-slider__slide"
          src="/images/project5.jpg"
        />
        <CarrouselCardImage
          className="keen-slider__slide"
          src="/images/project6.jpg"
        />
        <CarrouselCardImage
          className="keen-slider__slide"
          src="/images/project7.jpg"
        />
        <CarrouselCardImage
          className="keen-slider__slide"
          src="/images/project8.jpg"
        />
        <CarrouselCardImage
          className="keen-slider__slide"
          src="/images/project9.jpg"
        />
        <CarrouselCardImage
          className="keen-slider__slide"
          src="/images/project10.jpg"
        />
      </CarrouselImageContainer>
    </CarrouselContainer>
  );
};
