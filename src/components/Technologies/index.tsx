import {
  Container,
  DockerIcon,
  Icons,
  JavaScriptIcon,
  NextIcon,
  NodeIcon,
  PrismaIcon,
  ReactIcon,
  StyledIcon,
  TypeScriptIcon,
  VueIcon
} from "./styles";

function Technologies() {
  return (
    <Container id="techs">
      <h1>Linguagens / Frameworks / Bibliotecas</h1>
      <Icons>
        <div>
          <JavaScriptIcon />
          <span>Javascript</span>
        </div>
        <div>
          <ReactIcon />
          <span>React</span>
        </div>

        <div>
          <NodeIcon />
          <span>Node</span>
        </div>

        <div>
          <DockerIcon />
          <span>Docker</span>
        </div>

        <div>
          <VueIcon />
          <span>Vue</span>
        </div>

        <div>
          <PrismaIcon />
          <span>Prisma</span>
        </div>

        <div>
          <StyledIcon />
          <span>Styled-components</span>
        </div>

        <div>
          <TypeScriptIcon />
          <span>Typescript</span>
        </div>
        <div>
          <NextIcon />
          <span>Next</span>
        </div>
      </Icons>
    </Container>
  );
}

export default Technologies;
