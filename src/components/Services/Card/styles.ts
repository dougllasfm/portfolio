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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 80%;
  margin: 30px 0 20px 0;

  > span {
    font-size: 16px;
    margin-bottom: 15px;
    color: var(--grayLight);
  }

  > h2 {
    font-size: 16px;
    color: var(--grayLight);
  }
`

export const List = styled.ul`
  list-style: inside;

  > li {
    margin: 10px 0;
    font-size: 14px;
  }
`

export const GithubLink = styled.a`
  margin-top: 5px;

  background: transparent;
  border: 1px solid var(--secondary);
  color: var(--secondary);
  border-radius: 5px;
  
  padding: 6px 10px;
  transition: var(--transition);
  &:hover {
    background: var(--grayLight);
    color: var(--primary);
    border-color: var(--grayLight);
  }
`