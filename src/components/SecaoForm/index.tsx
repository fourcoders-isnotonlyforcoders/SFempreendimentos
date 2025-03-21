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
  Option,
  SecaoContainer,
  FormImage
} from "./styles";
import InputField from "./InputField";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const SecaoForm: React.FC = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(serviceId);
    event.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, event.currentTarget, {
        publicKey: publicKey
      })
      .then(
        () => {
          toast.success("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.log(error);
          toast.error("Ocorreu um erro ao enviar a mensagem.");
        }
      );
    event.currentTarget.reset();
  };
  return (
    <SecaoFormContainer>
      <TituloSecao
        titulo="Vamos concretizar seu próximo grande projeto ?"
        preTitulo="CONTATO"
        align="center"
        color="white"
        id="contato"
      />
      <SecaoContainer>
        <FormImage
          src="./images/FormImage.avif"
          data-aos="fade-right"
          data-aos-duration="500"
        >
        </FormImage>
        <FormContainer 
          onSubmit={handleSubmit}  
          data-aos="fade-left"
          data-aos-duration="500"
          >
          <FormNameContainer>
            <InputField
              id="nome"
              label="Nome Completo"
              type="text"
              name="nome"
              required
            />
          </FormNameContainer>
          <FormInfosContainer>
            <InputField
              id="email"
              label="Email"
              type="email"
              name="email"
              required
            />
            <InputField
              id="telefone"
              label="Telefone"
              type="tel"
              name="telefone"
              required
            />
          </FormInfosContainer>
          <SelectsContainer>
            <PrimarySelect id="servico" name="servico" defaultValue="1">
              <Option value="Serviço não selecionado" disabled>
                Serviço Desejado
              </Option>{" "}
              {/* Desabilita o primeiro valor */}
              <Option value="Projetos Personalizados">
                Projetos Personalizados
              </Option>
              <Option value="Reformas e Ampliações">Reformas e Ampliações</Option>
              <Option value="Construção">Construção</Option>
              <Option value="Manutenções">Manutenções</Option>
              <Option value="Demolição">Demolição</Option>
            </PrimarySelect>
          </SelectsContainer>

          <FormTextContainer data-aos="fade-up-left" data-aos-duration="500">
            <textarea
              id="additionalInfo"
              placeholder="Descreva brevemente sobre seu projeto:"
              name="descricao"
              rows={11}
            />
          </FormTextContainer>
          <FormButton type="submit" data-aos="fade-right" data-aos-duration="500">
            Solicite seu Orçamento
          </FormButton>
        </FormContainer>
      </SecaoContainer>
    </SecaoFormContainer>
  );
};
