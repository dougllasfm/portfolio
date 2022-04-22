import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import { LocationPin } from "@styled-icons/entypo/LocationPin";
import { Email } from "@styled-icons/material-rounded/Email";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  padding: 120px 0;

  min-height: 80vh;

  > h1 {
    color: var(--secondary);
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
export const Form = styled.form``;

export const Networks = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;

    height: fit-content;
    background: var(--dark);
    border-radius: 12px;
    padding: 30px 20px;

    > h5 {
      font-size: 14px;
      margin: 10px 0 3px;
      color: var(--grayLight);
    }

    > span {
      color: var(--gray);
      font-weight: bold;
      font-size: 12px;
    }
  }
`;

const iconCss = css`
  width: 20px;
  height: 20px;
  color: var(--grayLight);
`;

export const EmailIcon = styled(Email)`
  ${iconCss};
`;

export const WhatsAppIcon = styled(Whatsapp)`
  ${iconCss};
`;

export const LocationIcon = styled(LocationPin)`
  ${iconCss};
`;
