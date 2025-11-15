import { useState, useEffect } from 'react'
import axios from 'axios'
import { WatchAll } from '../buttons/WatchAll';
import { API_BASE_URL } from '../../config/api';

export function Category(){
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    
    const fetchItems = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/category`);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const formatPrice = (price) => {
        if (!price) return '';
        
        let cleanPrice = price.toString()
            .replace(/[,.]00$/, '')
            .replace(/[^\d,.]/g, '');
        
        cleanPrice = cleanPrice.replace(/[,.]/, '');
        
        return cleanPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    const visibleProducts = showAll ? data : data.slice(0, 8);

    useEffect(() => {
        fetchItems();
    }, []);

    return(
        <>
            {/* Desktop версия */}
            <div className="hidden lg:flex justify-between w-7xl items-center">
                <p className="text-[35px] uppercase font-semibold">Популярные категории</p>
                <div className="flex items-center bg-[#F4F7FB] rounded-[5px] gap-5 p-3">
                    <img src="./manager.svg" alt="" />
                    <div className="grid gap-1">
                        <p className='max-w-55'>Менеджер ответит на любой ваш вопрос о продуктах Kugoo</p>
                        <button className="w-fit text-[#6F73EE]">Задать вопрос</button>
                    </div>
                </div>
            </div>

            {/* Mobile версия - только заголовок */}
            <div className="lg:hidden flex justify-center mb-6">
                <p className="text-2xl uppercase font-semibold text-center">Популярные категории</p>
            </div>

            <div className='justify-center flex mt-6 lg:mt-[68px]'>
                <div className='w-full lg:w-7xl px-4 lg:px-0'>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-[30px]">
                        {visibleProducts.map((category) => (
                            <div key={category.id} className="flex justify-center">
                                <button className="w-full">
                                    {/* Desktop  */}
                                    <div className="hidden lg:block w-full h-[255px] rounded-[5px] items-end justify-start grid px-3 pt-44 pb-2 bg-cover bg-center" style={{ backgroundImage: `url(${category.img})`}}>
                                        <div className="bg-[#00000033] backdrop-blur-[2px] text-white px-4 py-3 rounded-xl w-[270px]">
                                            <h3 className="text-[18px] w-fit">{category.name}</h3>
                                            <p className="text-[14px] w-fit">от {formatPrice(category.price)} ₽</p>
                                        </div>
                                    </div>
                                    
                                    {/* Mobile версия - компактные кнопки */}
                                    <div className="lg:hidden w-full h-14 rounded-[5px] bg-[#F4F7FB] flex items-center justify-center px-2 border border-[#EAEBED] hover:border-[#6F73EE] transition-colors">
                                        <div className="text-center">
                                            <h3 className="text-xs font-semibold text-gray-900 leading-tight">{category.name}</h3>
                                            <p className="text-[10px] text-[#5D6C7B]">от {formatPrice(category.price)} ₽</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {data.length > 8 && (
                <div className="flex justify-center mt-6 lg:mt-8">
                    <button onClick={() => setShowAll(!showAll)}>
                        <WatchAll text={showAll ? "Скрыть" : "Смотреть все"} />
                    </button>
                </div>
            )}
        </>
    )
}