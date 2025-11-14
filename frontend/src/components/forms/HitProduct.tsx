import axios from "axios";
import { useEffect, useState } from "react";
import { CompareIcon } from "../buttons/CompareIcon";
import { CartIcon } from "../buttons/CartIcon";
import { HeartAlt } from "../buttons/HeartAlt";
import { AlertOrderProduct } from "./AlertOrderProduct";

interface Product {
    id: number;
    name: string;
    price: number;
    oldprice: number;
    img: string;
    acum: string;
    speed: string;
    power: string;
    time: string;
    descr: string;
    type: string;
    count: number;
}

export function HitProduct(){
    const [data, setData] = useState<Product[]>([]);
    
    const fetchItems = async () => {
        try {
            const response = await axios.get("http://localhost:3000/product/hit");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };
    const formatPrice = (price : number) => {
        if (!price) return '';
        
        let cleanPrice = price.toString()
            .replace(/[,.]00$/, '')
            .replace(/[^\d,.]/g, '');
        
        cleanPrice = cleanPrice.replace(/[,.]/, '');
        
        return cleanPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };
    const getTagColor = (descr : string) => {
        if (!descr) return 'opacity-0';
        if (descr === 'Хит') return 'bg-[#EE685F]';
        if (descr === 'Новинка') return 'bg-[#75D14A]';
        return 'bg-[#EE685F]';
    };
    useEffect(() => {
            fetchItems();
        }, []);
    return(
        <>
            <div className="flex justify-between w-7xl">
                {data.map((product) => (
                    <div key={product.id} className="border-[#EAEBED] border rounded-xl w-70 my-[65px]">
                        <div 
                            className="img w-full h-[230px] bg-cover bg-center"
                            style={{ backgroundImage: `url(${product.img})` }}
                        >
                            <div className="flex items-center justify-between px-2.5 pt-1">
                                <div className={`py-1 px-2 rounded-[5px] text-white gap-[30px] text-[12px] ${getTagColor(product.descr)}`}>
                                    {product.descr}
                                </div>
                                <CompareIcon product={{
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    img: product.img
                                }}/>
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
                                        {product.count >0 && (
                                            <CartIcon product={{
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                img: product.img
                                            }}/>

                                        )}
                                        <HeartAlt product={{
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            img: product.img
                                        }}/>
                                    </div>
                                </div>
                                <div className="justify-center flex">
                                    {
                                        product.count === 0 ? (
                                            <AlertOrderProduct product={{
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                img: product.img
                                            }}/>
                                        ) : (
                                            <button className="bg-[#6F73EE] w-full py-2.5 text-white rounded-[5px] hover:bg-white hover:text-[#6F73EE] border hover:border-[#6F73EE] transition-colors">
                                                Купить в 1 клик
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}