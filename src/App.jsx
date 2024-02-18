import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: purple;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <H1>The Wild Oasis</H1>
    </>
  );
}
export default App;
