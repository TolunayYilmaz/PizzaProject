import logo from "../../assets/images/iteration-1-images/logo.svg"
import "./EndPage.css"

function EndPage(){
    return(<>
      <div className="back"></div>
    
            <div className="mid">
            <img src={logo} alt=""/>
              
                <p className="message">Tebrikler! <br/>Siparişiniz Alındı.</p>

         </div>
 
 
       
     </>)
}

export default EndPage;