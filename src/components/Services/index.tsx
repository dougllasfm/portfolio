import Card from "./Card";
import { Cards, Container, Content } from "./styles";

function Services() {
  return (
    <Container>
      <Content>
        <h1>Projetos</h1>
        <Cards>
          <Card />
          <Card />
          <Card />
        </Cards>
      </Content>
    </Container>
  );
}

export default Services;
