import { Copyright } from "@styled-icons/fa-solid/Copyright";
import styled from 'styled-components';
 
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;

  background: var(--secondary);

  > h5 {
    color: var(--title);
    font-size: 16px;
  }
`;

export const IconCopyright = styled(Copyright)`
  width: 16px;
  height: 16px;
  color: var(--title);
  margin-right: 5px;
`