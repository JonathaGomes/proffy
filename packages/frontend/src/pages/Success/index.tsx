import { useHistory } from "react-router-dom";
import { SuccessContainer, SuccessContent, Title } from "./styles";
import successCheck from "../../assets/images/icons/success-check-icon.svg";

function Success() {
  const history = useHistory();
  function handleClick() {
    history.push("/study");
  }
  return (
    <SuccessContainer>
      <SuccessContent>
        <img src={successCheck} alt="Perfil salvo!" />
        <Title>Cadastro salvo!</Title>
        <p>
          Tudo certo, seu cadastro está na nossa lista de professores.
          <br /> Agora é só ficar de olho no seu WhatsApp.
        </p>
        <button onClick={handleClick}>Acessar Lista</button>
      </SuccessContent>
    </SuccessContainer>
  );
}

export default Success;
