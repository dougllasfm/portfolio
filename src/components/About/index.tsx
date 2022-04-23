import { Button, Cards, Container, Details, Resume } from "./styles";

function About() {
  return (
    <Container id="about">
      <h1>Sobre mim</h1>
      <Resume>
        <div className="img">
          <img src="picture.jpeg" alt="" />
        </div>
        <Details>
          <Cards>
            <div>
              <h5>Experencia</h5>
              <span>Tal tal tal</span>
            </div>
            <div>
              <h5>Experencia</h5>
              <span>Tal tal tal</span>
            </div>
            <div>
              <h5>Experencia</h5>
              <span>Tal tal tal</span>
            </div>
          </Cards>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
