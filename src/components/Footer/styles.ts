import { Github } from "@styled-icons/boxicons-logos/Github";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  background: var(--secondary);

  > h1 {
    font-size: 30px;
    color: var(--primary);
    margin: 20px;
    transition: var(--transition);
    cursor: pointer;

    &:hover {
      color: var(--grayLight)
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    > h5 {
      color: var(--primary);
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px;

  > li {
    color: var(--title);
    font-size: 15px;
    margin: 10px;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: var(--grayLight)
    }
  }
`

export const IconsNetworks = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 40px 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;

    width: 40px;
    height: 40px;
    background: var(--primary);
    margin: 4px;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background: #1d1b31;
    }

  }
`;

const iconsCss = css`
  width: 26px;
  height: 26px;
  color: var(--grayLight);
`;

export const InstaIcon = styled(Instagram)`
  ${iconsCss};
`;
export const GithubIcon = styled(Github)`
  ${iconsCss};
`;
export const TwitterIcon = styled(Twitter)`
  ${iconsCss};
`;

