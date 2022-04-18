import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  background-color: var(--black);

  > h1 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    color: var(--grayLight);
  }
`;

export const NameAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  > h1 {
    font-size: 34px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--grayLight);
    margin-bottom: 4px;
  }

  > span {
    background: var(--yellow);
    font-size: 16px;
    color: #000;
    text-transform: uppercase;
    padding: 8px 12px;
    font-weight: bold;
  }
`;
