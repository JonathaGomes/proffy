import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

function TeacherList() {
  return (
    <div>
      <Helmet>
        <title>Proffy | Encontre Seu Proffy</title>
      </Helmet>
      <Header title="Estudar" />
      <h1>Teacher List</h1>
      <Link to={"/"}>Ir para a home</Link>
      <Link to={"/give-classes"}>Ir para o formulário</Link>
    </div>
  );
}

export default TeacherList;
