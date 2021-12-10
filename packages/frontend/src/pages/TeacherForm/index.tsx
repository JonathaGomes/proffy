import Header from "../../components/Header";
import { Helmet } from "react-helmet";

function TeacherForm() {
  return (
    <>
      <Helmet>
        <title>Proffy | Cadastro</title>
      </Helmet>
      <Header title="Dar aulas" />
    </>
  );
}

export default TeacherForm;
