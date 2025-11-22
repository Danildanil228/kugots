import { WatchAll } from "../buttons/WatchAll";
import { useState, memo, useCallback } from 'react';
import { AlertOrderProduct } from "./AlertOrderProduct";
import { ActionIcon } from "../buttons/ActionIcon";
import { useApiData } from "../useApiData";
import { formatPrice, getTagColor } from '../format';

interface ProductItem {
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

interface ProductProps {
  activeFilter: string;
}

const ProductItem = memo(({ product }: { product: ProductItem }) => {
  return (
    <div className="border-[#EAEBED] border rounded-xl w-full">
      <div 
        className="img w-full h-[180px] lg:h-[230px] bg-cover bg-center"
        style={{ backgroundImage: `url(${product.img})` }}
      >
        <div className="flex items-center justify-between px-2.5 pt-1">
          <div className={`py-1 px-2 rounded-[5px] text-white gap-[30px] text-[12px] ${getTagColor(product.descr)}`}>
            {product.descr}
          </div>
          <ActionIcon type="compare" product={{
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img
          }}/>
        </div>
      </div>
      <div className="desc">
        <div className="px-4 lg:px-6 py-4 lg:py-6 grid gap-4 lg:gap-5">
          <div>
            <h3 className="text-[16px] lg:text-[18px] font-semibold leading-tight">{product.name}</h3>
          </div>
          <div className="flex justify-between">
            <div className="grid gap-3 lg:gap-4">
              <div className="flex gap-2 lg:gap-2.5 items-center">
                <img className="w-4 lg:w-5" src="./acum.svg" alt="" />
                <p className="text-[#5D6C7B] text-sm lg:text-base">{product.acum} mAh</p>
              </div>
              <div className="flex gap-2 lg:gap-2.5 items-center">
                <img className="w-4 lg:w-5" src="./speed.svg" alt="" />
                <p className="text-[#5D6C7B] text-sm lg:text-base">{product.speed} км/ч</p>
              </div>
            </div>
            <div className="grid gap-3 lg:gap-4">
              <div className="flex gap-2 lg:gap-2.5 items-center">
                <img className="w-4 lg:w-5" src="./power.svg" alt="" />
                <p className="text-[#5D6C7B] text-sm lg:text-base">{product.power}кВт</p>
              </div>
              <div className="flex gap-2 lg:gap-2.5 items-center">
                <img className="w-4 lg:w-5" src="./time.svg" alt="" />
                <p className="text-[#5D6C7B] text-sm lg:text-base">{product.time} ч</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="line-through! text-[#5D6C7B] text-[10px] lg:text-[12px]">
                {formatPrice(product.oldprice)} ₽
              </p>
              <p className="text-[16px] lg:text-[20px] font-semibold">{formatPrice(product.price)} ₽</p>
            </div>
            <div className="sm:flex gap-2 lg:gap-2.5 grid">
              {product.count > 0 && (
                <ActionIcon type="cart" product={{
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  img: product.img
                }}/>
              )}
              <ActionIcon type="like" product={{
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
                <button className="bg-[#6F73EE] w-full py-2 lg:py-2.5 text-white rounded-[5px] hover:bg-white hover:text-[#6F73EE] border hover:border-[#6F73EE] transition-colors text-sm lg:text-base">
                  Купить в 1 клик
                </button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
});

ProductItem.displayName = 'ProductItem';

export const Product = memo(({ activeFilter }: ProductProps) => {
  
  const [showAll, setShowAll] = useState(false);
  
  
  const getFilterType = useCallback((buttonText: string) => {
    switch(buttonText) {
      case 'Хиты продаж': return ''; 
      case 'Для города': return 'city';
      case 'Для взрослых': return 'man';
      case 'Для детей': return 'child';
      default: return '';
    }
  }, []);
  
  const handleShowAll = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);
  
  const filterType = getFilterType(activeFilter);
  const endpoint = filterType ? `/product?type=${filterType}` : '/product';
  const { data, loading } = useApiData<ProductItem>(endpoint, [activeFilter]);
  

  const visibleProducts = showAll ? data : data.slice(0, 8);
  const shouldShowWatchAll = data.length > 8;

  return(
    <div className="grid gap-4 lg:gap-[30px]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[30px]">
        {visibleProducts.map((product) => (
          <ProductItem 
            key={product.id} 
            product={product}
          />
        ))}
      </div>
      {shouldShowWatchAll && (
        <div className="flex justify-center mt-6 lg:mt-8">
          <button onClick={handleShowAll}>
            <WatchAll text={showAll ? "Скрыть" : "Смотреть все"} />
          </button>
        </div>
      )}
    </div>
  );
});

Product.displayName = 'Product';

export default Product;