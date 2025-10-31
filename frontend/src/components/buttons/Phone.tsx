
export function Phone(){
    return(
        <>
            <div className="phone flex gap-3 items-center">
                <p>+7 (800) 505-54-61</p>
                <button className="plus-btn p-1.5 border border-[#5D6C7B] rounded-full transition-all duration-200 ease-in-out hover:bg-[#5D6C7B]">
                    <img className="plus transition-all duration-200 ease-in-out hover:filter hover:brightness-0 hover:invert" src="./+.svg" alt="" />
                </button>
            </div>
        </>
    )
}