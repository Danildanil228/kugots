import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Breadcrumbs } from "../Breadcrumbs";
import { ActionIcon } from "../buttons/ActionIcon";
import { AlertOrderProduct } from "../forms/AlertOrderProduct";
import { formatPrice, getTagColor } from '../format';
import { Share } from "../buttons/Share"; 
import { API_BASE_URL } from '../../config/api';

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
  weight?: string;
  range?: string;
  motorPower?: string;
  description?: string;
  features?: string[];
}

export default function ProductPage() {
  const [isActive, setIsActive] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/product`);
        const products = await response.json();
        const foundProduct = products.find((p: Product) => p.id === parseInt(id || ''));
        setProduct(foundProduct || null);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const getImagePath = (imagePath: string) => {
    return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  };

  const productImages = product ? [
    getImagePath(product.img),
    getImagePath(product.img), 
    getImagePath(product.img)
  ] : [];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6F73EE]"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <Link to="/samokat" className="text-[#6F73EE] hover:underline">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }
  

  return (
    <>
      <section className="container justify-center flex min-h-screen sm:px-0!">
        <div className='flex justify-between w-7xl'>

          <div className="w-full max-w-7xl">
            <div className="mt-10 ">
              <Breadcrumbs items={[
                { label: 'Главная', path: '/main' },
                { label: 'Каталог', path: '/catalog' },
                { label: 'Электросамокаты', path: '/samokat' },
                { label: product.name }
              ]} />
            </div>

            <div className="flex flex-col lg:flex-row gap-8  my-8">
              {/* Левая */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg p-4 border border-[#EAEBED]">
                  <div className="w-full h-96 bg-cover bg-center rounded-lg mb-4"
                    style={{ backgroundImage: `url(${productImages[selectedImage]})` }} />
                  <div className="flex gap-2">
                    {productImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-20 h-20 bg-cover bg-center rounded border-2 ${
                          selectedImage === index ? 'border-[#6F73EE]' : 'border-transparent'
                        }`}
                        style={{ backgroundImage: `url(${image})` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Правая  */}
              <div className="lg:w-1/2">
                <div className=" rounded-lg p-6 border border-[#EAEBED]">
                  {/* Заголовок и тег */}
                  <div className="flex items-start justify-between mb-4">
                    <h1 className="text-2xl lg:text-3xl font-semibold">{product.name}</h1>
                    <div className={`py-1 px-2 rounded-[5px] text-white text-sm ${getTagColor(product.descr)}`}>
                      {product.descr}
                    </div>
                  </div>

                  {/* Цена */}
                  <div className="mb-6">
                    {product.oldprice && (
                      <p className="line-through text-gray-500 text-lg">
                        {formatPrice(product.oldprice)} ₽
                      </p>
                    )}
                    <p className="text-3xl font-bold text-[#6F73EE]">
                      {formatPrice(product.price)} ₽
                    </p>
                  </div>

                  {/* Характеристики */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <img src="/acum.svg" className="w-5 h-5" alt="Батарея" />
                      <span className="text-gray-700">{product.acum} mAh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/speed.svg" className="w-5 h-5" alt="Скорость" />
                      <span className="text-gray-700">{product.speed} км/ч</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/power.svg" className="w-5 h-5" alt="Мощность" />
                      <span className="text-gray-700">{product.power} кВт</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/time.svg" className="w-5 h-5" alt="Время" />
                      <span className="text-gray-700">{product.time} ч</span>
                    </div>
                  </div>

                  {/* Количество и кнопки */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="font-medium">Количество:</span>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{quantity}</span>
                        <button 
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {product.count === 0 ? (
                        <div className="flex-1">
                          <AlertOrderProduct product={product} />
                        </div>
                      ) : (
                        <>
                          <button className="flex-1 py-3 bg-[#6F73EE] text-white rounded-lg hover:bg-[#5a5fd8] transition-colors">
                            Купить сейчас
                          </button>
                          <button className="flex-1 py-3 border border-[#6F73EE] text-[#6F73EE] rounded-lg hover:bg-[#6F73EE] hover:text-white transition-colors">
                            В корзину
                          </button>
                        </>
                      )}
                    </div>

                    {/* Действия */}
                    <div className="flex gap-4 pt-4 border-t border-gray-200">
                      <ActionIcon type="like" product={product} />
                      <ActionIcon type="compare" product={product} />
                      <Share />
                    </div>
                  </div>
                </div>

                {/* Дополнительная информация */}
                <div className=" rounded-lg p-6 border border-[#EAEBED] mt-6">
                  <h3 className="font-semibold text-lg mb-4">О товаре</h3>
                  <p className="text-gray-700">
                    {product.description || 'Высококачественный электросамокат с отличными характеристиками...'}
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Особенности:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {(product.features || [
                        'Мощный двигатель',
                        'Долгий срок службы батареи',
                        'Прочная конструкция',
                        'Современный дизайн'
                      ]).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
{/* Комплектация */}
                <div className='py-8'>
                  <div className='flex items-center gap-1 text-center'>
                      <h3 className='font-semibold'>Комплектация</h3>
                      <img src="/q.svg" alt="" className='cursor-pointer' />
                  </div>
                  <div className='flex flex-wrap text-center gap'>
                      
                      <button onClick={handleClick} className={`border rounded-xl sm:py-7 w-[227px] ${isActive ? 'border-[#6F73EE]' : 'border-[#EAEBED]'}`}>Базовая</button>
                      <button onClick={handleClick} className={`border rounded-xl sm:py-7 w-[227px] ${isActive ? 'border-[#6F73EE]' : 'border-[#EAEBED]'}`}>Версия MAX</button>
                      <button onClick={handleClick} className={`border rounded-xl sm:py-7 w-[227px] ${isActive ? 'border-[#6F73EE]' : 'border-[#EAEBED]'}`}>VIP-версия</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}