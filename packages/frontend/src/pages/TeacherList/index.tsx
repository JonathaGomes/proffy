import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import {
  Container,
  Content,
  HeaderContainer,
  SelectsContainer,
  SelectContainer,
  Select,
  Button
} from "./styles";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const teachers = [
  {
    name: "Diego Fernandes",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    whatsapp: "85988888888"
  },
  {
    name: "Mayk Brito",
    avatar:
      "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    bio: "Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar. Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: Aprenda a fazer dinheiro com isso!",
    subject: "Educação Física",
    cost: "40",
    whatsapp: "85988888888"
  },
  {
    name: "Paula Cynthia",
    avatar: "https://github.com/paulacynthia.png",
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    whatsapp: "85988888888"
  }
];

function TeacherList() {
  return (
    <>
      <Helmet>
        <title>Proffy | Encontre Seu Proffy</title>
      </Helmet>
      <Header title="Estudar" />
      <Container>
        <Content>
          <HeaderContainer>
            <h1>
              Estes são os <br />
              proffys disponíveis.
            </h1>
          </HeaderContainer>
          <SelectsContainer>
            <SelectContainer>
              <label>Matéria</label>
              <Select>
                <option value="">Selecione</option>
                <option value="portuguese">Português</option>
                <option value="math">Matemática</option>
                <option value="histo">História</option>
                <option value="geo">Geografia</option>
                <option value="fisica">Física</option>
                <option value="quimica">Química</option>
                <option value="biology">Biologia</option>
                <option value="edfisica">Educação Física</option>
                <option value="artes">Artes</option>
                <option value="ingles">Inglês</option>
                <option value="espanhol">Espanhol</option>
                <option value="sociologia">Sociologia</option>
                <option value="filosofia">Filosofia</option>
              </Select>
            </SelectContainer>
            <SelectContainer>
              <label>Dia da semana</label>
              <Select>
                <option value="">Selecione o dia</option>
                <option value="1">Segunda-feira</option>
                <option value="2">Terça-feira</option>
                <option value="3">Quarta-feira</option>
                <option value="4">Quinta-feira</option>
                <option value="5">Sexta-feira</option>
              </Select>
            </SelectContainer>
            <SelectContainer>
              <label>Horário</label>
              <Select>
                <option value="">Selecione</option>
                <option value="1">Manhã</option>
                <option value="2">Tarde</option>
                <option value="3">Noite</option>
              </Select>
            </SelectContainer>
          </SelectsContainer>
          <div>
            {teachers.map((teacher, index) => (
              <div key={index}>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                  <p>{teacher.name}</p>
                  <span>{teacher.subject}</span>
                </div>
                <div>
                  <p>{teacher.bio}</p>
                </div>
                <footer>
                  <span>Preço/hora R$ {teacher.cost}</span>
                  <Button href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                  </Button>
                </footer>
              </div>
            ))}
          </div>
        </Content>
      </Container>
    </>
  );
}

export default TeacherList;
