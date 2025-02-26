import { FormGroup, Label, Input, Col, Card, Button, ButtonGroup, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { useEffect, useState } from 'react';
import logo from "../../assets/images/iteration-1-images/logo.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MainMenu.css"
import { useHistory } from "react-router-dom";
function MainMenu() {
  const history=useHistory();
  const doughType = ["Hamur Kalınlığı", "İnce Hamur",
    "Orta Kalınlıkta Hamur",
    "Kalın Hamur",
    "Ekstra Kalın Hamur",
    "Gevrek & İnce Hamur"]
  const order = {
    description: "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir",
    name: "Position Absolute Acı Pizza",
    price: 85.50,
    score: 4.9,
    comments: 200
  }
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
    "Kabak"
  ];

  const [orderPizza, setOrderPizza] = useState({
    isim: "",
    boyut: "",
    hamurTipi: "",
    siparisMalzeme: [],
    pizzaAdet: 1,
    malzemeFiyat: 0,
    toplamFiyat: order.price,
    yorum:""
  })

  function siparisMalzemeGuncelle(event) {

    const { checked, value } = event.target;


    if (checked) {

      if (orderPizza.siparisMalzeme.length >= 10) {
        event.target.checked = false;
        return;
      }


      setOrderPizza((prevOrderPizza) => ({
        ...prevOrderPizza,
        siparisMalzeme: [...prevOrderPizza.siparisMalzeme, value]
      }));


      malzemeFiyatGuncelle(5);
    } else {

      setOrderPizza((prevOrderPizza) => ({
        ...prevOrderPizza,
        siparisMalzeme: prevOrderPizza.siparisMalzeme.filter(
          (item) => item !== value
        )
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

    setOrderPizza({ ...orderPizza, toplamFiyat: (orderPizza.malzemeFiyat + order.price) * adet })
  }



  function handleChange(event){
    setOrderPizza({ ...orderPizza, [event.target.name]: event.target.value });
  }

  function handleClick() {
    history.push("/endpage");
  }

  useEffect(() => {
    toplamFiyatGuncelle(orderPizza.pizzaAdet);
    console.log(orderPizza);
  }, [orderPizza.malzemeFiyat, orderPizza.pizzaAdet, orderPizza.boyut, orderPizza.hamurTipi]);



  return (
    <div className='mainMenuPage'>
      <header className='headerSide'>
        <div className='headImg'><img src={logo} alt="" /></div>
        <div className='pageMap'>Anasayfa - Sipariş Oluştur</div>
      </header>
      <main className='mainMenu'>

        <div className='order' style={{ color: "#5F5F5F" }}>
          <p style={{ fontWeight: "600", color: "black", fontSize: "22px" }}>{order.name}</p>

          <div className='pizzaValues'>
            <p style={{ flex: "60%", color: "black", fontWeight: "700", fontSize: "28px" }}>{order.price}₺</p>
            <p style={{ flex: "20%", fontWeight: "400", fontSize: "16px" }}>{order.score}</p>
            <p style={{ fontWeight: "400", fontSize: "16px" }}>({order.comments})</p>
          </div>
          <p>{order.description}</p>
        </div>
        <div className='option'>

          <Col ><div className='optionOrder'>
            <Label className='optionHeader'>Boyut Seç <span style={{ color: "red" }}>*</span></Label></div>
            <FormGroup  >
              <Input
                name="boyut"
                type="radio"
                id="small"
                value="Küçük"
                
                onClick={handleChange}
              />
              {' '}
              <Label className="hoverPointer" htmlFor='small'>
                Küçük
              </Label>
            </FormGroup>
            <FormGroup>
              <Input
                id="medium"
                name="boyut"
                type="radio"
                value="Orta"
                key="boyut"
                onClick={handleChange}
              />
              {' '}
              <Label className="hoverPointer" htmlFor='medium'>
                Orta
              </Label>
            </FormGroup>
            <FormGroup  >
              <Input
                id="large"
                name="boyut"
                type="radio"
                value="Büyük"
                key="boyut"
                onClick={handleChange}
              />
              {' '}
              <Label className="hoverPointer" htmlFor='large'>
                Büyük
              </Label>
            </FormGroup>
          </Col>
          <Col >
            <div className='optionOrder'>
              <Label className='optionHeader' htmlFor="exampleSelect">Hamur Seç <span style={{ color: "red" }}>*</span></Label>
            </div>
            <FormGroup onChange={handleChange}>
              <Input
                id="exampleSelect"
                name="hamurTipi"
                type="select"
                defaultValue=""
                style={{ color: "black", width: "auto" }}

              >
                {doughType.map((item) => {

                  if (item === "Hamur Kalınlığı") {
                    return <option style={{ color: "black" }} value="" disabled hidden>
                      {item}
                    </option>
                  }
                  else {
                    return <option style={{ color: "black" }} key={item} value={item}>{item}</option>
                  }

                })}
              </Input></FormGroup>
          </Col>


        </div>

        <div className='addMaterial'>
          <p className='optionHeader' style={{ paddingBottom: "15px" }}>Ek Malzemeler</p>
          <p style={{ fontWeight: "500" }}>En Fazla 10 malzeme seçebilirsiniz.5₺</p>
          <div className='materials'>
            {malzemeler.map((item) => {

              return <div key={item}> <FormGroup >
                <Input
                  type="checkbox"
                  id={item}
                  value={item}
                  onChange={siparisMalzemeGuncelle}
                  checked={orderPizza.siparisMalzeme.includes(item)}
                  disabled={
                    orderPizza.siparisMalzeme.length >= 10 && !orderPizza.siparisMalzeme.includes(item)
                  }
                />
                <Label className='hoverPointer' htmlFor={item} check style={{ marginLeft: "10px", fontWeight: "600" }}>
                  {item}
                </Label>
              </FormGroup></div>
            })}
          </div>
        </div>

        <div className='orderFinish'>
          <p className="optionHeader">Adınız</p>

          <Input
            name='isim'
            style={{ width: "533px", height: "56px" }}
            onChange={handleChange}
            placeholder="Lütfen isminizi giriniz."
          />


          <div style={{ margin: "20px auto", width: "100%", height: "1px", boxShadow: "0px 0.5px 0px #5F5F5F80" }}></div>
          <p className="optionHeader">Sipariş Notu</p>

          <Input
             name='yorum'
            style={{ width: "533px", height: "56px" }}
             onChange={handleChange}
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
          />


          <div style={{ margin: "20px auto", width: "100%", height: "1px", boxShadow: "0px 0.5px 0px #5F5F5F80" }}></div>



          <div className='resultGroup'>

            <ButtonGroup style={{ width: "170px", height: "57px" }} >
              <Button style={{ background: "#FDC913", color: "black", fontWeight: "bold", border: "none" }} onClick={() => (orderPizza.pizzaAdet > 1 ? handleChangePizzaCount(-1) : "")}>
                -
              </Button>
              <Button style={{ color: "black", fontWeight: "600", disabled: true, background: "white", border: "1px solid #5F5F5F80", marginRight: "1px", cursor: "default", boxShadow: "none" }}>
                {orderPizza.pizzaAdet}
              </Button>
              <Button style={{ background: "#FDC913", color: "black", fontWeight: "bold", border: "none" }} onClick={() => handleChangePizzaCount(1)}>
                +
              </Button>
            </ButtonGroup>


            <Card
              style={{
                width: '350px',
                height: '255px'
              }}
            >

              <CardBody className='cardDesign'>
                <CardTitle tag="h5" style={{ marginTop: "10px" }}>
                  Sipariş Toplamı
                </CardTitle>
                <div>
                  <div className='cardTextDesign'>
                    <CardSubtitle

                      tag="h6"
                      style={{ margin: "0px" }}
                    >
                      Seçimler
                    </CardSubtitle>
                    <h6>{orderPizza.malzemeFiyat}₺</h6>
                  </div>
                  <div className='cardTextDesign'>
                    <CardSubtitle

                      tag="h6"
                      style={{ color: "red", margin: "0px" }}
                    >
                      Toplam
                    </CardSubtitle>
                    <h6 style={{ color: "red" }}>{orderPizza.toplamFiyat}₺</h6>
                  </div>

                </div>

              </CardBody>
              <Button onClick={handleClick} disabled={
                orderPizza.siparisMalzeme.length < 4 || !orderPizza.boyut
              } style={{ fontSize: "18px", fontWeight: "500", width: "100%", height: "62px", color: "black", background: "#FDC913", border: "none" }}>
                Sipariş Ver
              </Button>
            </Card>

          </div>
        </div>

      </main>
    </div>);
}

export default MainMenu;
