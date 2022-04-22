import { Container, Content, List, Title } from "./styles";

type CardProps = {
  name: string;
  about: string
  techs: string[]
};

function Card({name, about, techs}: CardProps) {
  return (
    <Container>
      <Title>
        <h1>{name}</h1>
      </Title>
      <Content>
        <span>
          {about}
        </span>
        <h2>Tecnologias utilizadas</h2>
        <List>
          {techs.map(element => {
            return (
              <li key={element}>{element}</li>
            )
          })}
        </List>
      </Content>
    </Container>
  );
}

export default Card;
