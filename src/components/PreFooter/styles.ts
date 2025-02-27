import styled from "styled-components";
export const LastImageContainer = styled.section`
  height: auto;
  min-height: 500px;
  display: flex;
  justify-content: center;
`;
export const LastImage = styled.div`
  width: 100%;
  height: 500px; /* Defina uma altura para a imagem aparecer corretamente */
  background: linear-gradient(
        to top,
        ${({ theme }) => theme.colors.black} 2%,
        transparent 30%
      ),
    url("./images/lastImage.avif");
  background-size: cover;
  background-position: center;
  box-shadow: 0 -4px 11px 1px rgba(3, 21, 91, 0.2);
`;
