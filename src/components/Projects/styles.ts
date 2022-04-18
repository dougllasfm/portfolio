import { Target } from "@styled-icons/fluentui-system-filled/Target";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--white);
`;

export const Icon = styled(Target)`
  color: var(--yellow);
  height: 38px;
  width: 38px;
  position: relative;
  top: -48px;
  left: 100px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 20px;
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
    top: -50px;
    left: 12px;
    background-color: var(--yellow);
    opacity: 100%;
  }

  > span {
    font-size: 18px;
    line-height: 28px;
    margin-top: -30px;
  }
`;
