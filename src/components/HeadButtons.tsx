import { Backspace } from "phosphor-react";
import React from "react";
import screenProps from "../types/screenProps";

export function HeadButtons({onScreen, setOnScreen = () => {}}: screenProps){
    function clear(){
        setOnScreen('0')
    }

    function backspace(){
        if (onScreen.length > 1){
            setOnScreen(onScreen.slice(0, -1))
        }else {
            setOnScreen('0')
        }
    }
    return (
        <div className="h-[72px] flex gap-1 text-3xl">
            <button onClick={() => clear()} className="border-[1px] w-full">C</button>
            <button onClick={() => backspace()} className="border-[1px] w-full"><Backspace size={32} className='m-auto' /></button>
        </div>
    )
}