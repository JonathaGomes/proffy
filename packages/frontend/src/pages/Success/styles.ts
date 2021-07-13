import styled from "styled-components";
import successBackground from "../../assets/images/success-background.svg";

export const SuccessContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: var(--color-primary);
`;

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 75%;
  width: 75%;
  align-items: center;
  background-image: url(${successBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  p {
    margin-top: 2.4rem;
    text-align: center;
    color: var(--color-text-in-primary);
    font-family: Poppins, sans-serif;
    font-weight: 400;
  }

  button {
    margin-top: 8rem;
    height: 5.6rem;
    border: none;
    border-radius: 8px;
    padding: 0 4rem;
    background: var(--color-secundary);
    color: var(--color-title-in-primary);
    transition: background 0.2s;

    &:hover {
      background: var(--color-secundary-dark);
    }
  }
`;

export const Title = styled.h1`
  margin-top: 4rem;
  font-size: 5.4rem;
  color: var(--color-title-in-primary);
`;
