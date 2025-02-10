import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  CarrouselButton,
  CarrouselCard,
  CarrouselCardAuthor,
  CarrouselCardAuthorImage,
  CarrouselCardAuthorInfo,
  CarrouselCardAuthorInfoText,
  CarrouselCardAvaliation,
  CarrouselCardAvaliationText,
  CarrouselCardContainer,
  CarrouselCardStar,
  CarrouselCardStars,
  CarrouselContainer
} from "./styles";
import { useWindowDimensions } from "../../../utils/useWindowDimensions";

export const Carrousel: React.FC = () => {
  const { width } = useWindowDimensions();
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: width > 1180 ? 3 : 1,
      spacing: 30
    },
    loop: true
  });

  const handleMove = (event: React.MouseEvent, direction: "prev" | "next") => {
    event.stopPropagation();
    if (direction === "prev") {
      instanceRef.current?.prev();
    } else {
      instanceRef.current?.next();
    }
  };

  return (
    <CarrouselContainer>
      <CarrouselButton
        src={"./icons/simple-arrow-left.svg"}
        onClick={(e) => handleMove(e, "prev")}
        data-aos="fade-right"
        data-aos-duration="500"
      />
      <CarrouselCardContainer ref={sliderRef} className="keen-slider">
        {[...Array(5)].map(() => {
          return (
            <CarrouselCard className="keen-slider__slide">
              <CarrouselCardAvaliation>
                <CarrouselCardStars>
                  {[...Array(5)].map(() => (
                    <CarrouselCardStar src="./icons/star.svg" />
                  ))}
                </CarrouselCardStars>
                <CarrouselCardAvaliationText>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad
                  minim.”
                </CarrouselCardAvaliationText>
              </CarrouselCardAvaliation>
              <CarrouselCardAuthor>
                <CarrouselCardAuthorImage src="./images/logo.png" />
                <CarrouselCardAuthorInfo>
                  <CarrouselCardAuthorInfoText>
                    Victor Hugo.
                  </CarrouselCardAuthorInfoText>
                  <CarrouselCardAuthorInfoText>
                    São Paulo - SP
                  </CarrouselCardAuthorInfoText>
                </CarrouselCardAuthorInfo>
              </CarrouselCardAuthor>
            </CarrouselCard>
          );
        })}
      </CarrouselCardContainer>
      <CarrouselButton
        src={"./icons/simple-arrow-right.svg"}
        onClick={(e) => handleMove(e, "next")}
        data-aos="fade-left"
        data-aos-duration="500"
      />
    </CarrouselContainer>
  );
};
