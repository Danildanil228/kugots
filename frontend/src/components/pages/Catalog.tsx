import { Breadcrumbs } from "../Breadcrumbs";

export default function Catalog(){
    return(
        <>
            <section className="container">
                <div className="flex justify-center">
                    <div>
                        <div className=" mt-10 flex justify-between! w-7xl!  sm:px-20">
                            <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Тест-драйв'}]}/> 
                        </div>

                        <div className="flex justify-start">
                            <h1 className="text-2xl uppercase sm:text-[35px] font-semibold">Каталог товаров</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}