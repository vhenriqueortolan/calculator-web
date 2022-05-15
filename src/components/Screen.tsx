import React, { useState } from "react";
import screenProps from '../types/screenProps'

export function Screen({onScreen}: screenProps){
    
    return (
        <div className="bg-slate-300 rounded-lg h-24 flex flex-col justify-center p-0">
            <p className="text-right text-9xl font-screen p-0 block">{onScreen}</p>
        </div>
    )
}