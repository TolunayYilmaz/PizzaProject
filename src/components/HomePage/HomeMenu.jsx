import "./HomeMenu.css";
import Icon1 from "../../assets/images/iteration-2-images/icons/1.svg";
import Icon2 from "../../assets/images/iteration-2-images/icons/2.svg";
import Icon3 from "../../assets/images/iteration-2-images/icons/3.svg";
import Icon4 from "../../assets/images/iteration-2-images/icons/4.svg";
import Icon5 from "../../assets/images/iteration-2-images/icons/5.svg";
import Icon6 from "../../assets/images/iteration-2-images/icons/6.svg";
import Food1 from "../../assets/images/iteration-2-images/pictures/food-1.png";
import Food2 from "../../assets/images/iteration-2-images/pictures/food-2.png";
import Food3 from "../../assets/images/iteration-2-images/pictures/food-3.png";
import React from "react";
import {
  CardBody,
  CardTitle,
  Card,
  CardSubtitle,
  Button,
  CardText,
} from "reactstrap";
function HomeMenu() {
  const menus = [
    {
      key: "Ramen",
      logo: Icon1,
    },
    {
      key: "Pizza",
      logo: Icon2,
    },
    {
      key: "Burger",
      logo: Icon3,
    },
    {
      key: "French Fries",
      logo: Icon4,
    },
    {
      key: "Fast Food",
      logo: Icon5,
    },
    {
      key: "Soft Drinks",
      logo: Icon6,
    },
  ];
  const pizzas = [
    {
      src: Food1,
      name: "Terminal Pizza",
    },
    {
      src: Food2,
      name: "Position Absolute Acı Pizza",
    },
    {
      src: Food3,
      name: "useEffect Tavuklu Burger",
    },
  ];
  return (
    <div className="mainMenu">
      <div className="menuUp">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-3 gap-y-2 px-0 py-24 sm:px-0 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="order1 rounded-lg bg-gray-100 w-[530px] h-[449px]"></div>
          <div className="grid grid-cols-1 grid-rows-2  gap-2 sm:gap-6 lg:gap-8">
            <div className="order2 rounded-lg bg-gray-100 w-[530px] h-[220px]"></div>
            <div className="order3 rounded-lg bg-gray-100 w-[530px] h-[220px]"></div>
          </div>
        </div>
      </div>
      <div className="menuHead text-center sm:w-[400px] md:w-[400px] lg:w-[712px]">
        <p>en çok paketlenen menüler</p>
        <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
      </div>

      <div className="menuIcons">
      <div className="py-24 sm:py-32 flex justify-center">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid max-w-lg grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 items-center justify-center gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0 lg:max-w-none text-center">
        {menus.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              className="max-h-12 object-contain"
              src={item.logo}
              width="42px"
              height="42px"
              alt={`Icon ${index + 1}`}
            />
            <p className="mt-2">{item.key}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
      </div>
      <div className="menuDown grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
  {pizzas.map((item, index) => {
    return (
      <Card
        key={index}
        className="w-[334px] h-[419px] flex flex-col items-center justify-center text-center mx-auto"
      >
        <img className="w-[90%] max-h-[200px] object-contain" src={item.src} alt="Sample" />
        <CardBody>
          <CardTitle tag="h5">{item.name}</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
    );
  })}
</div>

    </div>
  );
}
export default HomeMenu;
