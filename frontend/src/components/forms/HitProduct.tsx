import { AlertOrderProduct } from "./AlertOrderProduct";
import { ActionIcon } from "../buttons/ActionIcon";
import { formatPrice, getTagColor } from '../format';
import { useApiData } from "../useApiData";

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

const HitProductItem = ({ product }: { product: Product }) => {
    return (
        <div className="border-[#EAEBED] border rounded-xl w-70 my-[65px]">
            <div 
                className="img w-full h-[230px] bg-cover bg-center"
                style={{ backgroundImage: `url(${product.img})` }}
            >
                <div className="flex items-center justify-between px-2.5 pt-1">
                    <div className={`py-1 px-2 rounded-[5px] text-white gap-[30px] text-[12px] ${getTagColor(product.descr)}`}>
                        {product.descr}
                    </div>
                    <ActionIcon type="compare" product={product}/>
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
                        <div className="grid sm:flex gap-2.5">
                            {product.count > 0 && (
                                <ActionIcon type="cart" product={product}/>
                            )}
                            <ActionIcon type="like" product={product}/>
                        </div>
                    </div>
                    <div className="justify-center flex">
                        {
                            product.count === 0 ? (
                                <AlertOrderProduct product={product}/>
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
    );
};

const MobileHitProductItem = ({ product }: { product: Product }) => {
    return (
        <div className="border-[#EAEBED] border rounded-xl w-full">
            <div 
                className="img w-full h-[180px] bg-cover bg-center"
                style={{ backgroundImage: `url(${product.img})` }}
            >
                <div className="flex items-center justify-between px-2.5 pt-1">
                    <div className={`py-1 px-2 rounded-[5px] text-white gap-[30px] text-[10px] ${getTagColor(product.descr)}`}>
                        {product.descr}
                    </div>
                    <ActionIcon type="compare" product={product}/>
                </div>
            </div>
            <div className="desc">
                <div className="px-4 py-4 grid gap-3">
                    <div>
                        <h3 className="text-base font-semibold leading-tight">{product.name}</h3>
                    </div>
                    <div className="flex justify-between">
                        <div className="grid gap-2">
                            <div className="flex gap-2 items-center">
                                <img className="w-4" src="./acum.svg" alt="" />
                                <p className="text-[#5D6C7B] text-sm">{product.acum} mAh</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img className="w-4" src="./speed.svg" alt="" />
                                <p className="text-[#5D6C7B] text-sm">{product.speed} км/ч</p>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex gap-2 items-center">
                                <img className="w-4" src="./power.svg" alt="" />
                                <p className="text-[#5D6C7B] text-sm">{product.power}кВт</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img className="w-4" src="./time.svg" alt="" />
                                <p className="text-[#5D6C7B] text-sm">{product.time} ч</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="line-through! text-[#5D6C7B] text-[10px]">
                                {formatPrice(product.oldprice)} ₽
                            </p>
                            <p className="text-[16px] font-semibold">{formatPrice(product.price)} ₽</p>
                        </div>
                        <div className="grid sm:flex gap-2">
                            {product.count > 0 && (
                                <ActionIcon type="cart" product={product}/>
                            )}
                            <ActionIcon type="like" product={product}/>
                        </div>
                    </div>
                    <div className="justify-center flex">
                        {
                            product.count === 0 ? (
                                <AlertOrderProduct product={product}/>
                            ) : (
                                <button className="bg-[#6F73EE] w-full py-2 text-white rounded-[5px] hover:bg-white hover:text-[#6F73EE] border hover:border-[#6F73EE] transition-colors text-sm">
                                    Купить в 1 клик
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export const HitProduct = () => {
    const { data, loading } = useApiData<Product>('/product/hit');
    
    return (
        <>
            <div className="lg:hidden grid grid-cols-2 gap-4 w-full px-4">
                {data.slice(0, 2).map((product) => (
                    <MobileHitProductItem 
                        key={product.id} 
                        product={product}
                    />
                ))}
            </div>

            <div className="hidden lg:flex justify-between w-7xl">
                {data.map((product) => (
                    <HitProductItem 
                        key={product.id} 
                        product={product}
                    />
                ))}
            </div>
        </>
    );
};