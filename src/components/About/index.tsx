import Image from "next/image";
import { Button, Cards, Container, Details, IconDev, IconUser, Resume } from "./styles";

function About() {
  return (
    <Container id="about">
      <h1>Sobre mim</h1>
      <Resume>
        <div className="img">
          <Image
            src="/perfil.jpg" alt="Peril" width={300} height={300}
          />
        </div>
        <Details>
          <Cards>
            <div>
              <IconDev />
              <h5>Desenvolvedor web fullstack</h5>
              <span>2 anos</span>
            </div>
            <div>
              <IconUser />
              <h5>Idade</h5>
              <span>23 anos</span>
            </div>
          </Cards>
          <span>
            Olá! Meu nome é Douglas Felipe Munaro, desenvolvedor web fullstack,
            comecei a ter contato com a programação na faculdade a partir de
            2016, atualmente estudo as novas bibliotecas e frameworks
            javascript/typescript, e crio projetos para práticar e expor meus
            conhecimentos.
          </span>
          <Button>
            <a href="#contact">Fale comigo</a>
          </Button>
        </Details>
      </Resume>
    </Container>
  );
}

export default About;
