import React from "react";

const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-auto`,
  confirmButtonContainer: `border-t-2 cursor-pointer z-10`,

};

const Confirm = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}> </div>
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButton}>
          Confirm UberX
        </div>
      </div>
    </div>
  );
};

export default Confirm;
