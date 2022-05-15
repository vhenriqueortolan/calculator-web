import { Divide, Equals, Minus, Plus, X } from "phosphor-react";
import React from "react";

export function OperationsButtons(){
    const buttons = []
    return (
        <div className="flex flex-col w-[20%] gap-1">
            <button className="border-[1px] h-[72px]" key={`button-divide`}>
            <Divide size={32} className='m-auto' />
            </button>
            <button className="border-[1px] h-[72px]" key={`button-multiply`}>
                <X size={32} className='m-auto' />
            </button>
            <button className="border-[1px] h-[72px]" key={`button-sub`}>
                <Minus size={32} className='m-auto' />
            </button>
            <button className="border-[1px] h-[148px]" key={`button-sum`}>
                <Plus size={32} className='m-auto' />
            </button>
            
        </div>
    )
}