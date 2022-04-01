import React, { useContext } from "react";
import RideSelector from "./RideSelector";
import { UberContext } from "../context/uberContext";
import { ethers } from "ethers";

const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-auto`,
  confirmButtonContainer: `border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black text-white m-4 py-2 text-center text-lg`,
};

const Confirm = () => {
  const { currentAccount, pickup, dropoff, price, selectedRide, metamask } =
    useContext(UberContext);

  const storeTripDetails = async (pickup, dropoff) => {

    console.log(metamask)
    try {
      await fetch("/api/db/saveTrips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pickupLocation: pickup,
          dropoffLocation: dropoff,
          userWalletAddress: currentAccount,
          price: price,
          selectedRide: selectedRide,
        }),
      });

      console.log(price)

      await metamask.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: process.env.NEXT_PUBLIC_UBER_ADDRESS,
            gas: '0x7EF40', // 520000 Gwei
            value: ethers.utils.parseEther(price)._hex,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        <RideSelector />
      </div>
      <div className={style.confirmButtonContainer}>
        <div
          className={style.confirmButton}
          onClick={() => storeTripDetails(pickup, dropoff)}
        >
          Confirm {selectedRide.service || "UberX"}
        </div>
      </div>
    </div>
  );
};

export default Confirm;
