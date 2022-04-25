import styled from "styled-components";

export const Container = styled.section`
  width: var(--container-width-lg);
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: var(--container-width-md);
  }

  @media (max-width: 600px) {
    width: var(--container-width-ms);
  }

  height: 100vh;
`;

export const Content = styled.div`
  margin: 40px auto;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > h1 {
    font-size: 30px;
    text-transform: uppercase;
    font-family: "Anek Gujarati", sans-serif;
    cursor: pointer;
    color: var(--grayLight);
  }

  > ul {
    margin-left: 20px;
    display: flex;
    align-items: center;

    > li {
      margin: 0 20px;
      font-size: 18px;
      border-bottom: 2px solid var(--primary);
      cursor: pointer;
      color: var(--grayLight);
      transition: var(--transition);

      &:hover {
        border-bottom: 2px solid var(--secondary);
      }
    }
  }
`;

export const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 60px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h1 {
      font-size: 26px;
      color: var(--grayLight);
    }

    > h5 {
      font-size: 14px;
      font-weight: 500;
      margin: 10px 0;
      color: var(--grayLight);
    }

    > span {
      margin: 10px 0;
      color: var(--grayLight);
    }

    > a {
      padding: 8px 16px;
      border-radius: 6px;
      background-color: var(--secondary);
      color: var(--title);
      font-size: 16px;
      margin: 10px 0;
      transition: var(--transition);

      &:hover {
        background: var(--grayLight);
      }
    }
  } 
  > span {
    border-radius: 50%;
  }
`;
