import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: var(--color-background);
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.header`
  width: 100%;
  height: 40rem;
  background: var(--color-primary);
`;

export const TopContent = styled.div`
  width: 60%;
  height: 40rem;
  max-width: 90rem;
  margin: 0 auto;
  padding-top: 6.4rem;

  h1 {
    color: var(--color-title-in-primary);
    font-size: 2.25rem;
    font-family: Archivo;
    font-weight: 700;
    line-height: 2.625rem;
  }

  div {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  p {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    color: var(--color-text-in-primary);
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 400;
  }

  span {
    font-size: 0.75rem;
    line-height: 1.8rem;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 60rem;
  background: var(--color-background);
  margin-bottom: 7.5rem;

  footer {
    height: 13.6rem;
    width: 60%;
    max-width: 90rem;
    margin: 0 auto 12rem auto;
    border: 2px solid var(--color-line-in-white);
    background: var(--color-box-footer);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6.3rem;
    border-radius: 0 0 8px 8px;

    div {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      font-size: 1.4rem;
      font-family: Poppins;
      font-weight: 400;
      color: #a0a0b2;
    }

    button {
      border: none;
      border-radius: 8px;
      height: 5.6rem;
      padding: 0 4rem;
      background: var(--color-secundary);
      color: var(--color-title-in-primary);
      transition: background 0.3s;

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }
`;

export const BottomContent = styled.div`
  width: 60%;
  max-width: 90rem;
  margin: 0 auto;

  background: var(--color-box-base);
  border-radius: 8px 8px 0 0;
  border: 2px solid var(--color-line-in-white);
  border-bottom: none;

  padding: 6.4rem;
  margin-top: -10rem;

  fieldset {
    border: none;

    & + fieldset {
      margin-top: 6.4rem;
    }
  }

  legend {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: Archivo;
    font-size: 3.2rem;
    color: var(--color-text-title);
    border-bottom: 1px solid var(--color-line-in-white);
    padding-bottom: 1.6rem;

    span {
      color: var(--color-primary);
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  gap: 0.8rem;

  label {
    font-family: Poppins;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-text-complement);

    span {
      margin-left: 1.2rem;
      color: #c1bccc;
      font-size: 1.2rem;
    }
  }

  input {
    width: 100%;
    height: 5.6rem;
    background: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);

    outline: 0;
    border-radius: 8px;
    padding: 2.4rem;

    font-family: Archivo;
    font-size: 1.6rem;
    color: #6a6180;
    font-weight: 400;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 0.8rem 3.2rem;

    div {
      width: 50%;
      display: flex;
      flex-direction: column;
    }
  }

  textarea {
    width: 100%;
    resize: vertical;
    background: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);

    outline: 0;
    border-radius: 8px;
    padding: 2.4rem;

    font-family: Archivo;
    font-size: 1.6rem;
    color: #6a6180;
    font-weight: 400;
  }

  select {
    width: 100%;
    background: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);

    outline: 0;
    border-radius: 8px;
    padding: 0 2.4rem;
    font-family: Archivo;
    font-size: 1.8rem;
    color: #c1bccc;
    font-weight: 400;

    height: 5.6rem;
  }
`;

export const ScheduleInputBlock = styled.div`
  display: flex;

  margin-top: 2.4rem;
  gap: 1.6rem;

  select {
    margin-top: 0.8rem;
    width: 100%;
    background: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);

    outline: 0;
    border-radius: 8px;
    padding: 0 2.4rem;
    font-family: Archivo;
    font-size: 1.8rem;
    color: #c1bccc;
    font-weight: 400;

    height: 5.6rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    background: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);

    outline: 0;
    border-radius: 8px;
    padding: 2.4rem;

    font-family: Archivo;
    font-size: 1rem;
    color: #6a6180;
    font-weight: 400;
    margin-top: 0.8rem;
  }
`;

export const MessageError = styled.span`
  color: red;
`;
