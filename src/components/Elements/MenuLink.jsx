//  Dependencies
// ===========================================================

import React from "react";
import { useNavigate } from "react-router-dom";


//  Navbar
// ===========================================================

export function MenuLink({ url, children }) {

    // Hooks
    const navigate = useNavigate();

    return (
        <li 
            className={`
                w-full
                flex justfy-center items-center gap-3
                text-white
                cursor-pointer
                p-1
                border
                border-[#00000000]
                hover:bg-[#563aff33]
                hover:border-[#563aff]
            `}
            onClick={() => navigate(url)}
        >
            {children}
        </li>
    );
}
