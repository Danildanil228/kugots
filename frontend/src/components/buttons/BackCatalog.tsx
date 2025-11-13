export function BackCatalog(){
    return(
        <>
            <button className="back flex gap-3 items-center text-[#5D6C7B] hover:text-black group">
                <img 
                    className="arrow group-hover:brightness-100 group-hover:invert-0" 
                    src="./arrow3.svg" 
                    alt="" 
                />Вернуться в каталог
            </button>
        </>
    )
}