import { useState } from "react";
import { Popover } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import { CatalogDropdown } from "./buttons/CatalogDropdown";
import { CompareIcon } from "./buttons/CompareIcon";
import { Messengers } from "./buttons/Messengers";
import { Search } from "./forms/Search";
import { AlertDialog, Button, Checkbox } from '@radix-ui/themes';
import { PhoneNumber } from './forms/PhoneNumber';
import { CartMenu } from './forms/CartMenu';
import { LikeMenu } from "./forms/LikeMenu";
import { CompareMenu } from "./forms/CompareMenu";

export function Header(){
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileCallModalOpen, setIsMobileCallModalOpen] = useState(false);
    
    const navItems = [
        { path: '/about', label: 'О магазине' },
        { path: '/delivery', label: (
            <div className='flex gap-2 items-center'>
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

    const mobileMenuItems = [
        { path: '/about', label: 'О магазине' },
        { path: '/delivery', label: 'Доставка и оплата', badge: 'Доступна рассрочка' },
        { path: '/test-drive', label: 'Тест-драйв' },
        { path: '/blog', label: 'Блог' },
        { path: '/contacts', label: 'Контакты' },
        { path: '/actions', label: 'Акции', icon: '%' },
        { path: '/service', label: 'Сервис' },
        { path: '/cooperation', label: 'Сотрудничество' },
    ];

    const [phone, setPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isChecked, setIsChecked] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePhoneChange = (value: string, isValid: boolean) => {
        setPhone(value);
        setIsPhoneValid(isValid);
        setError('');
    };

    const handleCallOrder = async () => {
        if (!isPhoneValid || !isChecked) return;
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:3000/api/call-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    phone: phone,
                    type: 'callback-consult'
                }),
            });

            if (!response.ok) {
                let errorMessage = 'Ошибка при отправке';
                
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch (jsonError) {
                    const textError = await response.text();
                    errorMessage = textError || errorMessage;
                }
                
                throw new Error(errorMessage);
            }
            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true); 
                setPhone('');
                setIsPhoneValid(false);
                setIsChecked(true);
            } else {
                throw new Error(result.message || 'Произошла ошибка');
            }

        } catch (err) {
            console.error('Ошибка:', err);
            setError(err instanceof Error ? err.message : 'Произошла ошибка при отправке заявки');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setPhone('');
        setIsPhoneValid(false);
        setError('');
    };

    return(
        <>
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200 shadow-sm">
                {/* Верхняя строка с логотипом, кнопкой звонка и меню */}
                <div className="flex items-center justify-between p-4">
                    <Link to="/main" className="flex-shrink-0">
                        <h1 className="font-bold text-2xl">KUGOO</h1>
                    </Link>
                    
                    <div className="flex items-center gap-4">
                        {/* Кнопка звонка вместо номера телефона */}
                        <button 
                            onClick={() => setIsMobileCallModalOpen(true)}
                            className="p-2"
                        >
                            <img src="./call.svg" alt="Позвонить" className="w-6 h-6" />
                        </button>
                        
                        {/* Кнопка меню */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2"
                        >
                            <img src="./menu.svg" alt="" />
                        </button>
                    </div>
                </div>
                
                {/* Поисковая строка */}
                {!isMobileMenuOpen && (
                    <div className="px-4 pb-4">
                        <div className="search flex border border-[#6F73EE] rounded-[5px] justify-between">
                            <div className="search-input-block p-3 flex-1">
                                <input 
                                    className="search-input w-full outline-none text-base" 
                                    type="text" 
                                    placeholder="Искать самокат KUGO" 
                                />
                            </div>
                            <div className="search-icon">
                                <button className="bg-[#6F73EE] w-12 h-12 flex items-center justify-center">
                                    <img src="./Search.svg" alt="Поиск" className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Call Modal */}
            <div 
                className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    isMobileCallModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMobileCallModalOpen(false)}
            />
            
            {/* Mobile Call Modal Content */}
            <div 
                className={`lg:hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white rounded-lg z-50 transition-all duration-300 ${
                    isMobileCallModalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold"></h3>
                        
                    </div>
                    
                    <div className="space-y-4">
                        <div>
                            <p className="text-[#5D6C7B] text-sm">Call-центр</p>
                            <h2 className="text-base font-semibold">+7 (800) 505-54-61</h2>
                            <p className="text-[#5D6C7B] text-sm">Пн-Вс 10:00 - 20:00</p>
                        </div>
                        
                        <div className="border-t border-[#EAEBED] pt-4">
                            <p className="text-[#5D6C7B] text-sm">Сервисный центр</p>
                            <h2 className="text-base font-semibold">+7 (499) 350-76-92</h2>
                            <p className="text-[#5D6C7B] text-sm">Пн-Вс 10:00 - 20:00</p>
                        </div>
                        
                        <div className="border-t border-[#EAEBED] pt-4">
                            <p className="text-[#5D6C7B] text-sm">Оптовый отдел</p>
                            <h2 className="text-base font-semibold">+7 (499) 281-64-52</h2>
                            <p className="text-[#5D6C7B] text-sm">пн-сб 10:00 - 19:00</p>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => setIsMobileCallModalOpen(false)}
                        className="w-full mt-6 py-3 bg-[#6F73EE] text-white rounded-lg font-semibold"
                    >
                        Закрыть
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <div 
                className={`lg:hidden fixed top-0 left-0 bottom-0 w-80 bg-white z-50 transform transition-transform duration-300 ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="h-full flex flex-col">
                    {/* Заголовок меню */}
                    <div className="border-b border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Меню</h2>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2"
                            >
                                <img src="./close.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    
                    {/* Пункты меню */}
                    <div className="flex-1 overflow-y-auto">
                        {mobileMenuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="flex items-center justify-between py-4 px-6 border-b border-gray-100 text-lg hover:bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="flex-1">{item.label}</span>
                                {item.badge && (
                                    <span className="text-xs bg-[#6F73EE] text-white px-2 py-1 rounded-full ml-2">
                                        {item.badge}
                                    </span>
                                )}
                                {item.icon && (
                                    <span className="w-6 h-6 bg-[#6F73EE] rounded-full flex items-center justify-center text-white text-sm ml-2">
                                        {item.icon}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Кнопка заказа звонка в меню */}
                    <div className="p-4 border-t border-gray-200">
                        <AlertDialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <AlertDialog.Trigger className="w-full">
                                <button className="w-full py-3 border-2 border-[#6F73EE] text-[#6F73EE] rounded-lg font-semibold text-lg hover:bg-[#6F73EE] hover:text-white transition-colors">
                                    Заказать звонок
                                </button>
                            </AlertDialog.Trigger>
                            <AlertDialog.Content maxWidth="800px" height="500px" className='bg-[url("./maskmodal.svg")] bg-no-repeat bg-cover bg-center bg-left-12'>
                                <div>
                                    <div className='justify-end flex'>
                                        <AlertDialog.Action>
                                            <img 
                                                src='./crest.svg' 
                                                className='rotate-45 cursor-pointer'
                                                alt="Закрыть"
                                                onClick={handleCloseDialog}
                                            />
                                        </AlertDialog.Action>
                                    </div>
                                    <div className='flex'>
                                        <div className='grid gap-9'>
                                            <div className='grid gap-4'>
                                                <h1 className='text-[25px] font-semibold uppercase w-115'>
                                                    Менеджер позвонит вам в течение 5 минут
                                                </h1>
                                                <p className='w-80'>
                                                    ответит на все вопросы и проконсультирует по продуктам Kugoo
                                                </p>
                                            </div>
                                            <div className='grid w-[350px] gap-5'>
                                                <PhoneNumber 
                                                    onPhoneChange={handlePhoneChange} 
                                                    value={phone}
                                                />
                                                {error && (
                                                    <div className="text-red-500 text-sm mt-1 text-center">
                                                        {error}
                                                    </div>
                                                )}
                                                
                                                <button 
                                                    className={`py-3 rounded-[5px] text-white transition-colors ${
                                                        isSubmitted 
                                                            ? 'bg-green-500 cursor-default' 
                                                            : !isPhoneValid || !isChecked || isLoading 
                                                                ? 'bg-[#6F73EE] opacity-50 cursor-not-allowed' 
                                                                : 'bg-[#6F73EE] hover:bg-[#5a5fc9]'
                                                    }`}
                                                    onClick={isSubmitted ? undefined : handleCallOrder}
                                                    disabled={isSubmitted || !isPhoneValid || !isChecked || isLoading}
                                                >
                                                    {isSubmitted ? 'Отправлено!' : (isLoading ? 'Отправка...' : 'Позвоните мне')}
                                                </button>
                                                
                                                <div className='flex items-baseline gap-3'>
                                                    <Checkbox 
                                                        variant="soft" 
                                                        checked={isChecked}
                                                        onCheckedChange={(checked) => setIsChecked(checked === true)}
                                                    />
                                                    <p className='text-[14px]'>
                                                        Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="" className='text-[#6F73EE]'>политикой конфиденциальности</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AlertDialog.Content>
                        </AlertDialog.Root>
                    </div>
                </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block">
                <div className=''>
                    <div className="justify-center flex my-4">
                        <div className="flex justify-between w-7xl">
                            <div className="flex gap-7 items-center">
                                <a href="" className="text-[#5D6C7B]! hover:text-black! transition-colors">Сервис</a>
                                <a href="" className="text-[#5D6C7B]! hover:text-black! transition-colors">Сотрудничество</a>
                                
                                <AlertDialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                    <AlertDialog.Trigger className=''>
                                        <Button className='bg-transparent! text-[#5D6C7B]! font-normal! text-[16px]! items-center! p-0! m-0! hover:text-black! transition-colors duration-200! cursor-pointer!'>
                                            Заказать звонок
                                        </Button>
                                    </AlertDialog.Trigger>
                                    <AlertDialog.Content maxWidth="800px" height="500px" className='bg-[url("./maskmodal.svg")] bg-no-repeat bg-cover bg-center bg-left-12'>
                                        <div>
                                            <div className='justify-end flex'>
                                                <AlertDialog.Action>
                                                    <img 
                                                        src='./crest.svg' 
                                                        className='rotate-45 cursor-pointer'
                                                        alt="Закрыть"
                                                        onClick={handleCloseDialog}
                                                    />
                                                </AlertDialog.Action>
                                            </div>
                                            <div className='flex'>
                                                <div className='grid gap-9'>
                                                    <div className='grid gap-4'>
                                                        <h1 className='text-[25px] font-semibold uppercase w-115'>
                                                            Менеджер позвонит вам в течение 5 минут
                                                        </h1>
                                                        <p className='w-80'>
                                                            ответит на все вопросы и проконсультирует по продуктам Kugoo
                                                        </p>
                                                    </div>
                                                    <div className='grid w-[350px] gap-5'>
                                                        <PhoneNumber 
                                                            onPhoneChange={handlePhoneChange} 
                                                            value={phone}
                                                        />
                                                        {error && (
                                                            <div className="text-red-500 text-sm mt-1 text-center">
                                                                {error}
                                                            </div>
                                                        )}
                                                        
                                                        <button 
                                                            className={`py-3 rounded-[5px] text-white transition-colors ${
                                                                isSubmitted 
                                                                    ? 'bg-green-500 cursor-default' 
                                                                    : !isPhoneValid || !isChecked || isLoading 
                                                                        ? 'bg-[#6F73EE] opacity-50 cursor-not-allowed' 
                                                                        : 'bg-[#6F73EE] hover:bg-[#5a5fc9]'
                                                            }`}
                                                            onClick={isSubmitted ? undefined : handleCallOrder}
                                                            disabled={isSubmitted || !isPhoneValid || !isChecked || isLoading}
                                                        >
                                                            {isSubmitted ? 'Отправлено!' : (isLoading ? 'Отправка...' : 'Позвоните мне')}
                                                        </button>
                                                        
                                                        <div className='flex items-baseline gap-3'>
                                                            <Checkbox 
                                                                variant="soft" 
                                                                checked={isChecked}
                                                                onCheckedChange={(checked) => setIsChecked(checked === true)}
                                                            />
                                                            <p className='text-[14px]'>
                                                                Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="" className='text-[#6F73EE]'>политикой конфиденциальности</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </AlertDialog.Content>
                                </AlertDialog.Root>
                                <Messengers/>
                            </div>
                            <div>
                                <div className="phone flex gap-3 items-center">
                                    <p>+7 (800) 505-54-61</p>
                                    <button onClick={handleOpen} className="plus-btn p-1.5 border border-[#5D6C7B] rounded-full transition-all duration-200 ease-in-out hover:bg-[#5D6C7B] group">
                                    <img 
                                        className="plus transition-all duration-200 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:invert" 
                                        src="./+.svg" 
                                        alt="Add" 
                                    />
                                    </button>
                                </div>
                                <Popover
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    sx={{
                                        '& .MuiPopover-paper': {
                                            width: 250,
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                            marginTop: '8px'
                                        }
                                    }}
                                    disableScrollLock={true}
                                >
                                    <div className="text-[12px] grid-cols-1 grid">
                                        
                                        <div className="py-4 px-5">
                                            <p className="text-[#5D6C7B]">Сервисный центр</p>
                                            <h2 className="text-[16px] font-semibold">+ 7 (499) 350 76 92</h2>
                                        </div>
                                        <div className="border-t border-b border-[#EAEBED]">
                                            <div className="py-4 px-5">
                                                <p className="text-[#5D6C7B]">Оптовый отдел</p>
                                                <h2 className="text-[16px] font-semibold">+7 (499) 281-64-52</h2>
                                                <p className="text-[#5D6C7B]">пн-сб 10:00 - 19:00</p>
                                            </div>
                                        </div>
                                        <div className="py-4 px-5">
                                            <p className="text-[#5D6C7B]">Отдел рекламаций и претензий</p>
                                            <h2 className="text-[16px] font-semibold">+7 (499) 350-76-92</h2>
                                            <p className="text-[#5D6C7B]">ср-вс с 10:00 до 19:00</p>
                                        </div>
                                        
                                    </div>
                                </Popover>

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
                                <CompareMenu/>
                                <LikeMenu/>
                                <CartMenu/>
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
            </div>
        </>
    )
}