import styled from "styled-components";
export const LastImageContainer = styled.section`
  height: auto;
  min-height: 500px;
  display: flex;
  justify-content: center;
  @media (max-width: 906px) {
  }
`;
export const LastImage = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(
        to top,
        ${({ theme }) => theme.colors.black} 2%,  
        transparent 30%
      ),
    url("./images/lastImage.avif");
  background-size: cover;
  background-position: center;
  box-shadow: 0 -4px 11px 1px rgba(3, 21, 91, 0.2);

  @media (max-width: 906px) {
    background: linear-gradient(
          to top,
          ${({ theme }) => theme.colors.black} 1%,  
          transparent 20%, 
          rgba(255, 255, 255, 0.22) 80%,  
          rgba(255, 255, 255, 0.77) 100%  
        ),
      url("./images/LastImageMobile.png");
    background-size: cover;
    background-position: center;
  }
`;


