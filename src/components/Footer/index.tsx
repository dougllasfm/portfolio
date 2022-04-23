import {
  Container,
  GithubIcon,
  IconCopyright,
  IconsNetworks,
  InstaIcon, List, TwitterIcon
} from "./styles";

function Footer() {
  return (
    <Container>
      <h1>PORTFÓLIO</h1>
      <List>
        <li>Home</li>
        <li>Sobre</li>
        <li>Linguagens</li>
        <li>Projetos</li>
        <li>Contato</li>
      </List>
      <IconsNetworks>
        <div>
          <InstaIcon />
        </div>
        <div>
          <GithubIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
      </IconsNetworks>
      <div>
        <IconCopyright />
        <h5>2022 - Douglas Munaro. All rights reserved.</h5>
      </div>
    </Container>
  );
}

export default Footer;
