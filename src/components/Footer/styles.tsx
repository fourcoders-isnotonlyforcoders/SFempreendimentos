import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1350px;
  padding: 10rem 8rem 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.colors.third};
  padding: 2rem 0 4rem 0;
  margin-bottom: 4rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const FooterContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  @media only screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export const FooterContentItemTitle = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterContentItemContent = styled.div<{ rowMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    ${({ rowMobile }) => rowMobile && "flex-direction: row;"}
  }
`;

export const FooterContentItemText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 0;
  }
`;

export const FooterBottomCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterBottomCenterText = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondary};

  @media only screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const FooterIconLink = styled.a``;

export const FooterIconContato = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const FooterContatoLink = styled.a`
  cursor: pointer;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    filter: brightness(1.4);
  }
`;

export const FooterContato = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FooterBottomIconRedeSocial = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const FooterBottomLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  &:hover {
    filter: brightness(1.3);
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const SecondaryLogo = styled.img`
  width: 77px;
  height: auto;
`;
