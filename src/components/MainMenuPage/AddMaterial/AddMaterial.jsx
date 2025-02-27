import {
    Label,
    FormGroup,
    Input,
    FormFeedback
  } from "reactstrap";
function AddMaterial({pizzaMalzemeler,siparisMalzemeGuncelle,pizzaArr}){



    return(   <div className="addMaterial">
        <p className="optionHeader" style={{ paddingBottom: "15px" }}>
          Ek Malzemeler
        </p>
        <p style={{ fontWeight: "500" }}>
          En Fazla 10 malzeme seçebilirsiniz.5₺
        </p>
        <div className="materials">
          {pizzaMalzemeler.map((item, index) => {
            return (
              <div key={item}>
                {" "}
                <FormGroup>
                  <Input
                    type="checkbox"
                    id={item}
                    value={item}
                    onChange={siparisMalzemeGuncelle}
                    checked={pizzaArr.siparisMalzeme.includes(item)}
                    disabled={
                      pizzaArr.siparisMalzeme.length >= 10 &&
                      !pizzaArr.siparisMalzeme.includes(item)
                    }
                    data-cy={`checkboxCy${index}`}
                  />
                  <Label
                    className="hoverPointer"
                    htmlFor={item}
                    check
                    style={{ marginLeft: "10px", fontWeight: "600" }}
                  >
                    {item}
                  </Label>
                </FormGroup>
              </div>
            );
          })}
        </div>
        {pizzaArr.siparisMalzeme.length < 4 && (
          <FormFeedback style={{ display: "block", marginTop: "10px" }}>
            Lütfen en az 4 malzeme seçiniz.
          </FormFeedback>
        )}
      </div>);
}

export default AddMaterial;