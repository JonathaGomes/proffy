import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import rocketImage from "../../assets/images/icons/rocket.svg";
import warningImage from "../../assets/images/icons/warning.svg";

import {
  SignUpContainer,
  TopContainer,
  TopContent,
  BottomContainer,
  BottomContent,
  InputBlock,
  ScheduleInputBlock,
  MessageError,
	SelectBlock
} from "./styles";

type FormDataProps = {
  fullName: string;
  email: string;
  photoURL: string;
  whatsapp: string;
  biography: string;
	typeUser: string;
};

const schema = yup.object().shape({
  fullName: yup.string().required("O nome completo é obrigatório!"),
  email: yup.string().email().required("O email é obrigatório!"),
  photoURL: yup.string().url().required("A url da sua foto é obrigatória!"),
  whatsapp: yup.string().required("O número do seu whatsapp é obrigatório!"),
  biography: yup.string().required("Sua biografia é obrigatória!"),
	typeUser: yup.string().required("O tipo de usuário é obrigatório!").nullable()
});

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<FormDataProps> = data => console.log(data);

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
                Prepare-se! <br /> vai ser o máximo.
              </span>
            </p>
          </div>
        </TopContent>
      </TopContainer>
      <BottomContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BottomContent>
            <fieldset>
              <legend>Seus dados</legend>
              <InputBlock>
                <label htmlFor="fullName">Nome Completo</label>
                <input id="fullName" {...register("fullName")} />
                {errors.fullName && (
                  <MessageError>{errors.fullName?.message}</MessageError>
                )}
              </InputBlock>
              <InputBlock>
                <label htmlFor="email">Seu melhor email</label>
                <input id="email" {...register("email")} />
                {errors.email && (
                  <MessageError>{errors.email?.message}</MessageError>
                )}
              </InputBlock>
							<SelectBlock>
								<label>O que você deseja ser?</label>
								<div>
									<label htmlFor="student">
										Um aluno a procura de um proffy
										<input type="radio" {...register("typeUser")} name="typeUser" value="student" id="student" />
									</label>
								</div>
								<div>
									<label htmlFor="proffy">
										Um proffy e poder dar aulas
										<input type="radio" {...register("typeUser")} name="typeUser" value="proffy" id="proffy" />
									</label>
								</div>
								{errors.typeUser && (
									<MessageError>{errors.typeUser?.message}</MessageError>
								)}
							</SelectBlock>
              <InputBlock>
                <div>
                  <div>
                    <label htmlFor="photoURL">
                      Link da sua foto <span>(comece com https://)</span>
                    </label>
                    <input type="url" id="photoURL" {...register("photoURL")} />
										{errors.photoURL && (
											<MessageError>{errors.photoURL?.message}</MessageError>
										)}
                  </div>
                  <div>
                    <label htmlFor="whatsapp">Whatsapp</label>
                    <input
                      type="string"
                      id="whatsapp"
                      {...register("whatsapp")}
                    />
										{errors.whatsapp && (
											<MessageError>{errors.whatsapp?.message}</MessageError>
										)}
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
                  {...register("biography")}
                ></textarea>
								{errors.biography && (
									<MessageError>{errors.biography?.message}</MessageError>
								)}
              </InputBlock>
            </fieldset>
            {/*{teste === "teacher" && (
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
            )}*/}
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
