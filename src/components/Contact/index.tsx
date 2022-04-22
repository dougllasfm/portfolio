import { yupResolver } from '@hookform/resolvers/yup';
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
  name: string
  email: string
  message: string
}

const schema = yup.object({
  name: yup.string().required("Informe seu nome"),
  email: yup.string().email("Informe um email válido").required("Informe um email"),
  message: yup.string().required("Escreva uma mensagem"),
}).required();

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: FormProps) {
    try {
      console.log(data)
    } catch (error) {}
  }

  return (
    <Container>
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
          </div>
          <div>
            <LocationIcon />
            <h5>Localização</h5>
            <span>Querência - Mato Grosso</span>
          </div>
        </Networks>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Seu nome"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
          <input
            type="text"
            placeholder="Seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <textarea
            placeholder="Mensagem"
            {...register("message")}
          />
          <p>{errors.message?.message}</p>

          <input
            type="submit"
            value="Enviar"
          />
        </Form>
      </Content>
    </Container>
  );
}

export default Contact;
