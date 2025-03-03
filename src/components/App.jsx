import HomePage from "./HomePage/HomePage.jsx";
import MainMenu from "./MainMenuPage/MainMenu.jsx";
import EndPage from "./EndPage/EndPage.jsx";
import Footer from "./Footer/Footer.jsx"
import HomeMenuHead from "./HomePage/HomeMenuHead.jsx";
import HomeMenu from "./HomePage/HomeMenu.jsx"
import { Switch, Route } from "react-router-dom";



function App() {
  return (
    <>
      <main>
      <Switch>
        <Route exact path="/">
          <HomePage />
          <HomeMenuHead/>
          <HomeMenu/>

        </Route>
        <Route path="/mainmenu">
          <MainMenu />
        </Route>
        <Route path="/endpage">
          <EndPage />
        </Route>
      </Switch>
     <Footer/>
    </main>
   
    </>
  

  );
}

export default App;
