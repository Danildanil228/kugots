import { Breadcrumbs } from "../Breadcrumbs";

export default function NotFound(){
    return(
        <>
            <div className="flex justify-center">
                <div className="flex justify-between w-7xl mt-5">
                    <Breadcrumbs 
                    items={[
                        {label: 'Главная', path: '/main'},
                        {label: 'Страница не найдена'}
                    ]}/>
                </div>
            </div>
            <div className="justify-center flex bg-[url('./notfound.svg')] bg-cover bg-center bg-no-repeat mx-[30px] rounded-[10px] mb-[30px]">
                <div className="justify-between w-5xl py-20 grid gap-3">
                    <h1 className="uppercase text-white text-4xl font-semibold w-[250px] leading-14">страница не найдена</h1>
                    <p className="text-white w-[330px]">Кажется, что-то пошло не так! Запрашиваемая страница не существует. Возможно, она устарела или была удалена.</p>
                    <a href="" className="py-[15px] px-[25px] mt-[30px] bg-white rounded-[5px] w-[200px]">Перейти в Instagram</a>
                    <p className="text-white opacity-50 w-[270px]">или позвоните нам, чтобы сообщить об ошибке +7 (800) 505-54-61</p>
                </div>
            </div>
        
        </>
    )
}