import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: var(--color-primary);
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  height: 60vh;
  width: 100%;

	
  h1 {
		font-family: Poppins;
    font-size: 2.25rem;
    color: var(--color-text-in-primary);
    font-weight: 400;

    @media (max-width: 1200px) {
			font-size: 1.5rem;
    }
  }
	
	@media (max-width: 550px) {
		text-align: center;
		gap: 0;
		height: 40vh;
		
		h1 {
			text-align: center;
		}
	}
`;

export const Logo = styled.img`
  width: 26rem;

  @media (max-width: 1200px) {
    width: 20rem;
  }

  @media (max-width: 850px) {
    width: 15rem;
  }
`;

export const Illustration = styled.img`
  width: 37.5rem;

  @media (max-width: 1200px) {
    width: 30rem;
  }

  @media (max-width: 850px) {
    width: 20rem;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100%;
  background: var(--color-background);
  gap: 5rem;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    height: 37.5rem;
    gap: 1.25rem;
    text-align: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;

  font-family: Poppins;
  font-size: 1.25rem;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  span {
    font-weight: 600;
  }

  p {
    &:nth-child(2) {
      font-size: 1rem;
      color: var(--color-text-complement);
      line-height: 2;
      text-align: right;

			
      img {
				opacity: 0.5;
      }
			
			@media (max-width: 550px) {
				text-align: center;
			}
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    height: 6.5rem;
    padding: 0 4rem;
    border: none;
    font-family: Archivo;
    font-size: 1.5rem;
    border-radius: 8px;
    color: var(--color-title-in-primary);
    transition: background 0.2s;

    @media (max-width: 1200px) {
      padding: 0 3rem;
      font-size: 1.125rem;
    }

    @media (max-width: 850px) {
      font-size: 0.875rem;
      width: 100%;
    }

    @media (max-width: 550px) {
      height: 5rem;
      width: 100%;
    }

    &:nth-child(1) {
      background: var(--color-primary);

      &:hover {
        background: var(--color-primary-dark);
      }
    }

    &:nth-child(2) {
      background: var(--color-secundary);

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }
`;
