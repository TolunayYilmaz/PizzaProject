import {
    Card,
    Button,
    ButtonGroup,
    CardBody,
    CardTitle,
    CardSubtitle,
    FormGroup,
    Input,
    FormFeedback
  } from "reactstrap";
function OrderFinish({submit,pizzaCount,pizzaArr,disabelVar,change}) {
  return (
    <div className="orderFinish">
      <p className="optionHeader">Adınız</p>

      <FormGroup>
        <Input
          id="isim"
          name="isim"
          style={{ width: "100%", height: "56px" }}
          onChange={change}
          placeholder="Lütfen isminizi giriniz."
          invalid={pizzaArr.isim.length < 3}
          data-cy="nameCy"
        />
        <FormFeedback>Lütfen isim alanı boş bırakmayınız.</FormFeedback>
      </FormGroup>

      <div
        style={{
          margin: "20px auto",
          width: "100%",
          height: "1px",
          boxShadow: "0px 0.5px 0px #5F5F5F80",
        }}
      ></div>
      <p className="optionHeader">Sipariş Notu</p>

      <Input
        name="yorum"
        style={{ width: "100%", height: "56px" }}
        onChange={change}
        placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
        data-cy="commentCy"
      />

      <div
        style={{
          margin: "20px auto",
          width: "100%",
          height: "1px",
          boxShadow: "0px 0.5px 0px #5F5F5F80",
        }}
      ></div>

      <div className="resultGroup">
        <Card className="resultCard">
          <CardBody className="cardDesign">
            <CardTitle tag="h5" style={{ marginTop: "10px" }}>
              Sipariş Toplamı
            </CardTitle>
            <div>
              <div className="cardTextDesign">
                <CardSubtitle
                  tag="h6"
                  style={{ margin: "0px", color: "#5F5F5F" }}
                >
                  Seçimler
                </CardSubtitle>
                <h6>{pizzaArr.malzemeFiyat}₺</h6>
              </div>
              <div className="cardTextDesign">
                <CardSubtitle tag="h6" style={{ color: "red", margin: "0px" }}>
                  Toplam
                </CardSubtitle>
                <h6 style={{ color: "red" }}>{pizzaArr.toplamFiyat}₺</h6>
              </div>
            </div>
          </CardBody>
        </Card>
        <ButtonGroup className="resultButton">
          <Button
            style={{
              background: "#FDC913",
              color: "black",
              fontWeight: "bold",
              border: "none",
            }}
            onClick={() =>
              pizzaArr.pizzaAdet > 1 ? pizzaCount(-1) : ""
            }
            data-cy="butonSmallCy"
          >
            -
          </Button>
          <Button
            style={{
              color: "black",
              fontWeight: "600",
              disabled: true,
              background: "white",
              border: "1px solid #5F5F5F80",
              marginRight: "1px",
              cursor: "default",
              boxShadow: "none",
            }}
          >
            {pizzaArr.pizzaAdet}
          </Button>
          <Button
            style={{
              background: "#FDC913",
              color: "black",
              fontWeight: "bold",
              border: "none",
            }}
            onClick={() => pizzaCount(1)}
            data-cy="butonBigCy"
          >
            +
          </Button>
        </ButtonGroup>

        <Button
          className="cardButton"
          onClick={submit}
          disabled={disabelVar}
          style={{ background: "#FDC913", color: "black" }}
          data-cy="butonClick"
        >
          Sipariş Ver
        </Button>
      </div>
    </div>
  );
}
export default OrderFinish;
