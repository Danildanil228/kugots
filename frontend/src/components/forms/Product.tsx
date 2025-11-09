import { CartIcon } from "../buttons/CartIcon";
import { CompareIcon } from "../buttons/CompareIcon";
import { HeartAlt } from "../buttons/HeartAlt";
import { WatchAll } from "../buttons/WatchAll";
import { useState, useEffect } from 'react'
import axios from 'axios'

export function Product(){
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    
    const fetchItems = async () => {
        try {
            const response = await axios.get("http://localhost:3000/product");
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
    
    const getTagColor = (descr) => {
        if (!descr) return 'opacity-0';
        if (descr === 'Хит') return 'bg-[#EE685F]';
        if (descr === 'Новинка') return 'bg-[#75D14A]';
        return 'bg-[#EE685F]';
    };

    const visibleProducts = showAll ? data : data.slice(0, 8);

    useEffect(() => {
        fetchItems();
    }, []);
  

    return(
        <div className="grid gap-[30px]">
            <div className="grid grid-cols-4 gap-[30px]">
                {visibleProducts.map((product) => (
                    <div key={product.id} className="border-[#EAEBED] border rounded-xl">
                        <div 
                            className="img w-full h-[230px] bg-cover bg-center"
                            style={{ backgroundImage: `url(${product.img})` }}
                        >
                            <div className="flex items-center justify-between px-2.5 pt-1">
                                <div className={`py-1 px-2 rounded-[5px] text-white gap-[30px] text-[12px] ${getTagColor(product.descr)}`}>
                                    {product.descr}
                                </div>
                                <CompareIcon/>
                            </div>
                        </div>
                        <div className="desc">
                            <div className="px-6 py-6 grid gap-5">
                                <div>
                                    <h3 className="text-[18px] font-semibold">{product.name}</h3>
                                </div>
                                <div className="flex justify-between">
                                    <div className="grid gap-4">
                                        <div className="flex gap-2.5">
                                            <img className="w-5" src="./acum.svg" alt="" />
                                            <p className="text-[#5D6C7B]">{product.acum} mAh</p>
                                        </div>
                                        <div className="flex gap-2.5">
                                            <img className="w-5" src="./speed.svg" alt="" />
                                            <p className="text-[#5D6C7B]">{product.speed} км/ч</p>
                                        </div>
                                    </div>
                                    <div className="grid gap-4">
                                        <div className="flex gap-2.5">
                                            <img className="w-5" src="./power.svg" alt="" />
                                            <p className="text-[#5D6C7B]">{product.power}кВт</p>
                                        </div>
                                        <div className="flex gap-2.5">
                                            <img className="w-5" src="./time.svg" alt="" />
                                            <p className="text-[#5D6C7B]">{product.time} ч</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="line-through! text-[#5D6C7B] text-[12px]">
                                            {formatPrice(product.oldprice)} ₽
                                        </p>
                                        <p className="text-[20px] font-semibold">{formatPrice(product.price)} ₽</p>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <CartIcon/>
                                        <HeartAlt/>
                                    </div>
                                </div>
                                <div className="justify-center flex">
                                    <button className="bg-[#6F73EE] w-full py-2.5 text-white rounded-[5px] hover:bg-white hover:text-[#6F73EE] border hover:border-[#6F73EE]">
                                        Купить в 1 клик
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Кнопка с меняющимся текстом */}
            {data.length > 8 && (
                <div className="flex justify-center mt-8">
                    <button onClick={() => setShowAll(!showAll)}>
                        <WatchAll text={showAll ? "Скрыть" : "Смотреть все"} />
                    </button>
                </div>
            )}
        </div>
    )
}