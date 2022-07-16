import DashBoard from "./Components/Dashboard";
import InputCard from "./Components/InputCard/Inputcard.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WelcomePage from "./Components/Welcome";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route exact path="/dashboard">
            <DashBoard />
          </Route>
          <Route exact path="/play">
            <InputCard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
