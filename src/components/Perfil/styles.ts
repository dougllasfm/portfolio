import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Picture = styled.div`
  margin: 15px;

  > img {
    width: 360px;
    height: 360px;
    border-radius: 50%;
  }
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray);
  width: 100%;
  height: 60px;

  > ul {
    list-style: none;
    display: flex;

    > li {
      font-size: 14px;
      color: var(--grayLight);
      cursor: pointer;
      padding: 2px;
      margin: 0 16px;
      text-transform: uppercase;
      font-weight: 600;
      border-bottom: 2px solid var(--gray);

      &:hover {
        border-bottom: 2px solid var(--yellow);
        transition: all ease-in 200ms;
      }
    }
  }
`;
