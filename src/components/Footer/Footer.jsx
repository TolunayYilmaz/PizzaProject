import "./Footer.css";
import logoFooter from "../../assets/images/iteration-2-images/footer/logo-footer.svg";
import icon1 from "../../assets/images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "../../assets/images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "../../assets/images/iteration-2-images/footer/icons/icon-3.png";

import li0 from "../../assets/images/iteration-2-images/footer/insta/li-0.png";
import li1 from "../../assets/images/iteration-2-images/footer/insta/li-1.png";
import li2 from "../../assets/images/iteration-2-images/footer/insta/li-2.png";
import li3 from "../../assets/images/iteration-2-images/footer/insta/li-3.png";
import li4 from "../../assets/images/iteration-2-images/footer/insta/li-4.png";
import li5 from "../../assets/images/iteration-2-images/footer/insta/li-5.png";

import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    const pizzaArray = [
        "Terminal Pizza",
        "5 Kişilik Hackathlon Pizza",
        "useEffect Tavuklu Pizza",
        "Beyaz Console Frosty",
        "Testler Geçti Mutlu Burger",
        "Position Absolute Acı Burger"
    ];

   
    const imgArr = [li0, li1, li2, li3, li4, li5];

    return (
        <footer>
            <div>
                <div className="topFooter">
                    <div>
                        <img src={logoFooter} style={{ marginBottom: "15%" }} alt="Footer Logo" />
                        <p>
                            <img src={icon1} className="icon" />
                            341 Londonderry Road
                            <p style={{ marginLeft: "8%" }}>Istanbul Türkiye</p>
                        </p>

                        <p>
                            {" "}
                            <img src={icon2} className="icon" />
                            aciktim@teknolojikyemekler.com
                        </p>
                        <p>
                            {" "}
                            <img src={icon3} className="icon" />
                            +90 216 123 45 67
                        </p>
                    </div>

                    <div >
                        <h3 style={{ fontWeight: "500", marginBottom: "7%" }}>Hot Menu</h3>
                        {pizzaArray.map((item, index) => {
                            return <p style={{ margin: "0" }} key={index}>{item}</p>
                        })}
                    </div>

                    <div>
                        <h3 style={{ fontWeight: "500", marginBottom: "7%" }}>Instagram</h3>
                        <div>
                       
                            {imgArr.map((img, index) => (
                                <img 
                                    key={index} 
                                    src={img} 
                                    alt={`Instagram image ${index}`} 
                                    style={{ margin:"0", padding:"0", width:"105px",height:"95px "}} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="botFooter">© 2023 Teknolojik Yemekler. <i class="fa fa-twitter" style={{width:"18px",height:"18px", marginRight:"3%", padding:"0px",objectFit:"contain"}}></i></div>
            </div>
         
        </footer>
    );
}

export default Footer;
