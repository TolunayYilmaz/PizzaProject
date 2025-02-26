import homeImg from "../../assets/images/iteration-1-images/home-banner.png"
import logo from "../../assets/images/iteration-1-images/logo.svg"
import "../../reset.css"
import "./HomePage.css"
import { Button } from 'reactstrap'
import { useHistory } from "react-router-dom";

 function mainmenu(){
    
const history=useHistory();
function handleClick() {
    history.push("/mainmenu");
  }

    return(
 <><img src={homeImg} className='pageImg' alt="" />
 <main>
     <div className='mid'>
         <img src={logo} alt="" />
         <div className='header'>
         <div>KOD ACIKTIRIR</div>
         <div>PİZZA,DOYURUR</div>
         </div> 
         <button className='homeButton' onClick={handleClick}>ACIKTIM</button>
     </div>
 </main>
 </>
    
   )
}
export default mainmenu