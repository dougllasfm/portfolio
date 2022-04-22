import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  height: 100vh;
`;

export const Content = styled.div`
  margin: 40px auto;
  width: 80%;
`;


export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > h1 {
    font-size: 30px;
    text-transform: uppercase;
    font-family: 'Anek Gujarati', sans-serif;
    cursor: pointer;
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
      transition: var(--transition);

      &:hover {
        border-bottom: 2px solid var(--secondary);
      }
    }
  }
`

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
    }

    > h5 {
      font-size: 14px;
      font-weight: 500;
      margin: 10px 0;
    }
    
    > span {
      margin: 10px 0;
    }

    > a {
      padding: 6px 18px;
      border-radius: 12px;
      background-color: var(--secondary);
      color: var(--black);
      font-size: 14px;
      font-weight: bold;
      margin: 10px 0;
    }
  }

  > img {
    width: 340px;
    height: 340px;
    border-radius: 50%;
    overflow: hidden; 
  }
`
