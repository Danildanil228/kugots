import { Link, useLocation } from 'react-router-dom';
import { Cart } from "./buttons/Cart";
import { CatalogDropdown } from "./buttons/CatalogDropdown";
import { CompareIcon } from "./buttons/CompareIcon";
import { Heart } from "./buttons/Heart";
import { Messengers } from "./buttons/Messengers";
import { Phone } from "./buttons/Phone";
import { Search } from "./forms/Search";
import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import { PhoneNumber } from './forms/PhoneNumber';

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
                    <div className="flex gap-7 items-center">
                        <a href="" className="text-[#5D6C7B]! hover:text-black! transition-colors">Сервис</a>
                        <a href="" className="text-[#5D6C7B]! hover:text-black! transition-colors">Сотрудничество</a>
                        <AlertDialog.Root >
                            <AlertDialog.Trigger className=''>
                                <Button className='bg-transparent! text-[#5D6C7B]! font-normal! text-[16px]! items-center! p-0! m-0! hover:text-black! transition-colors duration-200! cursor-pointer!'>Заказать звонок</Button>
                            </AlertDialog.Trigger>
                            <AlertDialog.Content maxWidth="1280px" height="430px" >
                                <div >
                                    <div className='justify-end flex'>
                                        <AlertDialog.Action><img src='./crest.svg' className='rotate-45 cursor-pointer'></img></AlertDialog.Action>
                                    </div>
                                    <div className='flex'>

                                        <div className='grid gap-4'>
                                            <h1 className='text-[25px] font-semibold uppercase w-115'>Менеджер позвонит вам в течение 5 минут</h1>
                                            <p className='w-80'>ответит на все вопросы и проконсультирует по продуктам Kugoo</p>
                                            <PhoneNumber/>
                                        </div>
                                        <div >
                                            
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    
                                </div>
                            </AlertDialog.Content>
                        </AlertDialog.Root>
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