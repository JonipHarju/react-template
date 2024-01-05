import { useSelector } from "react-redux";

function About() {
  const countState = useSelector(
    (state: { count: { value: number } }) => state.count.value
  );

  return (
    <>
      <h1>About</h1>
      <p>This is the about page!</p>
      <p>Count is {countState}</p>
    </>
  );
}
export default About;
