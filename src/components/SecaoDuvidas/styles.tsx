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
  gap: 6rem;
  margin: 0 auto;
  padding: 10rem 8rem;
`;

export const AccordionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AccordionTitleContainer = styled.div`
  width: 50%;
  height: 70rem;
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

export const AccordionCard = styled.div<{ active: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3rem;
  width: 100%;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  height: ${({ active }) => (active ? "200px" : "fit-content")};

  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -moz-user-drag: none;
  -khtml-user-drag: none;
  -webkit-user-drag: none;
  user-drag: none;
`;

export const AccordionCardIcon = styled.img<{ active: boolean }>`
  width: 2rem;
  height: 2rem;
  transform: rotate(${({ active }) => (active ? "90deg" : "-90deg")});
`;
