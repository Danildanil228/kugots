export function Heart(){
    return(
        <>
            <button className="heart-icon">
                <div className="heart-bg w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:bg-[#F4F7FB]">
                    <img src="./Heart.svg" alt="" />
                </div>
            </button>
        </>
    )
}