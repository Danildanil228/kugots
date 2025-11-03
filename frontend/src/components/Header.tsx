import { Link, useLocation } from 'react-router-dom';
import { Cart } from "./buttons/Cart";
import { CatalogDropdown } from "./buttons/CatalogDropdown";
import { CompareIcon } from "./buttons/CompareIcon";
import { Heart } from "./buttons/Heart";
import { Messengers } from "./buttons/Messengers";
import { Phone } from "./buttons/Phone";
import { Search } from "./forms/Search";

export function Header(){
    const location = useLocation();
    const navItems = [
        { path: '/about', label: 'О магазине' },
        { path: '/delivery', label: (
            <div className='flex gap-2'>
                <div>Доставка и оплата</div>
                <div className='text-[15px] py-0.5 px-2 bg-[#6F73EE] rounded-2xl text-white'>Доступна рассрочка</div>
            </div>
        ) },
        { path: '/test-drive', label: 'Тест-драйв' },
        { path: '/blog', label: 'Блог' },
        { path: '/contacts', label: 'Контакты' },
        { path: '/actions', label: (
            <div className='flex gap-2 items-center'>
                <div>Акции</div>
                <div className='bg-[#6F73EE] w-[25px] h-[25px] rounded-full items-center justify-center flex text-white'>%</div>
            </div>
        ) }
    ];

    return(
        <>
        <div>
            <div className="justify-center flex my-4">
                <div className="flex justify-between w-7xl">
                    <div className="flex gap-7">
                        <a href="" className="text-[#5D6C7B]! hover:text-black! transition-colors">Сервис</a>
                        <a href="" className="text-[#5D6C7B]! hover:text-black! transition-colors">Сотрудничество</a>
                        <a href="" className="text-[#5D6C7B]! hover:text-black! transition-colors">Заказать звонок</a>
                        <Messengers/>
                    </div>
                    <div>
                        <Phone/>
                    </div>
                </div>
            </div>
            
            <div className="w-full bg-[#ECF3FF] h-px my-4"/>
            
            <div className="flex justify-center my-8">
                <div className="flex justify-between w-7xl">
                    <div className="flex items-center">
                        <Link to="/main" className="">
                            <h1 className="font-bold text-3xl cursor-pointer">KUGOO</h1>
                        </Link>
                    </div>
                    <div className="flex items-center gap-5">
                        <CatalogDropdown/>
                        <Search/>
                    </div>
                    <div className="flex items-center gap-4">
                        <CompareIcon/>
                        <Heart/>
                        <Cart/>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center bg-[#F4F7FB] py-3">
                <div className="flex justify-start w-7xl">
                    <div className="flex gap-12 ">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className=""
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}