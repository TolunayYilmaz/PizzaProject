import { FormGroup, Label, Input, Col, Card, Button, ButtonGroup, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import logo from "../../assets/images/iteration-1-images/logo.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MainMenu.css"
function MainMenu() {



  const order = {
    description: "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir",
    name: "Position Absolute Acı Pizza",
    price: 85.50,
    score: 4.9,
    comments: 200
  }
  const doughType = ["Hamur Kalınlığı", "İnce Hamur",
    "Orta Kalınlıkta Hamur",
    "Kalın Hamur",
    "Ekstra Kalın Hamur",
    "Gevrek & İnce Hamur"]

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
                name="radio2"
                type="radio"
                id="small"
              />
              {' '}
              <Label className="hoverPointer" htmlFor='small'>
                Küçük
              </Label>
            </FormGroup>
            <FormGroup>
              <Input
                id="medium"
                name="radio2"
                type="radio"
              />
              {' '}
              <Label className="hoverPointer" htmlFor='medium'>
                Orta
              </Label>
            </FormGroup>
            <FormGroup  >
              <Input
                id="large"
                name="radio2"
                type="radio"
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
            <FormGroup >
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                defaultValue=""
                style={{ color: "black" }}
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
          <p>En Fazla 10 malzeme seçebilirsiniz.5₺</p>
          <div className='materials'>
            {malzemeler.map((item) => {

              return <div key={item}> <FormGroup >
                <Input id={item} type="checkbox" />
                <Label className='hoverPointer' htmlFor={item} check style={{ marginLeft: "10px", fontWeight: "600" }}>
                  {item}
                </Label>
              </FormGroup></div>
            })}
          </div>
        </div>

        <div className='orderFinish'>
          <p className="optionHeader">Sipariş Notu</p>

          <Input

            style={{ width: "533px", height: "56px"  }}

            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
          />
          
      
          <div style={{margin:"20px auto", width: "100%", height: "1px", boxShadow: "0px 0.5px 0px #5F5F5F80" }}></div>

         <div className='resultGroup'>
        
            <ButtonGroup style={{ width: "170px", height: "57px"}}>
              <Button style={{ background: "#FDC913", color: "black", fontWeight: "bold",border:"none" }}>
                -
              </Button>
              <Button style={{  disabled:true,background: "white",border: "1px solid #5F5F5F80", marginRight: "1px" ,cursor:"default", boxShadow:"none" }}>

              </Button>
              <Button style={{ background: "#FDC913", color: "black", fontWeight: "bold" ,border:"none"}}>
                +
              </Button>
            </ButtonGroup>
          
         
            <Card
              style={{
                width: '350px',
                height: '255px'
              }}
            >

              <CardBody>
                <CardTitle tag="h5">
                  Sipariş Toplamı
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Seçimler
                </CardSubtitle>
                <CardSubtitle
                  className="mb-2"
                  tag="h6"
                  style={{color:"red"}}
                >
                  Toplam
                </CardSubtitle>

                <Button>
                  Button
                </Button>
              </CardBody>
            </Card>
         
         </div>
        </div>

      </main>
    </div>);
}

export default MainMenu;
