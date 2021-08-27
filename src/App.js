import Topbar from './Components/topbar/Topbar.jsx';
import SecondaryTop from './Components/secondaryTop/SecondaryTop.jsx';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Write, Perfil, Enter, Register, Single, CatsCultura, CatsDesporto, CatsPolitica, CatsSaude, CatsSustentabilidade, CatsEconomia, CatsTecnologia } from './Pages';
import { useContext } from "react";
import { Context } from "./Context/Context";

const Container = styled.div`
      width: 100%;
`


function App() {
  const user = useContext(Context);
  return (
    <>
    <Router>
      <Container>
          <Topbar/>
          <SecondaryTop/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/write'>{!user ? <Write /> : <Enter />}</Route>
                <Route path='/enter'>{!user ? <Home /> : <Enter />}</Route>
                <Route path='/register'> {!user ? <Home /> : <Register />} </Route>
                <Route path='/perfil'>{user ? <Perfil /> : <Enter />}</Route>
                <Route path="/post/:postId"> <Single/></Route>

                <Route path="/cultura"> <CatsCultura/></Route>
                <Route path="/desporto"> <CatsDesporto/></Route>
                <Route path="/politica"> <CatsPolitica/></Route>
                <Route path="/saude"> <CatsSaude/></Route>
                <Route path="/sustentabilidade"><CatsSustentabilidade/></Route>
                <Route path="/economia"><CatsEconomia/></Route>
                <Route path="/tecnologia"><CatsTecnologia/></Route>
            </Switch>
      </Container>
    </Router>
    </>
  );
}

export default App;
