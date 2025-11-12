import { Everywhere } from "../buttons/Everywhere";

export function Search(){
    return(
        <>
            <div className="search flex border border-[#6F73EE] rounded-[5px] justify-between">
                <div className="search-input-block p-1 flex gap-5">
                    <Everywhere/>
                    <input className="search-input max-w-[450px] min-w-150 outline-none" type="text" placeholder="Искать самокат KUGO"/>
                </div>
                <div className="search-icon">
                    <button className="bg-[#6F73EE] w-10 h-10 flex items-center justify-center">
                        <img src="./Search.svg" alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}