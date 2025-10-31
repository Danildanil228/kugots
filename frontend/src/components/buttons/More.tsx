import React from "react";

export function More(){
    return(
        <>
            <button className="more bg-[#6F73EE] text-white px-[18px] py-[11px] gap-15 flex items-center rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8185F9]">
                Подробнее <img className="arrow w-3" src="./arrow.png" alt="" />
            </button>
        </>
    )
}