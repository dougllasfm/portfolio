import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px 0 60px;
  width: var(--container-width-lg);
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: var(--container-width-md);
  }

  @media (max-width: 600px) {
    width: var(--container-width-ms);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  

  > h1 {
    color: var(--secondary);
    margin-bottom: 50px;
    font-size: 24px;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`
