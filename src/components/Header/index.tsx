import { Container, NameAuthor } from "./styles";

function Header() {
  return (
    <Container>
      <h1>Portfólio</h1>
      <NameAuthor>
        <h1>Douglas Munaro</h1>
        <span>Full-stack developer</span>
      </NameAuthor>
    </Container>
  );
}

export default Header;
