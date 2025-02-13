import styled from "styled-components";

export const SecaoDuvidasBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

export const SecaoDuvidasContainer = styled.div`
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin: 0 auto;
  padding: 10rem 8rem;
`;

export const AccordionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AccordionTitleContainer = styled.div`
  width: 50%;
  height: 38rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccordionTitle = styled.h3`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const AccordionContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export const AccordionCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -moz-user-drag: none;
  -khtml-user-drag: none;
  -webkit-user-drag: none;
  user-drag: none;
`;

export const AccordionCardTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const AccordionCardIcon = styled.img<{ active: boolean }>`
  width: 2rem;
  height: 2rem;
  transform: rotate(${({ active }) => (active ? "-180deg" : "0")});
  transition: transform 0.4s;
  margin-left: 2rem;
`;

export const AccordionCardPreviewContainer = styled.div`
  z-index: 100;
  padding: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

export const AccordionCardContent = styled.div<{ active: boolean }>`
  opacity: ${({ active }) => (active ? "1" : "0")};
  height: ${({ active }) => (active ? "auto" : "0")};
  font-size: 1.5rem;
  font-weight: 400;

  padding: 0 3rem ${({ active }) => (active ? "3rem" : 0)};
  transition: 0.5s linear ${({ active }) => (active ? "" : ", opacity 0s")};
`;
