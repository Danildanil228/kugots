export function Share(){
    return(
        <>
            <button className="compare flex gap-3 items-center hover:text-[#6F73EE] group">
                <img 
                    src="./share.svg" 
                    className='filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100 ' 
                    alt="" 
                />
                Поделиться
            </button>
        </>
    )
}