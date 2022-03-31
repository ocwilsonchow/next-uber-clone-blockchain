import Image from "next/image";
import { useState, useEffect } from "react";

const style = {
  wrapper: `h-full flex flex-col `,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-auto`,
  car: `flex py-1 px-3 items-center border-1 border-white`,
  selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-15`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[0.8rem]`,
};

const basePrice = 1500;

const RideSelector = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("api/db/getRideTypes");

        const data = await response.json();
        console.log(data);
        setCarList(data.data);
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
          <div className={style.car} key={index}>
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
                {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelector;
