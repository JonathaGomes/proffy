import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import landingImage from "../../assets/images/landing.svg";
import logo from "../../assets/images/logo.svg";
import purpleHeart from "../../assets/images/icons/purple-heart.svg";
import study from "../../assets/images/icons/study.svg";
import giveClasses from "../../assets/images/icons/give-classes.svg";

import {
  HomeContainer,
  BottomContainer,
  TopContainer,
  Illustration,
  Info,
  Buttons,
  Logo
} from "./styles";

function Home() {
  const history = useHistory();
  function handleClickRedirect(path: string) {
    history.push(path);
  }
  return (
    <HomeContainer>
      <Helmet>
        <title>Proffy | Página Inicial</title>
      </Helmet>
      <TopContainer>
        <div>
          <Logo src={logo} alt="Proffy" />
          <h1>
            Sua plataforma de <br /> estudos online.
          </h1>
        </div>
        <div>
          <Illustration src={landingImage} alt="Proffy" />
        </div>
      </TopContainer>
      <BottomContainer>
        <Info>
          <p>
            Seja bem-vindo. <br /> <span>O que deseja fazer?</span>
          </p>
          <p>
            Total de 285 conexões <br /> já realizadas{"  "}
            <img src={purpleHeart} alt="Coração Roxo" />
          </p>
        </Info>
        <Buttons>
          <button onClick={() => handleClickRedirect("/study")}>
            <img src={study} alt="Estudar" />
            Estudar
          </button>
          <button onClick={() => handleClickRedirect("/give-classes")}>
            <img src={giveClasses} alt="Estudar" />
            Dar aulas
          </button>
        </Buttons>
      </BottomContainer>
    </HomeContainer>
  );
}

export default Home;
