import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Breadcrumbs } from "../Breadcrumbs";
import { ActionIcon } from "../buttons/ActionIcon";
import { AlertOrderProduct } from "../forms/AlertOrderProduct";
import { formatPrice, getTagColor } from '../format';
import { Share } from "../buttons/Share"; 
import { API_BASE_URL } from '../../config/api';
import { Box, Checkbox, Tabs, Text } from '@radix-ui/themes';
import { More } from '../buttons/More';
import { PhoneNumber } from '../forms/PhoneNumber';
import { useFormSubmit } from '../forms/useFormSubmit';
import { CaruselSlider } from '../forms/CaruselSlider';
import { HitProduct } from '../forms/HitProduct';
import { ScrollToTop } from '../ScrollToTop';

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

  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const handlePhoneChange = (value: string, isValid: boolean) => {
      setPhone(value);
      setIsPhoneValid(isValid);
  };
  const [isChecked, setIsChecked] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { submit: submitCallOrder, isLoading: isCallLoading, error: callError } = useFormSubmit({
    endpoint: '/api/call-order',
    onSuccess: () => {
        setIsSubmitted(true);
        setPhone('');
        setIsPhoneValid(false);
        setIsChecked(true);
    }
});
const handleCallOrder = async () => {
  if (!isPhoneValid || !isChecked) return;
  await submitCallOrder({ 
      phone: phone,
      type: 'callback-consult'
  });
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
    <ScrollToTop/>
      <section className="container justify-center flex flex-wrap sm:grid min-h-screen sm:px-0!">
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
                          <ActionIcon type='cart' product={product}/>
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
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* О товаре */}
        <div>
          <Tabs.Root defaultValue="about" className='text-2xl!'>
            <Tabs.List className='flex flex-wrap justify-center! sm:justify-between! text-[14px]!'>
              <Tabs.Trigger  value="about">О товаре</Tabs.Trigger>
              <Tabs.Trigger value="set">Характеристики</Tabs.Trigger>
              <Tabs.Trigger value="delivery">Доставка и оплата</Tabs.Trigger>
              <Tabs.Trigger value="garant">Гарантии</Tabs.Trigger>
              <Tabs.Trigger value="max">Версия MAX</Tabs.Trigger>
            </Tabs.List>

            <Box pt="3">
              <Tabs.Content value="about">
                <div className="sm:flex grid justify-between! gap-10 text-center sm:text-start">
                  <div className="grid gap-7 max-w-[500px]">
                    <h2 className='font-semibold uppercase text-[25px]'>Электросамокат {product.name} c мощными характеристиками и стильным дизайном</h2>
                    <p className='text-[14px]'>Приобретая самокат {product.name}, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p>
                    <p className='text-[14px]'>Самокат может набирать скорость до {product.speed} км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>
                  </div>
                  <div className="grid gap-4">
                    <h2>Что в комплекте</h2>
                    <div className='grid grid-cols-2 items-center text-[14px] gap-2 justify-center text-center'>
                      <div className="flex gap-3">
                        <img className='w-5' src="/charger1.svg" alt="" />
                        <p>Инструкция</p>
                      </div>
                      <div className="flex gap-3">
                        <img className='w-5' src="/file1.svg" alt="" />
                        <p>Чехол</p>
                      </div>
                      <div className="flex gap-3">
                        <img className='w-5' src="/guarantee2.svg" alt="" />
                        <p>Зарядное устройство</p>
                      </div>
                      <div className="flex gap-3">
                        <img className='w-5' src="/scooter1.svg" alt="" />
                        <p>Гарантийный талон</p>
                      </div>
                    </div>
                    <div className='grid'>
                      <h2 className='font-semibold'>Ключевые особенности Kugoo Kirin M4</h2>
                      <div className='flex gap-4 text-[14px] items-center'>
                        <p className='px-5 py-3 bg-[#F4F7FB]'>Для города</p>
                        <p className='px-5 py-3 bg-[#F4F7FB]'>Быстрый</p>
                        <p className='px-5 py-3 bg-[#F4F7FB]'>Комфортный</p>
                        <p className='px-5 py-3 bg-[#F4F7FB]'>Легкий</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tabs.Content>

              <Tabs.Content value="set">
                <Text size="2">Access and update your documents.</Text>
              </Tabs.Content>

              <Tabs.Content value="delivery">
                <Text size="2">Edit your profile or update contact information.</Text>
              </Tabs.Content>
              <Tabs.Content value="garant">
                <Text size="2">Edit your profile or update contact information.</Text>
              </Tabs.Content>
              <Tabs.Content value="max">
                <Text size="2">Edit your profile or update contact information.</Text>
              </Tabs.Content>
            </Box>
            </Tabs.Root>
        </div>
        {/* Запишитесь на бесплатный тест-драйв Kugoo Kirin M4 в Москве */}
        <div className="flex justify-center my-8 lg:my-[100px]">
            <div className="hidden lg:block w-[1440px]">
                <div className="bg-[#F4F7FB] rounded-[10px] p-7 w-full">
                    <div className="flex justify-between gap-20">
                        <div className="bg-[url('/bg-kugo.svg')] bg-cover bg-center bg-no-repeat rounded-xl w-[606px] h-[565px] relative">
                        </div>
                        
                        {/* Правая часть - текст */}
                        <div className="">
                            <div>
                              <h1 className='uppercase font-semibold w-[500px] text-[35px]'>Запишитесь на бесплатный тест-драйв Kugoo Kirin M4 в Москве</h1>
                              <p>Оставьте свой номер, менеджер свяжется с вами в течение 5 минут, чтобы уточнить дату и время</p>
                            </div>
                            <div className='flex flex-wrap gap-10 py-20'>
                              <PhoneNumber onPhoneChange={handlePhoneChange} value={phone}/>
                              <button 
                                  className={`py-3 px-5 rounded-[5px] text-[#6F73EE] bg-white transition-colors ${
                                      isSubmitted 
                                          ? 'bg-green-500 cursor-default' 
                                          : !isPhoneValid || !isChecked || isCallLoading 
                                              ? 'bg-[#6F73EE] opacity-50 cursor-not-allowed' 
                                              : ''
                                  }`}
                                  onClick={isSubmitted ? undefined : handleCallOrder}
                                  disabled={isSubmitted || !isPhoneValid || !isChecked || isCallLoading}
                              >
                                  {isSubmitted ? 'отправлено!' : (isCallLoading ? 'Отправка...' : 'Оставить заявку на тест-драйв')}
                              </button>
                              <div className='flex gap-3 items-center'>
                                  <Checkbox checked={isChecked} onCheckedChange={(checked) => setIsChecked(checked === true)} />
                                  <p className='sm:text-start text-[14px]'>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="" className='underline!'>политикой конфиденциальности</a></p>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile версия */}
            <div className="lg:hidden w-full px-4">
                <div className="bg-[#F4F7FB] rounded-[10px] p-6 w-full">
                    <div className="flex flex-col gap-6">
                        {/* Текст */}
                        <div className="grid gap-4">
                            <p className="text-2xl font-semibold uppercase leading-tight">Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</p>
                            <p className="text-sm">Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                        </div>
                        
                        {/* Изображение */}
                        <div className="bg-[url('/bg-kugo.svg')] bg-cover bg-center bg-no-repeat rounded-xl w-full h-[200px] relative">
                            <div className="absolute bottom-4 right-4">
                                <div className="TEXT grid w-fit gap-3 rounded-2xl text-white backdrop-blur-[10px] p-3 bg-black/30">
                                    <div>
                                        <h2 className="text-base font-semibold">Тест-драйв в Москве</h2>
                                        <p className="text-sm w-40">Оцените все преимущества самокатов лично</p>
                                    </div>
                                    <More/>
                                </div>
                            </div>
                        </div>

                        {/* Список преимуществ */}
                        <div className="grid bg-white p-4 rounded-2xl gap-4">
                            <p className="font-semibold text-sm">Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</p>
                            <div className="grid gap-2">
                                <div className="flex gap-2.5 items-center">
                                    <img src="/list.svg" className="w-3 h-3" alt="" />
                                    <p className="text-sm">цены от завода-изготовителя Jilong;</p>
                                </div>
                                <div className="flex gap-2.5 items-center">
                                    <img src="/list.svg" className="w-3 h-3" alt="" />
                                    <p className="text-sm">бесплатный тест-драйв самокатов;</p>
                                </div>
                                <div className="flex gap-2.5 items-center">
                                    <img src="/list.svg" className="w-3 h-3" alt="" />
                                    <p className="text-sm">фирменную гарантию 1 год;</p>
                                </div>
                                <div className="flex gap-2.5 items-center">
                                    <img src="/list.svg" className="w-3 h-3" alt="" />
                                    <p className="text-sm">ремонт и обслуживание от 1 дня в собственном сервисном центре;</p>
                                </div>
                                <div className="flex gap-2.5 items-center">
                                    <img src="/list.svg" className="w-3 h-3" alt="" />
                                    <p className="text-sm">более 1 000 запчастей и аксессуаров в наличии</p>
                                </div>
                            </div>
                            <button className="text-[#6F73EE] w-fit text-sm">Смотреть сертификат</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          <div className='justify-center grid'>
            <div className='justify-center text-center gap-3 lg:gap-4 grid mb-6 lg:mb-0'>
                <h1 className='uppercase font-semibold text-2xl lg:text-[35px]'>Отзывы и фото реальных покупателей</h1>
                <div className='flex justify-center'>
                    <button className='text-[#6F73EE] flex gap-2 items-center text-center text-sm lg:text-base'>
                        <p>Читать отзывы на Яндекс</p>
                        <img src="./arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                    </button>
                </div>
            </div>
        </div>
        <CaruselSlider/>
        <div className="flex justify-center hidden md:block">
          <div className="w-7xl">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                  {/* Подбор модели */}
                  <div className="bg-[url('/model.svg')] bg-cover bg-no-repeat bg-center flex flex-col justify-between p-6 lg:p-8 rounded-[5px] min-h-[200px] lg:min-h-[280px] lg:w-1/2">
                      <div className="grid gap-3">
                          <h1 className="uppercase font-semibold text-xl lg:text-2xl leading-7 lg:leading-8">
                              Подбор модели<br/>электросамоката
                          </h1>
                          <p className="text-sm lg:text-base">
                              Пройдите тест и выберите<br/>электросамокат по своим критериям
                          </p>
                      </div>
                      <button className="text-[#6F73EE] gap-2 flex items-center text-sm lg:text-base w-fit mt-4">
                          Подобрать модель
                          <img src="/arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                      </button>
                  </div>
                  
                  {/* Сервисное обслуживание */}
                  <div className="bg-[url('/servise.svg')] bg-cover bg-no-repeat bg-center flex flex-col justify-between p-6 lg:p-8 rounded-[5px] min-h-[200px] lg:min-h-[280px] lg:w-1/2">
                      <div className="grid gap-3">
                          <h1 className="uppercase font-semibold text-xl lg:text-2xl leading-7 lg:leading-8">
                              Сервисное<br/>обслуживание
                          </h1>
                          <p className="text-sm lg:text-base">
                              Крупнейший сервисный центр<br/>в России для продуктов Kugoo
                          </p>
                      </div>
                      <Link to='/service' className="text-[#6F73EE] gap-2 flex items-center text-sm lg:text-base w-fit mt-4">
                          Перейти в сервис
                          <img src="/arrow4.svg" alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
                      </Link>
                  </div>
              </div>
          </div>
      </div>
      <div className="justify-center my-8 lg:my-20">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
            <div className='flex justify-center mb-6 lg:mb-8'>
                <h1 className='text-xl lg:text-[35px] font-semibold uppercase text-center'>Часто покупают</h1>
            </div>
            <div className='mt-4 lg:mt-0'>
                <HitProduct/>
            </div>
        </div>
    </div>
      </section>
    </>
  );
}