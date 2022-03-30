import React, { useState } from "react";

const style = {
  wrapper: `p-2`,
  searchHeader: `w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden`,

};

const LocationSelector = () => {
  const [inFocus, setInFocus] = useState("from");

  return (
    <div className={style.wrapper}>
      <div className={style.searchHeader}>
        {inFocus === "from" ? "Where can we pick you up?" : "Where to?"}
      </div>
    </div>
  );
};

export default LocationSelector;
