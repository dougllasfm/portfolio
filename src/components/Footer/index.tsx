import {
  Container,
  GithubIcon,
  IconsNetworks,
  InstaIcon,
  List,
  TwitterIcon
} from "./styles";

function Footer() {
  return (
    <Container>
      <h1>
        <a href="#home">PORTFÓLIO</a>
      </h1>
      <List>
        <li>
          <a href="#home">Home</a>
        </li>
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
      </List>
      <IconsNetworks>
        <div>
          <a href="https://www.instagram.com/dougllasfm/" target="_blank" rel="noreferrer">
            <InstaIcon />
          </a>
        </div>
        <div>
          <a href="https://github.com/dougllasfm" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/douglass_fm" target="_blank" rel="noreferrer" >
            <TwitterIcon />
          </a>
        </div>
      </IconsNetworks>
      <div>
        <h5>&copy; 2022 - Douglas Munaro. All rights reserved.</h5>
      </div>
    </Container>
  );
}

export default Footer;
