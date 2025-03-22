import React, { useState } from "react";
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
  CarrouselContainer,
  CarrouselContentContainer,
  CarrouselNavigation,
  CarrouselNavigationButton,
} from "./styles";
import { useWindowDimensions } from "../../../utils/useWindowDimensions";
import { DEPOIMENTOS } from "../../constants/depoimentos";

export const Carrousel: React.FC = () => {
  const { width } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rendered, setRendered] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: width > 1180 ? 3 : 1,
      spacing: 30,
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setRendered(true);
    },
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
      <CarrouselContentContainer>
        <CarrouselButton
          src={"./icons/simple-arrow-left.svg"}
          onClick={(e) => handleMove(e, "prev")}
          data-aos="fade-right"
          data-aos-duration="500"
        />
        <CarrouselCardContainer ref={sliderRef} className="keen-slider">
          {DEPOIMENTOS.map(({description, image, locale, name, stars}, index) => (
              <CarrouselCard className="keen-slider__slide" key={index}>
              <CarrouselCardAvaliation>
                <CarrouselCardStars>
                  {[...Array(stars)].map(() => (
                    <CarrouselCardStar src="./icons/star.svg" />
                  ))}
                </CarrouselCardStars>
                <CarrouselCardAvaliationText>
                  “{description}”
                </CarrouselCardAvaliationText>
              </CarrouselCardAvaliation>
              <CarrouselCardAuthor>
                <CarrouselCardAuthorImage src={image} />
                <CarrouselCardAuthorInfo>
                  <CarrouselCardAuthorInfoText>
                    {name}
                  </CarrouselCardAuthorInfoText>
                  <CarrouselCardAuthorInfoText>
                    {locale}
                  </CarrouselCardAuthorInfoText>
                </CarrouselCardAuthorInfo>
              </CarrouselCardAuthor>
            </CarrouselCard>
            )
          )}
        </CarrouselCardContainer>
        <CarrouselButton
          src={"./icons/simple-arrow-right.svg"}
          onClick={(e) => handleMove(e, "next")}
          data-aos="fade-left"
          data-aos-duration="500"
        />
      </CarrouselContentContainer>
      {rendered && instanceRef.current && (
        <CarrouselNavigation>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <CarrouselNavigationButton
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                active={currentSlide === idx}
              ></CarrouselNavigationButton>
            );
          })}
        </CarrouselNavigation>
      )}
    </CarrouselContainer>
  );
};
