import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { UberContext } from "../context/uberContext";

const style = {
  wrapper: `h-full flex flex-col `,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-auto`,
  car: `flex py-1 px-3 items-center border-2 m-1 border-white`,
  selectedCar: `border-2 border-black flex py-1 px-3 m-1 items-center`,
  carImage: `h-15`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[0.8rem]`,
};



const RideSelector = () => {
  const [carList, setCarList] = useState([]);
  const { setSelectedRide, selectedRide, setPrice, basePrice } = useContext(UberContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("api/db/getRideTypes");
        const data = await response.json();
        setCarList(data.data);
        setSelectedRide(data.data[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      <div className={style.carList}>
        {carList.map((car, index) => (
          <div
            className={`${
              selectedRide?.service === car?.service
                ? style.selectedCar
                : style.car
            }`}
            key={index}
            onClick={() => {
              setSelectedRide(car);
              setPrice(
                ((basePrice / 10 ** 4.5) * car.priceMultiplier).toFixed(5)
              );
            }}
          >
            <img
              src={car.iconUrl}
              className={style.carImage}
              height={80}
              width={80}
            />
            <div className={style.carDetails}>
              <div className={style.service}>{car.service}</div>
              <div className={style.time}>3 min away</div>
            </div>
            <div className={style.priceContainer}>
              <div className={style.price}>
                {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)} ETH
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelector;
