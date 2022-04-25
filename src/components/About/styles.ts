import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--container-width-lg);
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: var(--container-width-md);
  }

  @media (max-width: 600px) {
    width: var(--container-width-ms);
  }
  padding: 20px 0 60px;

  > h1 {
    color: var(--secondary);
    margin-bottom: 50px;
    font-size: 24px;
  }
`;

export const Resume = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  .img {
    margin: 0 40px;
    background: linear-gradient(
      45deg,
      transparent,
      var(--secondary),
      transparent
    );
    border-radius: 20px;
    aspect-ratio: 1/1;
    width: 330px;
    height: 330px;
    place-items: center;

    > span {
      border-radius: 20px;
      overflow: hidden;
      transform: rotate(5deg); /* Equal to rotateZ(45deg) */
      transition: var(--transition);

      &:hover {
        transform: rotate(0);
      }
    }

    @media (max-width: 900px) {
      width: 280px;
      height: 280px;
    }

    @media (max-width: 790px) {
      width: 220px;
      height: 220px;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    margin: 10px 0;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  > div {
    text-align: center;

    background: var(--dark);
    border-radius: 10px;
    padding: 40px 20px;
  }
`;

export const Button = styled.button`
  margin-top: 5px;
  width: 120px;
  padding: 14px 16px;
  border-radius: 6px;
  background: var(--secondary);
  color: var(--title);
  font-size: 14px;
  border: none;
  cursor: pointer;

  transition: var(--transition);

  &:hover {
    background: var(--grayLight);
  }
`;
