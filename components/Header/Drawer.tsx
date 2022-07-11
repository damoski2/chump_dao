/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { BlockChainContext } from "../../context/BlockChainContext";
import Link from "next/link";
import { cancelIcon, logo } from "../../Images";
import { useRouter } from "next/router";
import Identicon from "identicon.js";
import SecondaryButton from "../REUSABLES/SecondaryButton";
import PrimaryButton from "../REUSABLES/PrimaryButton";
import './Drawer.module.css'

const Drawer: React.FC = () => {
  const router = useRouter();

  const {
    connectWallet,
    currentUser,
    disconnectWallet,
    handleNavOpen,
    navOpen,
  } = useContext(BlockChainContext);

  let sideDrawer = "drawer";
  if (navOpen) {
    sideDrawer = "drawer open";
  }

  const returnActiveStyle = (_pathname: string): React.CSSProperties => {
    switch (_pathname) {
      case router.pathname:
        return {
          border: "1.5px solid #000000",
          padding: "10px 14px",
          borderRadius: "7px",
        };

      default:
        return {};
        break;
    }
  };
  
  const formatUser: () => string = (): string => {
    if (currentUser) {
      return (
        currentUser.substring(0, 6) +
        "..." +
        currentUser.substring(currentUser.length - 4, currentUser.length)
      );
    }
    return "";
  };

  return (
    <div className={sideDrawer}>
      <img src={cancelIcon} onClick={handleNavOpen} alt="cancelIcon" className="cancelIcon" />
      <ul className="links">
        <Link href="/timeline/purchase">
          <li style={returnActiveStyle("/timeline/purchase")}>Timeline</li>
        </Link>
        <Link href="/proposal/list">
          <li style={returnActiveStyle("/proposal/list")}>Proposals</li>
        </Link>
        <Link href="https://www.garnerly.app/">
          <li style={returnActiveStyle("")}>Garnerly</li>
        </Link>
      </ul>

      {currentUser ? (
          <div className="auth__section">
            <div className="eth__address">
              <img
                src={`data:image/png;base64,${new Identicon(
                  currentUser,
                  30
                ).toString()}`}
                alt="currentUser"
              />
              <p>{formatUser()}</p>
            </div>
            <SecondaryButton info="Log Out" onPress={disconnectWallet} />
          </div>
        ) : (
          <div className="button">
            <PrimaryButton onPress={connectWallet} info="Connect Wallet" />
          </div>
        )}

      <img src={logo} alt="logo" />
    </div>
  );
};

export default Drawer;
