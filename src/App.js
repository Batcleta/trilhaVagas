import { Route, Switch } from "react-router";
import styled from "styled-components";
// components
import SideMenu from "./components/templates/SideMenu";
// Pages
import Candidatos from "./pages/Candidatos";
import CreateVaga from "./pages/CreateVaga";

function App() {
  return (
    <AppWrapper>
      <SideMenu />
      <Main>
        <Switch>
          <Route exact path="/" component={Candidatos} />
          <Route path="/createVaga" component={CreateVaga} />
        </Switch>
      </Main>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  grid-template-areas: "sideMenu main";
`;
// Separar components
const Main = styled.div``;
