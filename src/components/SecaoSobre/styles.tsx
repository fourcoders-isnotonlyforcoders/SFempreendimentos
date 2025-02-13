import styled from "styled-components";

export const SobreContainer = styled.div`
  width: 100%;
  max-width: 1350px;
  height: auto;
  min-height: 420px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
  padding: 10rem 8rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 0 3rem;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const SobreLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 11px;
  width: auto;
  max-width: 50%;
  height: auto;
  min-height: 500px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    min-height: 400px;
  }
`;

export const SobreParagraph = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  padding: 1rem 2rem 1rem 0;
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
    font-size: 16px;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SobreButton = styled.button`
  border: 1px solid grey;
  border-radius: 25px;
  height: 65px;
  width: 65%;
  text-align: center;
  color: ${(props) => props.theme.colors.third};
  font-size: 2.2rem;
  font-weight: bold;
  cursor: pointer;
  margin: 15px auto;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    opacity: 0.8;
    border: none;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    width: 80%;
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    width: 100%;
  }
`;

export const SobreCenter = styled.div`
  width: 3px;
  height: 450px;
  background: linear-gradient(
    to top,
    transparent 0%,
    ${(props) => props.theme.colors.primaryBlue} 50%,
    transparent 100%
  );
  animation: pulse 3s ease-in-out infinite;

  @keyframes pulse {
    0% {
      height: 200px;
    }
    25% {
      height: 250px;
    }
    50% {
      height: 300px;
    }
    75% {
      height: 350px;
    }
    100% {
      height: 400px;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
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
    margin-top: 20px;
  }
`;

export const SobreImg = styled.img`
  height: auto;
  max-height: 470px;
  width: auto;
  cursor: zoom-in;
  border-radius: 12px;
  transition: transform 0.3s ease;
  transition: box-shadow 0.3s ease, filter 0.3s ease, opacity 0.5s,
    transform 0.5s !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    filter: brightness(1.1);
  }

  @media (max-width: 1024px) {
    margin-top: 2rem;
    max-height: 400px;
  }

  @media (max-width: 480px) {
    max-height: 300px;
    width: 100%;
  }
`;
