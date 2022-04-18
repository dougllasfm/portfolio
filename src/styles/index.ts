import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: inset 10px 10px 30px 0px #dbdbdb;

  .header {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`