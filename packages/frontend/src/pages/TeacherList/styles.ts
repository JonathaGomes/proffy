import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15rem;
  background: var(--color-primary);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 46rem;
  margin: 0 auto;
`;

export const HeaderContainer = styled.header`
  h1 {
    color: var(--color-title-in-primary);
    font-size: 2.25rem;
  }
`;

export const SelectsContainer = styled.div`
  display: flex;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--color-text-in-primary);
    font-weight: 400;
    font-size: 0.875rem;
  }
`;

export const Select = styled.select``;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;

  color: var(--color-button-text);
  background: var(--color-secundary);
  border-radius: 8px;
  text-decoration: none;
`;
