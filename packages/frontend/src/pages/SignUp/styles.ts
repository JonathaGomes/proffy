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
  height: 25rem;
  background: var(--color-primary);
`;

export const TopContent = styled.div`
  width: 60%;
  height: 25rem;
  margin: 0 auto;
  padding-top: 4rem;

  h1 {
    color: var(--color-title-in-primary);
    font-size: 2.25rem;
    font-family: Archivo;
    font-weight: 700;
    line-height: 2.625rem;

  }
	
  div {
    margin-top: 1.25rem;
    display: flex;
    justify-content: space-between;
  }
	
  p {
		display: flex;
    justify-content: space-between;
    gap: 1rem;
    color: var(--color-text-in-primary);
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 400;
  }

  span {
		font-size: 0.75rem;
    line-height: 1.8rem;
  }
	
	@media (max-width: 800px) {
		padding-top: 2rem;
		margin: 0 2rem;

		h1 {
			font-size: 1.5rem;
			line-height: 1.2;	
		}

		p {
			font-size: 1.2rem;
			line-height: 1.2;

			img {
				display: none;
			}
			
			span {
				display: none;
			}
		}

	}
	
`;

export const BottomContainer = styled.div`
  width: 100%;
  background: var(--color-background);
	
  footer {
		height: 8.5rem;
    max-width: 60%;
    margin: 0 auto 3.5rem auto;
    border: 2px solid var(--color-line-in-white);
    background: var(--color-box-footer);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem;
    border-radius: 0 0 8px 8px;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 0.875rem;
      font-family: Poppins;
      font-weight: 400;
      color: #a0a0b2;
    }

    button {
      border: none;
      border-radius: 8px;
      height: 3.5rem;
      padding: 0 2.5rem;
      background: var(--color-secundary);
      color: var(--color-title-in-primary);
      transition: background 0.3s;

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }

	@media (max-width: 800px) {
		footer {
			max-width: 100%;
    	padding: 2rem;
			gap: 1rem;
    	margin: 0 auto;
		}
	}
`;

export const BottomContent = styled.div`
	max-width: 60%;
  margin: 0 auto;

  background: var(--color-box-base);
  border-radius: 8px 8px 0 0;
  border: 2px solid var(--color-line-in-white);
  border-bottom: none;

  padding: 4rem;
  margin-top: -8rem;

  fieldset {
    border: none;

    & + fieldset {
      margin-top: 4rem;
    }
  }

  legend {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: Archivo;
    font-size: 2rem;
    color: var(--color-text-title);
    border-bottom: 1px solid var(--color-line-in-white);
    padding-bottom: 1rem;

    span {
      color: var(--color-primary);
      font-size: 1rem;
      cursor: pointer;
    }
  }

	@media (max-width: 800px) {
		max-width: 100%;
		border-radius: 0;
		padding: 2rem;

		legend {
			font-size: 1.5rem;
		}
	}
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 0.5rem;

  label {
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-text-complement);

    span {
      margin-left: 0.75rem;
      color: #c1bccc;
      font-size: 0.75rem;
    }
  }

  input {
    width: 100%;
    height: 3.5rem;
    background: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);

    outline: 0;
    border-radius: 8px;
    padding: 1.5rem;

    font-family: Archivo;
    font-size: 1rem;
    color: #6a6180;
    font-weight: 400;


		&:hover {
			border-color: var(--color-primary-light);
			box-shadow: 0 0 0 1px var(--color-primary-light);
			cursor: pointer;
		}

		&:focus {
			border: 1px solid var(--color-primary-light);
			box-shadow: 0 0 0 1px var(--color-primary-light);
		}
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem 2rem;

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
    padding: 1.5rem;

    font-family: Archivo;
    font-size: 1rem;
    color: #6a6180;
    font-weight: 400;

		&:hover {
			border-color: var(--color-primary-light);
			box-shadow: 0 0 0 1px var(--color-primary-light);
			cursor: pointer;
		}

		&:focus {
			border: 1px solid var(--color-primary-light);
			box-shadow: 0 0 0 1px var(--color-primary-light);
		}
  }

  select {
    width: 100%;
    background: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);

    outline: 0;
    border-radius: 8px;
    padding: 0 1.5rem;
    font-family: Archivo;
    font-size: 1.125rem;
    color: #c1bccc;
    font-weight: 400;

    height: 3.5rem;
  }

	@media (max-width: 800px) {
		div {
    display: flex;
		flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem 2rem;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
	}

`;

export const ScheduleInputBlock = styled.div`
  display: flex;

  margin-top: 1.5rem;
  gap: 1rem;

  select {
    margin-top: 0.5rem;
    width: 100%;
    background: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);

    outline: 0;
    border-radius: 8px;
    padding: 0 1.5rem;
    font-family: Archivo;
    font-size: 1.125rem;
    color: #c1bccc;
    font-weight: 400;

    height: 3.5rem;
  }

  input {
    width: 100%;
    height: 3.5rem;
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
		
		&:focus {
			border: 1px solid var(--color-primary-light);
		}
  }
`;

export const MessageError = styled.span`
  color: var(--color-error);
`;

export const SelectBlock = styled.div`
	display: flex;
	flex-direction: column;
 	margin-top: 1.5rem;
  gap: 0.5rem;
	
	div {
		border: 1px solid var(--color-line-in-white);
		border-radius: 8px;
		display: flex;
		align-items: center;
		position: relative;
		
		&:hover {
			border-color: var(--color-primary-light);
			box-shadow: 0 0 0 1px var(--color-primary-light);
		}
		
		label {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1rem;
			cursor: pointer;
			width: 100%;
			height: 100%;
		}
	}

	label {
		font-family: Poppins;
		font-size: 1rem;
		font-weight: 400;
		color: var(--color-text-complement);

		span {
			margin-left: 0.75rem;
			color: #c1bccc;
			font-size: 0.75rem;
		}
	}
`;
