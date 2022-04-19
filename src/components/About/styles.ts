import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Resume = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

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

    > img {
      border-radius: 20px;
      width: 330px;
      height: 330px;
      overflow: hidden;
      transform: rotate(5deg); /* Equal to rotateZ(45deg) */
      transition: var(--transition);

      &:hover {
        transform: rotate(0);
      }
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px;
  width: 50%;

  > span {
    margin: 10px 0;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  > div {
    background: var(--dark);
    border-radius: 10px;
    width: 165px;
    height: 140px;
  }
`;

export const Button = styled.button`
  margin-top: 5px;
  width: 120px;
  padding: 14px 16px;
  border-radius: 6px;
  background: var(--secondary);
  color: var(--black);
  font-size: 14px;
  border: none;
`;
