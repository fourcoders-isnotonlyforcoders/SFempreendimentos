import styled from "styled-components";

export const SecaoFormContainer = styled.section`
  height: auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
  padding: 1rem 0;
  width: auto;
  max-width: 70%;
  margin: 0 auto;
`;

export const FormNameContainer = styled.div`
  position: relative;
  width: auto;
  min-width: 300px;
  margin: 4rem 0 0 0;
  flex: 1 1 100%;
`;

export const FormInfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

export const NameInput = styled.input`
  font-size: 1.8rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.fourth};
  background: transparent;
  color: ${(props) => props.theme.colors.primary};

  &::placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }

  &:focus ~ label,
  &:not(&:placeholder-shown) ~ label,
  &:valid ~ label {
    top: -22px;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.primary};
  }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after {
    width: 50%;
  }
`;

export const NameTitle = styled.label`
  color: ${(props) => props.theme.colors.fourth};
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  pointer-events: none;
`;

export const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &::before,
  &::after {
    content: "";
    height: 2px;
    width: 0;
    position: absolute;
    background: ${(props) => props.theme.colors.primary};
    transition: 0.2s ease all;
  }

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
  }
`;

export const FormTextContainer = styled.div`
  margin-top: 22px;
  width: auto;
  min-width: 100%;
  textarea {
    width: 100%;
    padding: 1rem;
    font-size: 1.8rem;
    border: 2px solid ${(props) => props.theme.colors.fourth};
    border-radius: 4px;
    resize: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
  }

  textarea:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

export const FormButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.fourth};
  padding: 2rem 0;
  text-align: center;
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.fourth};
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};

    transform: scale(1.02);
  }
`;
