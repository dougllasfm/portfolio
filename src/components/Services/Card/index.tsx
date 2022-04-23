import { Container, Content, GithubLink, List, Title } from "./styles";

type CardProps = {
  name: string;
  about: string
  techs: string[]
  github: string
};

function Card({name, about, techs, github}: CardProps) {
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
        <GithubLink href={github} target="_blank">Github</GithubLink>
      </Content>
    </Container>
  );
}

export default Card;
