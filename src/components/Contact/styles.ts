import { LocationPin } from "@styled-icons/entypo/LocationPin";
import { Email } from "@styled-icons/material-rounded/Email";
import { Whatsapp } from "@styled-icons/remix-fill/Whatsapp";
import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 60px;

  min-height: 80vh;
  width: var(--container-width-lg);
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: var(--container-width-md);
  }

  @media (max-width: 600px) {
    width: var(--container-width-ms);
  }

  > h1 {
    color: var(--secondary);
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  width: 100%;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  > p {
    font-size: 14px;
    color: var(--grayLight);
  }

  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    outline: none;
    border-radius: 4px;

    border: 1px solid var(--dark);
    box-sizing: border-box;
    font-size: 16px;
    background: var(--primary);
    color: var(--white);

    &:focus {
      outline: 1px solid var(--secondary);
    }
  }

  > textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    outline: none;
    border-radius: 4px;
    resize: none;
    min-height: 100px;

    border: 1px solid var(--dark);
    box-sizing: border-box;
    font-size: 16px;
    background: var(--primary);
    color: var(--white);

    &:focus {
      outline: 1px solid var(--secondary);
    }
  }

  input[type="submit"] {
    width: 100%;
    background-color: var(--secondary);
    color: #000;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all ease 0.2s;
    font-size: 16px;
    font-weight: bold;
  }

  input[type="submit"]:hover {
    background-color: #66bfff;
  }
`;

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
    width: 80%;
    background: var(--dark);
    border: 1px solid var(--dark);
    border-radius: 12px;
    padding: 30px 20px;
    transition: var(--transition);

    @media (max-width: 600px) {
      padding: 15px 10px;
    }

    &:hover {
      background: var(--primary);
    }

    > h5 {
      font-size: 14px;
      margin: 10px 0 3px;
      color: var(--grayLight);

      @media (max-width: 600px) {
        font-size: 12px;
      }
    }

    > span {
      color: var(--gray);
      font-weight: bold;
      font-size: 12px;
      text-align: center;
      
      @media (max-width: 600px) {
        font-size: 10px;
      }
    }

    > p {
      margin-top: 6px;
      font-weight: bold;
      color: var(--secondary);
      font-size: 12px;

      @media (max-width: 600px) {
        font-size: 10px;
      }
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
