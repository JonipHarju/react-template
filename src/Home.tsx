import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p>You are currently viewing the home page!</p>
      <p>
        <Link to={"/about"}>click me to go to the about page</Link>
      </p>
    </>
  );
}

export default Home;
