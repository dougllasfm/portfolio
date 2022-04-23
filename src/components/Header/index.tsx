import { Container, Content, NavBar, Panel } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <NavBar>
          <h1>Portfólio</h1>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Linguagens</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </NavBar>
        <Panel>
          <div>
            <h1>Douglas Munaro</h1>
            <h5>Fullstack Developer</h5>
            <span>ashashushaushaushaushaushaushaushauhsua</span>
            <a href="#contact">Contato</a>
          </div>
          <img src="picture.jpeg" alt="" />
        </Panel>
      </Content>
    </Container>
  );
}

export default Header;
