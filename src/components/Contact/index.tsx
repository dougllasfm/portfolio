import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  Container,
  Content,
  EmailIcon,
  Form,
  LocationIcon,
  Networks,
  WhatsAppIcon
} from "./styles";

type FormProps = {
  name: string;
  email: string;
  message: string;
};

const schema = yup
  .object({
    name: yup.string().required("Informe seu nome"),
    email: yup
      .string()
      .email("Informe um email válido")
      .required("Informe um email"),
    message: yup.string().required("Escreva uma mensagem"),
  })
  .required();

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const form = useRef();

  async function onSubmit(data: FormProps) {
    try {
      emailjs.sendForm(
        "service_k7kwut6",
        "template_j5cptma",
        form.current,
        "mshXbIR1oLqBQ8MCM"
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container id="contact">
      <h1>Contato</h1>
      <Content>
        <Networks>
          <div>
            <EmailIcon />
            <h5>Email</h5>
            <span>douglasmunaro@gmail.com</span>
          </div>
          <div>
            <WhatsAppIcon />
            <h5>WhatsApp</h5>
            <span>+55 (66) 996152628</span>
            <p>
              <a
                href="https://api.whatsapp.com/send?phone=+5566996152628"
                target="_blank"
                rel="noreferrer"
              >
                Enviar mensagem
              </a>
            </p>
          </div>
          <div>
            <LocationIcon />
            <h5>Localização</h5>
            <span>Querência - Mato Grosso</span>
          </div>
        </Networks>
        <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Seu nome" {...register("name")} />
          <p>{errors.name?.message}</p>
          <input type="text" placeholder="Seu email" {...register("email")} />
          <p>{errors.email?.message}</p>
          <textarea placeholder="Mensagem" {...register("message")} />
          <p>{errors.message?.message}</p>

          <input type="submit" value="Enviar" />
        </Form>
      </Content>
    </Container>
  );
}

export default Contact;
