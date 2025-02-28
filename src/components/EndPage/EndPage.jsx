import logo from "../../assets/images/iteration-1-images/logo.svg";
import "./EndPage.css";

function EndPage() {
  return (
    <div className="back">
      <div className="mid">
        <img src={logo} alt="" />
        <div className="message">
          <span>Tebrikler!</span>
          <span>Siparişiniz Alındı.</span>
        </div>
      </div>
    </div>
  );
}

export default EndPage;
