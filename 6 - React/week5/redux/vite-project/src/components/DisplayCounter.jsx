import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((state) => state.value);
  return <h1>{counter}</h1>;
};

export default DisplayCounter;
