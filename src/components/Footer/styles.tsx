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
  border-bottom: 1px solid ${(props) => props.theme.colors.black200};
  padding: 2rem 0;
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
  

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.primaryBlue};
    transition: width 0.4s;
    border-radius: 4px;
  }

  @media only screen and (max-width: 768px) {
    gap: 2rem;

    &::after {
      width: 100%;
    }
  }
`;

export const FooterContentItemTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterContentItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const FooterContentItemText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
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
  font-size: 1rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};

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

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primaryBlue};
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
  width: 3rem;
  height: 3rem;
`;

export const FooterBottomLink = styled.a`
  font-size: 1.1rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.primaryBlue};
    transition: width 0.4s;
    border-radius: 4px;
  }

  &:hover::after {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
