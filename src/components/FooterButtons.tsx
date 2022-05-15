import { Circle, Equals } from "phosphor-react";
import React from "react";
import screenProps from "../types/screenProps";

export function FooterButtons({onScreen, setOnScreen = () => {}}: screenProps){
    function displayNumber(num: string) {
        const filter = Array.prototype.filter
        const onScreenFiltered = filter.call(onScreen, e => (e == '.'))
        if (onScreenFiltered.length && num == '.') {
            return
        }
        if (onScreen != '0'){
            setOnScreen(`${onScreen}` + `${num}`)
        }        
        else {
            setOnScreen(num)
        }
    }

    return (
        <div className="flex gap-1">
             <button onClick={() => displayNumber('.')} className="border-[1px] h-[72px] w-full" key={`button-divide`}>
                <Circle size={8} weight="fill" className='m-auto' />
            </button>
            <button onClick={() => displayNumber('0')} className="border-[1px] h-[72px] w-full text-3xl" key={`button-multiply`}>
                0
            </button>
            <button className="border-[1px] h-[72px] w-full" key={`button-sub`}>
                <Equals size={32} className='m-auto' />
            </button>
        </div>
    )
}