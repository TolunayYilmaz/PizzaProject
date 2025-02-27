import HomePage from "./HomePage/HomePage.jsx";
import MainMenu from "./MainMenuPage/MainMenu.jsx";
import EndPage from "./EndPage/EndPage.jsx";

import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/mainmenu">
          <MainMenu />
        </Route>
        <Route path="/endpage">
          <EndPage />
        </Route>
      </Switch>
      <footer>FooterDesign</footer>
    </main>

  );
}

export default App;
