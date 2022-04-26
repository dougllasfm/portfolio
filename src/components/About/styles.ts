import { User } from "@styled-icons/boxicons-solid/User";
import { Computer } from "@styled-icons/remix-fill/Computer";
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

    @media (max-width: 600px) {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const Resume = styled.div`
  display: grid;
  grid-template-columns: 40% 50%;
  gap: 10%;
  margin-top: 20px;

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
    width: 300px;
    height: 300px;
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
      margin: 0;
    }

    @media (max-width: 600px) {
      width: 180px;
      height: 180px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > span {
    margin: 10px 0;

    @media (max-width: 790px) {
      font-size: 14px;
    }

    @media (max-width: 600px) {
      font-size: 12px;
      margin: 5px 0;
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  > div {
    text-align: center;

    background: var(--dark);
    border-radius: 10px;
    padding: 40px 20px;
    border: 1px solid var(--dark);
    transition: var(--transition);

    > h5 {
      font-size: 14px;
    }

    > span {
      font-size: 12px;
    }

    @media (max-width: 790px) {
      padding: 30px 15px;

      > h5 {
        font-size: 12px;
      }

      > span {
        font-size: 10px;
      }
    }

    @media (max-width: 600px) {
      padding: 20px 10px;

      > h5 {
        font-size: 10px;
      }

      > span {
        font-size: 8px;
      }
    }

    &:hover {
      background: var(--primary);
      border-color: var(--secondary);
    }
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

  @media (max-width: 790px) {
    padding: 10px 12px;
    font-size: 12px;
  }

  @media (max-width: 600px) {
    padding: 10px 8px;
    font-size: 12px;
  }
`;

export const IconDev = styled(Computer)`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
  color: var(--grayLight);
`;

export const IconUser = styled(User)`
  width: 20px;
  height: 20px;
  color: var(--grayLight);
  margin-bottom: 5px;
`;
