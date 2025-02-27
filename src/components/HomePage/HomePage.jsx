import homeImg from "../../assets/images/iteration-1-images/home-banner.png";
import logo from "../../assets/images/iteration-1-images/logo.svg";
import "../../reset.css";
import "./HomePage.css";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function mainmenu() {
  const history = useHistory();
  function handleClick() {
    history.push("/mainmenu");
  }

  return (
    <>
      <img src={homeImg} className="pageImg" alt="" />
      <main>
        <div className="mid">
          <img src={logo} alt="" />

          <div className="header">
            <span>KOD ACIKTIRIR</span>
            <span>PIZZA, DOYURUR</span>
          </div>

          <button className="homeButton" data-cy="startCy" onClick={handleClick}>
            ACIKTIM
          </button>
        </div>
      </main>
    </>
  );
}
export default mainmenu;
