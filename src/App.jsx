import GlobalStyles from "./styles/GlobalStyles";

import Heading from "./ui/Heading";
import Row from "./ui/Row";

function App() {
  return (
    <>
      <GlobalStyles />

      <Row>
        <Heading as="h1">The Wild Oasis</Heading>
      </Row>

      <div>
        <Heading as="h2">The Wild Oasis</Heading>
      </div>
    </>
  );
}
export default App;
