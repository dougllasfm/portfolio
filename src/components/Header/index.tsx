import { Container, Content, NavBar, Panel } from "./styles";

function Header() {
  return (
    <Container id="home">
      <Content>
        <NavBar>
          <h1>Portfólio</h1>
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#techs">Linguagens</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
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
