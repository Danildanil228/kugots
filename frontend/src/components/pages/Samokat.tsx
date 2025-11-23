import { Breadcrumbs } from "../Breadcrumbs";

export default function Samokat(){
    return(
        <>
            <section className="container justify-center flex min-h-screen">
                <div className="">
                    <div className="mt-10 sm:px-20">
                        <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Каталог', path: '/catalog'}, {label: 'Электросамокаты'} ]}/> 
                    </div>
                    <div className="justify-center flex ">
                        <img src="./sambg2.svg" className="sm:w-[1440px]" alt="" />
                    </div>
                    {/* До 01.09 бесплатная доставка самокатов по всей России */}
                    <div className="flex justify-center pt-8 lg:pt-[110px]">
                        <div className="hidden lg:block bg-[url('./bgmain2.svg')] bg-center bg-cover bg-no-repeat items-center w-[1440px] rounded-[5px]">
                            <div className="justify-end w-7xl grid gap-9 py-[67px]">
                                <p className="text-white bg-[#EE685F] w-fit px-[11px] py-1 rounded-[5px]">Акция</p>
                                <h1 className="uppercase font-semibold text-[35px] text-white w-110">Бесплатная доставка Электросамокатов По России до 01.09</h1>
                                <button className="w-fit px-[25px] py-[15px] bg-white rounded-[5px]">Подробнее</button>
                            </div>
                        </div>
                        <div className="lg:hidden bg-[url('./bgmain2.svg')] bg-center bg-cover bg-no-repeat rounded-[5px] w-full max-w-[95vw] min-h-[200px]">
                            <div className="flex flex-col justify-end items-end gap-4 py-6 px-4 h-full">
                                <p className="text-white bg-[#EE685F] w-fit px-3 py-1 rounded-[5px] text-sm">Акция</p>
                                <h1 className="uppercase font-semibold text-lg text-white text-right">
                                    Бесплатная доставка Электросамокатов<br/>По России до 01.09
                                </h1>
                                <button className="px-4 py-2 bg-white rounded-[5px] text-sm font-medium">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}