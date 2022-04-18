import { Container, NavBar, Picture } from './styles';

function Perfil() {
  return (
    <Container>
      <NavBar>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </NavBar>
      <Picture>
        <img src="/picture.jpeg" alt="" />
      </Picture>
    </Container>
  );
};

export default Perfil;
