import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProgrammingSkill from "./pages/ProgrammingSkill";
import { HomeTemplates } from "./templates/HomeTemplates";

function App() {
  return (
    <BrowserRouter >
      <HomeTemplates exact path="/" Component={HomePage} />
      <Switch>
        <HomeTemplates exact path="/home" Component={HomePage} />
        <HomeTemplates exact path="/programming" Component={ProgrammingSkill} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
