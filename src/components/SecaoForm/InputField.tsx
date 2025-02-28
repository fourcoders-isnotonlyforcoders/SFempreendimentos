import React from "react";
import { NameInput, NameTitle, Bar, FormNameContainer } from "./styles";

type InputFieldProps = {
  id: string;
  label: string;
  type: "text" | "email" | "tel";
  required?: boolean;
  name: string;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  name,
  required
}) => {
  return (
    <FormNameContainer>
      <NameInput
        required={required}
        type={type}
        id={id}
        name={name}
        placeholder=" "
        data-aos="fade-left"
        data-aos-duration="500"
      />
      <NameTitle htmlFor={id} data-aos="fade-right" data-aos-duration="500">
        {label}
      </NameTitle>
      <Bar />
    </FormNameContainer>
  );
};

export default InputField;
