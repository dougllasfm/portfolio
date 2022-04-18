import Header from "../components/Header";
import Main from "../components/Main";
import Perfil from "../components/Perfil";
import { Container } from "../styles/index";

export default function Home() {
  return (
    <Container>
      <div className="header">
        <Header />
        <Perfil />
      </div>

      <Main />
    </Container>
  );
}
