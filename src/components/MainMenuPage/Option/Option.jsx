import { Label, FormGroup, Input, FormFeedback,Col} from "reactstrap";
function Option({change,pizzaArr,doughType}) {
  return (
    <div className="option">
      <Col>
        <div className="optionOrder">
          <Label className="optionHeader">
            Boyut Seç <span style={{ color: "red" }}>*</span>
          </Label>
        </div>
        <FormGroup>
          <Input
            name="boyut"
            type="radio"
            id="small"
            value="Küçük"
            onClick={change}
            data-cy="radioSmall"
          />{" "}
          <Label className="hoverPointer" htmlFor="small">
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
            onClick={change}
            data-cy="radioMedium"
          />{" "}
          <Label className="hoverPointer" htmlFor="medium">
            Orta
          </Label>
        </FormGroup>
        <FormGroup>
          <Input
            id="large"
            name="boyut"
            type="radio"
            value="Büyük"
            key="boyut"
            onClick={change}
            data-cy="radioBig"
          />{" "}
          <Label className="hoverPointer" htmlFor="large">
            Büyük
          </Label>
        </FormGroup>
        {!pizzaArr.boyut && (
          <FormFeedback style={{ display: "block", marginTop: "10px" }}>
            Lütfen boyut seçiniz.
          </FormFeedback>
        )}
      </Col>
      <Col>
        <div className="optionOrder">
          <Label className="optionHeader" htmlFor="exampleSelect">
            Hamur Seç <span style={{ color: "red" }}>*</span>
          </Label>
        </div>
        <FormGroup onChange={change}>
          <Input
            id="exampleSelect"
            name="hamurTipi"
            type="select"
            defaultValue=""
            style={{ color: "black", width: "auto" }}
            invalid={!pizzaArr.hamurTipi}
            data-cy="elementCy"
          >
            {doughType.map((item,index) => {
              if (item === "Hamur Kalınlığı") {
                return (
                  <option key={index} style={{ color: "black" }} value="" disabled hidden>
                    {item}
                  </option>
                );
              } else {
                return (
                  <option style={{ color: "black" }} key={index} value={item}>
                    {item}
                  </option>
                );
              }
            })}
          </Input>
          <FormFeedback>Lütfen hamur kalınlığını seçiniz.</FormFeedback>
        </FormGroup>
      </Col>
    </div>
  );
}

export default Option;
