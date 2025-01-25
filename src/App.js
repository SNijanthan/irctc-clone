import NavBar from "./Components/NavBar";
import Body from "./Components/Body";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 40%;
  margin: auto;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const App = () => {
  return (
    <>
      <AppContainer>
        <Main>
          <NavBar />
          <Body />
        </Main>
      </AppContainer>
    </>
  );
};

export default App;
