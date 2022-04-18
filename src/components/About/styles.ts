import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--grayLight);
  padding-top: 80px;
  padding-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;

  > h1 {
    text-transform: uppercase;
    font-size: 30px;
    z-index: 999;
    color: var(--title);
  }

  > div {
    position: relative;
    width: 145px;
    height: 10px;
    top: -15px;
    left: 12px;
    background-color: var(--yellow);
    opacity: 100%;
  }

  > span {
    font-size: 18px;
    line-height: 28px;
    margin-top: 5px;
  }
`;
