export function WatchAll({ text = "Смотреть все" }){
    return(
        <>
            <button className="watch p-[15px_25px] border border-[#6F73EE] rounded text-[#6F73EE]
            hover:text-white hover:bg-[#6F73EE]
            ">{text}</button>
        </>
    )
}