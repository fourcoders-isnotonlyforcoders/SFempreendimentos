import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1350px;
  padding: 10rem 1rem 8rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin: 0 auto;

  @media only screen and (max-width: 1180px) {
    padding-bottom: 4rem;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 1180px) {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`;

export const FooterContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.4s;
    border-radius: 4px;
  }

  @media only screen and (max-width: 1180px) {
    gap: 4rem;

    &::after {
      width: 100%;
    }
  }
`;

export const FooterContentItemTitle = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterContentItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const FooterContentItemText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1180px) {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`;

export const FooterBottomCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterBottomCenterText = styled.p`
  font-size: 2rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterIconLink = styled.a``;

export const FooterIconContato = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const FooterContatoLink = styled.a`
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.4s;
    border-radius: 4px;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const FooterContato = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FooterBottomIconRedeSocial = styled.img`
  width: 4.4rem;
  height: 4.4rem;
`;

export const FooterBottomLink = styled.a`
  font-size: 2rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.4s;
    border-radius: 4px;
  }

  &:hover::after {
    width: 100%;
  }
`;
