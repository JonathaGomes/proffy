import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to={"/give-classes"}>Ir para o formulário</Link>
      <Link to={"/study"}>Ir para a lista de proffys</Link>
    </div>
  );
}

export default Home;
