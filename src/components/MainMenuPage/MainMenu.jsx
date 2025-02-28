import { useEffect, useState } from "react";
import logo from "../../assets/images/iteration-1-images/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainMenu.css";
import { useHistory,Link } from "react-router-dom";
import axios from "axios";
import OrderFinish from "./OrderFinish/OrderFinish";
import AddMaterial from "./AddMaterial/AddMaterial";
import Option from "./Option/Option";
import Order from "./Order/Order";
function MainMenu() {
  const history = useHistory();
  const doughType = [
    "Hamur Kalınlığı",
    "İnce Hamur",
    "Orta Kalınlıkta Hamur",
    "Kalın Hamur",
    "Ekstra Kalın Hamur",
    "Gevrek & İnce Hamur",
  ];
  const order = {
    description:
      "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir",
    name: "Position Absolute Acı Pizza",
    price: 85.5,
    score: 4.9,
    comments: 200,
  };
  const malzemeler = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalapeno",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak",
  ];

  const [orderPizza, setOrderPizza] = useState({
    isim: "",
    boyut: "",
    hamurTipi: "",
    siparisMalzeme: [],
    pizzaAdet: 1,
    malzemeFiyat: 0,
    toplamFiyat: order.price,
    yorum: "",
  });
  const isDisabled =
    !orderPizza.isim ||
    !orderPizza.boyut ||
    !orderPizza.hamurTipi ||
    orderPizza.siparisMalzeme.length < 4;

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !orderPizza.isim ||
      !orderPizza.boyut ||
      !orderPizza.hamurTipi ||
      orderPizza.siparisMalzeme.length < 4
    ) {
      console.error("Form eksik, gönderim engellendi.");
      return;
    }

    axios
      .post("https://reqres.in/api/pizza", orderPizza)
      .then((response) => {
        console.log("API Yanıtı:", response.data);
        history.push("/endpage");
      })
      .catch((error) => {
        console.error("API Hatası:", error);
      });
  }

  function siparisMalzemeGuncelle(event) {
    const { checked, value } = event.target;

    if (checked) {
      if (orderPizza.siparisMalzeme.length >= 10) {
        event.target.checked = false;
        return;
      }

      setOrderPizza((prevOrderPizza) => ({
        ...prevOrderPizza,
        siparisMalzeme: [...prevOrderPizza.siparisMalzeme, value],
      }));

      malzemeFiyatGuncelle(5);
    } else {
      setOrderPizza((prevOrderPizza) => ({
        ...prevOrderPizza,
        siparisMalzeme: prevOrderPizza.siparisMalzeme.filter(
          (item) => item !== value
        ),
      }));

      malzemeFiyatGuncelle(-5);
    }
  }

  function handleChangePizzaCount(adet) {
    setOrderPizza((prevOrderPizza) => ({
      ...prevOrderPizza,
      pizzaAdet: prevOrderPizza.pizzaAdet + adet,
    }));
  }

  function malzemeFiyatGuncelle(malzeme) {
    setOrderPizza((prevOrderPizza) => ({
      ...prevOrderPizza,
      malzemeFiyat: prevOrderPizza.malzemeFiyat + malzeme,
    }));
  }

  function toplamFiyatGuncelle(adet) {
    setOrderPizza({
      ...orderPizza,
      toplamFiyat: (orderPizza.malzemeFiyat + order.price) * adet,
    });
  }

  function handleChange(event) {
    setOrderPizza({ ...orderPizza, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    toplamFiyatGuncelle(orderPizza.pizzaAdet);
    console.log(orderPizza);
  }, [
    orderPizza.malzemeFiyat,
    orderPizza.pizzaAdet,
    orderPizza.boyut,
    orderPizza.hamurTipi,
  ]);

  return (
    <div className="mainMenuPage">
      <header className="headerSide">
        <div className="headImg">
          <img src={logo} alt="" />
        </div>
        <div className="pageMap">
          <Link to="/" style={{color:"white"}}>
            Anasayfa
          </Link>{" "}
          - Sipariş Oluştur
        </div>
      </header>
      <div className="mainMenu">
        <Order order={order} />

        <Option
          change={handleChange}
          pizzaArr={orderPizza}
          doughType={doughType}
        />
        <AddMaterial
          pizzaMalzemeler={malzemeler}
          siparisMalzemeGuncelle={siparisMalzemeGuncelle}
          pizzaArr={orderPizza}
        />
        <OrderFinish
          submit={handleSubmit}
          pizzaCount={handleChangePizzaCount}
          pizzaArr={orderPizza}
          disabelVar={isDisabled}
          change={handleChange}
        />
      </div>
    </div>
  );
}

export default MainMenu;
