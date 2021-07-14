import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function TeacherForm() {
  return (
    <div>
      <Helmet>
        <title>Proffy | Dar Aulas</title>
      </Helmet>
      <h1>Teacher Form</h1>
      <Link to={"/"}>Ir para a home</Link>
      <Link to={"/study"}>Ir para a lista de proffys</Link>
    </div>
  );
}

export default TeacherForm;
