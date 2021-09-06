import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 4.8rem;
  width: 100%;
  background: var(--color-primary-dark);
  border-bottom: 2px solid var(--color-primary-darker);
`;

export const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10rem;
  color: var(--color-text-in-primary);

  img {
    cursor: pointer;
  }

	h2 { 
		font-size: 1.2rem;
	}

	@media (max-width: 800px) {
		margin: 0 2rem;
	}
`;

export const Arrow = styled.img`
  width: 3.2rem;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Logo = styled.img`
  width: 4rem;


	@media (max-width: 800px) {
		visibility: hidden;
	}
`;
