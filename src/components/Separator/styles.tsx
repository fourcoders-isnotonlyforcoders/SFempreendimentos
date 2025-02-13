import styled from "styled-components";

export const SeparatorContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  padding: 0 10rem;
  margin: 0 auto;
  height: 0.2rem;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${({ theme }) => theme.colors.white} 50%,
    transparent 100%
  );
`;
