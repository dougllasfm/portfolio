import Card from "./Card";
import { Cards, Container, Content } from "./styles";

function Services() {
  return (
    <Container id="projects">
      <Content>
        <h1>Projetos</h1>
        <Cards>
          <Card
            name="App Mercado"
            about="Aplicativo que lista todos os mercados cadastrados no sistema"
            techs={["React Native", "Expo", "Typescript", "Styled-components"]}
            github="https://github.com/dougllasfm/app-mobile-market"
          />
          <Card
            name="Backend Mercado"
            about="API que é alimentada pelo sistema web e fornece os dados para o app mobile"
            techs={["Nodejs", "Prisma", "Typescript", "Docker"]}
            github="https://github.com/dougllasfm/backend-market"
          />
          <Card
            name="Sistema Web Mercado"
            about="É o front-end para as empresas(mercados) terem o controle do sistema, podem adicionar novos produtos, ver o histórico de pedidos, e um gráfico com os dados da última semana"
            techs={["NextJS", "Typescript", "Styled-components", "React Hook Form", "React Query", "Nookies"]}
            github="https://github.com/dougllasfm/dashboard-market"
          />
          <Card
            name="Twitter Clone"
            about="Clone da interface de uma página do twitter"
            techs={["ReactJS", "Typescript", "Styled-components"]}
            github="https://github.com/dougllasfm/twitter-clone"
          />
          <Card
            name="Guiche virtual"
            about="Clone da interface do guiche virtual, layout responsivo"
            techs={["ReactJS", "Typescript", "Styled-components"]}
            github="https://github.com/dougllasfm/guiche-virtual"
          />
        </Cards>
      </Content>
    </Container>
  );
}

export default Services;
