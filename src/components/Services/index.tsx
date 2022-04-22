import Card from "./Card";
import { Cards, Container, Content } from "./styles";

function Services() {
  return (
    <Container>
      <Content>
        <h1>Projetos</h1>
        <Cards>
          <Card
            name="App Mercado"
            about="Aplicativo que lista todos os mercados cadastrados no sistema"
            techs={["React Native", "Expo", "Typescript", "Styled-components"]}
          />
          <Card
            name="Backend Mercado"
            about="API que é alimentada pelo sistema web e fornece os dados para o app mobile"
            techs={["Nodejs", "Prisma", "Typescript", "Docker"]}
          />
          <Card
            name="Sistema Web Mercado"
            about="É o front-end para as empresas(mercados) terem o controle do sistema, podem adicionar novos produtos, ver o histórico de pedidos, e um gráfico com os dados da última semana"
            techs={["NextJS", "Typescript", "Styled-components", "React Hook Form", "React Query", "Nookies"]}
          />
          <Card
            name="Twitter Clone"
            about="Clone da interface de uma página do twitter"
            techs={["ReactJS", "Typescript", "Styled-components"]}
          />
          <Card
            name="Guiche virtual"
            about="Clone da interface do guiche virtual, layout responsivo"
            techs={["ReactJS", "Typescript", "Styled-components"]}
          />
        </Cards>
      </Content>
    </Container>
  );
}

export default Services;
