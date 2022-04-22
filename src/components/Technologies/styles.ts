import styled, { css } from "styled-components";
import {
  Docker,
  Javascript,
  Nodejs,
  ReactLogo,
  Vuejs
} from "styled-icons/boxicons-logos";
import {
  Nextdotjs,
  Prisma,
  Styledcomponents,
  Typescript
} from "styled-icons/simple-icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;

  > h1 {
    color: var(--secondary);
    margin-bottom: 50px;
    font-size: 24px;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  gap: 25px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      margin-top: 5px;
      font-size: 10px;
      color: var(--grayLight);
    }
  }
`;

export const iconCss = css`
  width: 34px;
  height: 34px;
  color: var(--grayLight);
`;

export const TypeScriptIcon = styled(Typescript)`
  ${iconCss};
`;

export const JavaScriptIcon = styled(Javascript)`
  ${iconCss};
`;

export const NextIcon = styled(Nextdotjs)`
  ${iconCss};
`;

export const ReactIcon = styled(ReactLogo)`
  ${iconCss};
`;

export const NodeIcon = styled(Nodejs)`
  ${iconCss};
`;

export const StyledIcon = styled(Styledcomponents)`
  ${iconCss};
`;

export const PrismaIcon = styled(Prisma)`
  ${iconCss};
`;

export const DockerIcon = styled(Docker)`
  ${iconCss};
`;

export const VueIcon = styled(Vuejs)`
  ${iconCss};
`;
