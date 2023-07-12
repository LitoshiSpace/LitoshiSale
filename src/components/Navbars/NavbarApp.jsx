//  Dependencies
// ===========================================================

import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuLink } from '#components/Elements';


//  Constants
// ===========================================================

import logo from "#assets/logo.svg";
import logofooter from "#assets/logofooter.svg";
import test1 from "#assets/test1.svg";
import test2 from "#assets/test2.svg";
import test3 from "#assets/test3.svg";
import explorer from "#assets/globalsearch.svg";
import star from "#assets/ouai.svg";
import vector from "#assets/vector.svg";
import FooterLogo from "#assets/Footer.svg";
import notification from "#assets/notification.svg";
import multichart from "#assets/element3.svg";
import BTC from "#assets/BitcoinBTC.svg";
import LTC from "#assets/LitecoinLTC.svg";
import DRC from "#assets/DogecoinDRC.svg";


//  Components
// ===========================================================

function Wallet() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full h-1/2 flex justify-center items-center">
                <img src={logo} alt="Logo" className="w-[60%] h-full" />
            </div>
            <button className="flex justify-center items-center gap-3 rounded-full border py-1 px-3 text-[#fff]">
                <img src={FooterLogo} alt="" />
                Wallet login
            </button>
        </div>
    );
}

function Profile() {

    // Hooks
    const navigate = useNavigate();

    // Constants
    const links = [
        {
            url: "dashboard",
            text: "Dashboard",
            img: vector
        },
        {
            url: "watchlist",
            text: "Watchlist",
            img: star
        },
        {
            url: "",
            text: "Alerts",
            img: notification
        },
        {
            url: "",
            text: "Multicharts",
            img: multichart
        }
    ];

    return (
        <div className="w-full flex flex-col gap-3 px-5">
            <div className="w-full border-b border-[#5b5b5c]">
                <p className="text-[#6b6a6d] text-xs font-bold uppercase">
                    Your profile
                </p>
            </div>
            <ul className="w-full flex flex-col justfy-center items-center gap-2">
                {links.map((item, index) => (
                    <MenuLink url={item?.url}>
                        <img src={item?.img} alt="" />
                        {item?.text}
                    </MenuLink>
                ))}
            </ul>
        </div>
    );
}

function Tokens() {

    // Constants
    const links = [
        {
            url: "/explorer",
            text: "Explorer",
            img: explorer
        },
        {
            url: "",
            text: "BRC-20",
            img: BTC
        },
        {
            url: "",
            text: "LTC-20",
            img: LTC
        },
        {
            url: "",
            text: "DRC-20",
            img: DRC
        }
    ];

    return (
        <div className="w-full flex flex-col gap-3 px-5">
            <div className="w-full border-b border-[#5b5b5c]">
                <p className="text-[#6b6a6d] text-xs font-bold uppercase">
                    Tokens and chains
                </p>
            </div>
            <ul className="w-full flex flex-col justfy-center items-center gap-2">
                {links.map((item, index) => (
                    <MenuLink
                        onClick={() => navigate(item?.url)}
                    >
                        <img src={item?.img} alt="" />
                        {item?.text}
                    </MenuLink>
                ))}
            </ul>
        </div>
    );
}

function Footer() {

    // Constants
    const links = [
        {
            url: "https://medium.com/@litebitmarket",
            img: test3
        },
        {
            url: "https://medium.com/@litebitmarket",
            img: test2
        },
        {
            url: "https://medium.com/@litebitmarket",
            img: test1
        }
    ];

    return (
        <div className="w-full flex flex-col gap-3 p-4">
            <div className="w-full flex justify-center items-center gap-3 cursor-pointer">
                <img src={logofooter} alt="" />
                <p className="text-[#ffffffc0] text-lg font-semibold">
                    Buy $LTSI
                </p>
            </div>
            <ul className="w-full flex justify-evenly items-center gap-2">
                {links.map((item, index) => (
                    <li 
                        className={`
                            text-white
                            cursor-pointer
                            p-3
                            border
                            border-[#00000000]
                            hover:bg-[#563aff33]
                            hover:border-[#563aff]
                        `}
                        onClick={() => navigate(item?.url)}
                    >
                        <a href={item?.url}>
                            <img src={item?.img} alt="" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}


//  Navbar
// ===========================================================

export function NavbarApp() {
  return (
    <div className="w-full h-full flex flex-col gap-6 overflow-y-auto">
        <Wallet />
        <div className="w-full h-full flex flex-col gap-6">
            <Profile />
            <Tokens />
        </div>
        <Footer />
    </div>
  );
}
