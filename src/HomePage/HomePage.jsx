import homeImg from "../assets/images/iteration-1-images/home-banner.png"
import logo from "../assets/images/iteration-1-images/logo.svg"
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
         <p>KOD ACIKTIRIR</p>
         <p>PİZZA,DOYURUR</p>
         </div>
       
         <Button className='homeButton' onClick={handleClick}>ACIKTIM</Button>
     </div>
 </main>
 </>
    
   )
}
export default mainmenu