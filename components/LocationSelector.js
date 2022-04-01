import React, { useState, useContext } from "react";
import { UberContext } from "../context/uberContext";

const style = {
  wrapper: ``,
  searchHeader: `w-full font-medium text-left flex items-center text-2xl p-4 overflow-hidden`,
  inputBoxes: `flex flex-col mb-4 relative`,
  inputBox: `h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`,
  focusedInputBox: `border-black`,
  svgContainer: `mx-1`,
  input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent h-full w-full`,
  verticalLine: `w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem] top-[2rem]`,
  searchButton: `bg-black text-white mx-4 my-2 py-2 text-center text-lg`,
};

const LocationSelector = () => {
  const [inFocus, setInFocus] = useState("from");
  const { pickup, setPickup, dropoff, setDropoff } = useContext(UberContext);

  const [pickupInput, setPickupInput] = useState("");
  const [dropoffInput, setDropoffInput] = useState("");

  const handleSearch = () => {
    setPickup(pickupInput)
    setDropoff(dropoffInput)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.searchHeader}>
        {inFocus === "from" ? "Where can we pick you up?" : "Where to?"}
      </div>
      <div className={style.inputBoxes}>
        <div
          className={`${style.inputBox} ${
            inFocus === "from" && style.focusedInputBox
          }`}
        >
          <div className={style.svgContainer}>
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
          <input
            className={style.input}
            placeholder="Enter pickup location"
            value={pickupInput}
            onChange={(e) => setPickupInput(e.target.value)}
            onFocus={() => setInFocus("from")}
          />
        </div>
        <div className={style.verticalLine} />

        <div
          className={`${style.inputBox} ${
            inFocus === "to" && style.focusedInputBox
          }`}
        >
          <div className={style.svgContainer}>
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 10h-4v4h4v-4zM7 7v10h10V7H7z"
              />
            </svg>
          </div>
          <input
            className={style.input}
            placeholder="Where to?"
            value={dropoffInput}
            onChange={(e) => setDropoffInput(e.target.value)}
            onFocus={() => setInFocus("to")}
          />
        </div>
        <button className={style.searchButton} onClick={() => handleSearch()}>Set up locations</button>
      </div>
    </div>
  );
};

export default LocationSelector;
