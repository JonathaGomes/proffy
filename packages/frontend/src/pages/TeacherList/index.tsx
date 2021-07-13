import { Link } from "react-router-dom";

function TeacherList() {
  return (
    <div>
      <h1>Teacher List</h1>
      <Link to={"/"}>Ir para a home</Link>
      <Link to={"/give-classes"}>Ir para o formulário</Link>
    </div>
  );
}

export default TeacherList;
