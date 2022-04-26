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
  @media (max-width: 880px) {
    height: 70vh;
  }
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

    @media (max-width: 600px) {
      font-size: 20px;
    }

    @media (max-width: 380px) {
      display: none;
    }
  }

  @media (max-width: 380px) {
    justify-content: center;
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

      @media (max-width: 880px) {
        margin: 0 10px;
        font-size: 16px;
      }

      @media (max-width: 600px) {
        margin: 0 5px;
        font-size: 12px;
      }
    }

    @media (max-width: 600px) {
      > h1 {
        font-size: 20px;
      }
      margin: 0;
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

      @media (max-width: 600px) {
        font-size: 16px;
      }
    }

    > h5 {
      font-size: 16px;
      font-weight: 500;
      margin: 10px 0;
      color: var(--grayLight);

      @media (max-width: 600px) {
        font-size: 12px;
      }
    }
    > a {
      padding: 8px 16px;
      border-radius: 6px;
      background-color: var(--secondary);
      color: var(--title);
      font-size: 14px;
      margin: 10px 0;
      transition: var(--transition);

      &:hover {
        background: var(--grayLight);
      }

      @media (max-width: 600px) {
        font-size: 10px;
      }
    }
  }

  > span {
    border-radius: 50%;

    @media (max-width: 880px) {
      width: 230px !important;
      height: 230px !important;
    }

    @media (max-width: 600px) {
      width: 180px !important;
      height: 180px !important;
    }
  }
`;
