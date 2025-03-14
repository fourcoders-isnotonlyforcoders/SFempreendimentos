import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  CarrouselContainer,
  CarrouselImageContainer,
  CarrouselCardImage
} from "./styles";
import { PORTIFOLIO } from "../../constants/portifolio";

const animation = { duration: 40000, easing: (t: number) => t };

export const Carrousel: React.FC = () => {
  const numberOfCards = PORTIFOLIO.length;
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
      s.moveToIdx(numberOfCards - 1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + numberOfCards - 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + numberOfCards - 1, true, animation);
    }
  });

  return (
    <CarrouselContainer>
      <CarrouselImageContainer ref={sliderRef} className="keen-slider">
        {PORTIFOLIO.map(({ src }, index) => (
          <CarrouselCardImage
            key={index}
            className="keen-slider__slide"
            src={src}
          />
        ))}
      </CarrouselImageContainer>
    </CarrouselContainer>
  );
};
