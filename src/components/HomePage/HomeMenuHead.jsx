import "./HomeMenu.css";
import Icon1 from "../../assets/images/iteration-2-images/icons/1.svg";
import Icon2 from "../../assets/images/iteration-2-images/icons/2.svg";
import Icon3 from "../../assets/images/iteration-2-images/icons/3.svg";
import Icon4 from "../../assets/images/iteration-2-images/icons/4.svg";
import Icon5 from "../../assets/images/iteration-2-images/icons/5.svg";
import Icon6 from "../../assets/images/iteration-2-images/icons/6.svg";

function HomeMenu() {
  const menus = [
    {
      key: "YENİ! Kore",
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
      key: "Kızartmalar",
      logo: Icon4,
    },
    {
      key: "Fast Food",
      logo: Icon5,
    },
    {
      key: "Gazlı İçecek",
      logo: Icon6,
    },
  ];

  return (
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
  

  );
}

export default HomeMenu;
