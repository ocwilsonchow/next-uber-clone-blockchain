import Image from "next/image";
import avatar from "../temp/avatar.jpg";
import { BsPerson } from "react-icons/bs";
import { useContext } from "react";
import { UberContext } from "../context/uberContext";

const style = {
  wrapper: `h-18 w-full bg-black text-white flex md:justify-around items-center p-2`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white font-medium flex items-center mx-4 cursor-pointer`,
  menuItem: `text-lg text-white font-light flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2 items-center`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
};

const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(UberContext);

  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>Uber</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>

        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton}>
            <BsPerson />
            <span className={style.loginText}>Log in</span>
          </div>
        )}
        <div className={style.userImageContainer}>
          <Image
            className={style.userImage}
            src={avatar}
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
