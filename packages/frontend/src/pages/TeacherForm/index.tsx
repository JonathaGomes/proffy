import { Link } from "react-router-dom";

function TeacherForm() {
  return (
    <div>
      <h1>Teacher Form</h1>
      <Link to={"/"}>Ir para a home</Link>
      <Link to={"/study"}>Ir para a lista de proffys</Link>
    </div>
  );
}

export default TeacherForm;
