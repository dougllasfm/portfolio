import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--dark);
  border: 1px solid var(--secondary);
  transition: var(--transition);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  &:hover {
    background: var(--primary);
    border-color: var(--dark);
  }
`;

export const Title = styled.div`
  background: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  > h1 {
    font-size: 16px;
    color: var(--title);
  }
`

export const List = styled.ul`
  margin-top: 10px;
  list-style: inside;

  > li {
    margin: 10px;
    font-size: 14px;
  }
`