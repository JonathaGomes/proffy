import { FormEvent, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";

import rocketImage from "../../assets/images/icons/rocket.svg";
import warningImage from "../../assets/images/icons/warning.svg";

import {
  SignUpContainer,
  TopContainer,
  TopContent,
  BottomContainer,
  BottomContent,
  InputBlock,
  ScheduleInputBlock
} from "./styles";

function SignUp() {
  const [teste, setTeste] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [biography, setBiography] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      fullName.trim() === "" ||
      email === "" ||
      photoURL === "" ||
      whatsapp === ""
    ) {
      window.alert("PREENCHA TODOS OS CAMPOS");
      return;
    }

    const user = {
      name: fullName,
      email,
      photoURL,
      whatsapp,
      biography,
      type: teste
    };

    console.log(user);
  }
  return (
    <SignUpContainer>
      <Header title={"Cadastro"} />
      <Helmet>
        <title>Proffy | Cadastro</title>
      </Helmet>
      <TopContainer>
        <TopContent>
          <h1>
            Que incrível que você <br /> quer se cadastrar na plataforma.
          </h1>
          <div>
            <p>
              O primeiro passo, é preencher esse <br /> formulário de inscrição.
            </p>
            <p>
              <img src={rocketImage} alt="Foguete" />
              <span>
                Preparare-se! <br /> vai ser o máximo.
              </span>
            </p>
          </div>
        </TopContent>
      </TopContainer>
      <BottomContainer>
        <form onSubmit={handleSubmit}>
          <BottomContent>
            <fieldset>
              <legend>Seus dados</legend>
              <InputBlock>
                <label htmlFor="fullName">Nome Completo</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  required
                />
              </InputBlock>
              <InputBlock>
                <label htmlFor="email">Seu melhor email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </InputBlock>
              <InputBlock>
                <div>
                  <div>
                    <label htmlFor="photoURL">
                      Link da sua foto <span>(comece com https://)</span>
                    </label>
                    <input
                      type="url"
                      id="photoURL"
                      value={photoURL}
                      onChange={e => setPhotoURL(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp">Whatsapp</label>
                    <input
                      type="string"
                      id="whatsapp"
                      value={whatsapp}
                      onChange={e => setWhatsapp(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </InputBlock>
              <InputBlock>
                <label htmlFor="biography">
                  Biografia <span>(Máximo de 300 caracteres)</span>
                </label>
                <textarea
                  id="biography"
                  cols={30}
                  rows={10}
                  value={biography}
                  onChange={e => setBiography(e.target.value)}
                  required
                ></textarea>
              </InputBlock>
              <InputBlock>
                <label htmlFor="type">O que você quer ser?</label>
                <select
                  id="type"
                  value={teste}
                  onChange={e => setTeste(e.target.value)}
                  required
                >
                  <option value="" hidden disabled selected>
                    Selecione uma opção
                  </option>
                  <option value="teacher">Quero ser um Proffy</option>
                  <option value="student">Quero ser um Aluno</option>
                </select>
              </InputBlock>
            </fieldset>
            {teste === "teacher" && (
              <>
                <fieldset>
                  <legend>Sobre a aula</legend>
                  <InputBlock>
                    <label htmlFor="subject">Matéria</label>
                    <select id="subject">
                      <option value="" hidden selected disabled>
                        Selecione qual você quer ensinar
                      </option>
                      <option value="art">Artes</option>
                      <option value="biology">Biologia</option>
                      <option value="physicalEducation">Educação Física</option>
                      <option value="physics">Física</option>
                      <option value="geography">Geografia</option>
                      <option value="history">Historia</option>
                      <option value="english">Inglês</option>
                      <option value="math">Matemática</option>
                      <option value="portuguese">Português</option>
                      <option value="chemistry">Química</option>
                    </select>
                  </InputBlock>
                  <InputBlock>
                    <label htmlFor="cost">Custo da sua hora por aula</label>
                    <input type="text" id="cost" />
                  </InputBlock>
                </fieldset>
                <fieldset>
                  <legend>
                    Horários disponíveis
                    <span>+ Novo Horário</span>
                  </legend>

                  <ScheduleInputBlock>
                    <div>
                      <label htmlFor="dayOfWeek">Dia da semana</label>
                      <select id="dayOfWeek">
                        <option value="" hidden disabled selected>
                          Selecione o dia
                        </option>
                        <option value="monday">Segunda</option>
                        <option value="tuesday">Terça</option>
                        <option value="wednesday">Quarta</option>
                        <option value="thursday">Quinta</option>
                        <option value="friday">Sexta</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="startHours">Das</label>
                      <input type="text" id="startHours" />
                    </div>
                    <div>
                      <label htmlFor="endHours">Até</label>
                      <input type="text" id="endHours" />
                    </div>
                  </ScheduleInputBlock>
                </fieldset>
              </>
            )}
          </BottomContent>
          <footer>
            <div>
              <img src={warningImage} alt="Atenção!" />
              <p>
                Importante! <br />
                Preencha todos os dados
              </p>
            </div>
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </BottomContainer>
    </SignUpContainer>
  );
}

export default SignUp;
