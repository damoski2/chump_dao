/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { BlockChainContext } from "../../context/BlockChainContext";
import Link from "next/link";
import { cancelIcon, logo } from "../../Images";
import { useRouter } from "next/router";

interface propType {
  navOpen: boolean;
  handleNavOpen: () => void;
}

const Drawer: React.FC<propType> = ({ navOpen, handleNavOpen }) => {
  const router = useRouter();

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

  return (
    <div className={sideDrawer}>
      <img src={cancelIcon} alt="cancelIcon" className="cancelIcon" />
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
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Drawer;
