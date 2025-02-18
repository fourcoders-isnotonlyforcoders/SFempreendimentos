import React from "react";
import { TituloSecao } from "../TituloSecao";
import {
  FormContainer,
  SecaoFormContainer,
  FormInfosContainer,
  FormNameContainer,
  FormTextContainer,
  FormButton,
  PrimarySelect,
  SelectsContainer,
  Option
} from "./styles";
import InputField from "./InputField";

export const SecaoForm: React.FC = () => {
  return (
    <SecaoFormContainer>
      <TituloSecao
        titulo="Vamos concretizar seu próximo grande projeto ?"
        preTitulo="CONTATO"
        align="center"
        color="white"
      />
      <FormContainer>
        <FormNameContainer>
          <InputField
            id="fullName"
            label="Nome Completo"
            type="text"
            required
          />
        </FormNameContainer>
        <FormInfosContainer>
          <InputField id="email" label="Email" type="email" required />
          <InputField id="phone" label="Telefone" type="tel" required />
        </FormInfosContainer>
        <SelectsContainer>
          <PrimarySelect id="select-id" defaultValue="1">
            <Option value="1" disabled>
              Serviço Desejado
            </Option>{" "}
            {/* Desabilita o primeiro valor */}
            <Option value="2">Projetos Personalizados</Option>
            <Option value="3">Reformas e Ampliações</Option>
            <Option value="4">Construção</Option>
            <Option value="5">Manutenções</Option>
            <Option value="6">Demolição</Option>
          </PrimarySelect>
        </SelectsContainer>

        <FormTextContainer data-aos="fade-up-left" data-aos-duration="500">
          <textarea
            id="additionalInfo"
            placeholder="Descreva brevemente sobre seu projeto:"
            rows={11}
          />
        </FormTextContainer>
        <FormButton type="submit" data-aos="fade-right" data-aos-duration="500">
        Solicite seu Orçamento
        </FormButton>
      </FormContainer>
    </SecaoFormContainer>
  );
};
