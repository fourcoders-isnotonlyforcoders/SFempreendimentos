import styled from "styled-components";

export const SobreContainer = styled.div`
  width: 100%;
  max-width: 1350px;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  gap: 4rem;
  align-items: center;
  padding: 10rem 8rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 0 2rem;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    height: auto;
  }
`;

export const SobreLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: auto;
  max-width: 50%;
  height: auto;
  min-height: 500px;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    min-height: 400px;
    padding: 0.5rem;
  }
`;

export const SobreParagraph = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 25px;
  padding: 1rem 0;
  margin: 0;
  text-align: left;
  color: ${(props) => props.theme.colors.secondary};
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  filter: brightness(0.9);
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    filter: brightness(1.5);
    text-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    font-size: 1.9rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;
export const SobreRight = styled.div`
  width: auto;
  height: auto;
  max-width: 50%;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    min-width: 80%;
    object-fit: cover;
  }
`;

export const SobreImg = styled.img`
  height: auto;
  max-height: 470px;
  width: auto;
  cursor: inherit;
  border-radius: 11px;
  transition: transform 0.3s ease;
  transition: box-shadow 0.3s ease, filter 0.3s ease, opacity 0.5s,
    transform 0.5s !important;
  box-shadow: 0 7px 10px 7px rgba(0, 18, 85, 0.11);

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    filter: brightness(1.1);
  }

  @media (max-width: 1024px) {
    max-height: 400px;
  }

  @media (max-width: 480px) {
    max-height: 350px;
    width: 100%;
  }
`;
