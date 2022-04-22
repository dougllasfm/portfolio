import { Contact } from "styled-icons/boxicons-solid";
import About from "../components/About";
import Header from "../components/Header";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import { Container } from "../styles/index";

export default function Home() {
  return (
    <Container>
      <Header />
      <About />
      <Technologies />
      <Services />
      <Contact />
    </Container>
  );
}
