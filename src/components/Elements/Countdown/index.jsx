//  Dependencies
// ===========================================================

import React, { useState , useEffect } from 'react';


//  Component
// ===========================================================

export const Countdown = ({ timestamp }) => {

    // Variables
    var [countdown, setCountdown] = useState();
    
    // Refresh every minute
    useEffect(() => {
        var timer = setInterval(() => {
            var timeleft = timestamp - Date.now();
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            if (timeleft < 0)
                setCountdown(null);
            else
                setCountdown({  m: minutes, s: seconds });
        }, 1000 );
        return function cleanup() {
            clearInterval(timer)
        }
    });

    // Loading
    if ( !countdown )  return null;

    // Return
    return (`${countdown?.m > 0 && ` ${countdown?.m}m`}${countdown?.s > 0 && ` ${countdown?.s}s`}`);
}
