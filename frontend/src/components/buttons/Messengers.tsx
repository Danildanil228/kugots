export function Messengers(){
    return(
        <>
            <div className="mess flex gap-[10px] filter grayscale transition-filter duration-300 ease-in-out hover:grayscale-0">
                <button><img src="./viber.svg" alt="" /></button>
                <button><img src="./whatsap.svg" alt="" /></button>
                <button><img src="./tg.svg" alt="" /></button>
            </div>
        </>
    )
}