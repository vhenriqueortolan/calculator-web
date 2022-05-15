import React from "react";
import screenProps from "../types/screenProps";

export function NumButtons({onScreen, setOnScreen = () => {}}: screenProps){
    function displayNumber(num: string) {
        if (onScreen != '0'){
            setOnScreen(`${onScreen}` + `${num}`)
        } else {
            setOnScreen(num)
        }
    }

    const nums = [1,2,3,4,5,6,7,8,9]
    return (
            <div className="grid grid-cols-3 gap-1 h-56">
                {nums.map((num) => {
                    return <button onClick={() => displayNumber(String(num))} className="border-[1px] text-3xl" key={`numButton-${num}`}>{num}</button>
                })}
            </div>
    )
}