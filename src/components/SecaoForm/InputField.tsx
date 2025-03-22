import React from "react";
import { NameInput, FormNameContainer } from "./styles";

type InputFieldProps = {
  id: string;
  label: string;
  type: "text" | "email" | "tel";
  required?: boolean;
  name: string;
  placeholder: string;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  name,
  required, 
  placeholder
}) => {
  return (
    <FormNameContainer>
      <NameInput
        required={required}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        data-aos="fade-left"
        data-aos-duration="500"
      />
    </FormNameContainer>
  );
};

export default InputField;
