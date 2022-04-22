import About from "../components/About";
import Contact from "../components/Contact";
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
