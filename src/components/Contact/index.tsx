import {
  Container,
  Content,
  EmailIcon,
  Form,
  LocationIcon,
  Networks,
  WhatsAppIcon
} from "./styles";

function Contact() {
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
        <Form></Form>
      </Content>
    </Container>
  );
}

export default Contact;
