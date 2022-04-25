import Image from "next/image";
import { Button, Cards, Container, Details, Resume } from "./styles";

function About() {
  return (
    <Container id="about">
      <h1>Sobre mim</h1>
      <Resume>
        <div className="img">
          <Image
            src="/picture.jpeg"
            alt="Foto de perfil"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <Details>
          <Cards>
            <div>
              <h5>Desenvolvedor web fullstack</h5>
              <span>2 anos</span>
            </div>
            <div>
              <h5>Idade</h5>
              <span>23 anos</span>
            </div>
          </Cards>
          <span>
            Olá! Meu nome é Douglas Felipe Munaro, desenvolvedor full-stack web,
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
