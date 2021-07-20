import { useHistory } from "react-router";

import backImage from "../../assets/images/icons/back.svg";
import logo from "../../assets/images/logo.svg";

import { HeaderContainer, HeaderContent, Logo, Arrow } from "./styles";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const history = useHistory();
  function handleClickRedirect(path: string) {
    history.push(path);
  }
  return (
    <HeaderContainer>
      <HeaderContent>
        <Arrow
          onClick={() => handleClickRedirect("/")}
          src={backImage}
          alt="Voltar a página inicial"
        />
        <h2>{title}</h2>
        <Logo
          onClick={() => handleClickRedirect("/")}
          src={logo}
          alt="Proffy"
        />
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
