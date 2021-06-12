import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <Wrapper>
      <Sidebar />
      <Main />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`;
export default App;
