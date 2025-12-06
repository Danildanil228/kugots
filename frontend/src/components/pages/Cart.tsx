import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { Breadcrumbs } from "../Breadcrumbs";
import { formatPrice } from "../format";
import { ScrollToTop } from "../ScrollToTop";
import { HitProduct } from "../forms/HitProduct";
import { Checkbox } from "@radix-ui/themes";

export default function Compare() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCart();
  let akcia = 8000
  return (
    <>
      <section className="flex container justify-center min-h-screen">
        <ScrollToTop />
        <div>
          <div className="mt-10 justify-between w-7xl">
            <Breadcrumbs
              items={[
                { label: "Главная", path: "/main" },
                { label: "Корзина" },
              ]}
            />
          </div>
          <div className="mb-10">
            <p className="font-semibold uppercase text-[35px]">Моя корзина</p>
          </div>
          <div className="">
            {cartItems.length === 0 ? (
              <div className="grid gap-4">
                <div className="justify-center grid w-full text-center items-center bg-[#F4F7FB] gap-3 py-12 rounded-xl">
                  <div className="justify-center flex">
                    <img src="/bgimc.svg" alt="" />
                  </div>
                  <h1 className="font-semibold text-[25px] uppercase">
                    Ваша корзина пуста
                  </h1>
                  <p>Добавьте в нее товары из каталога</p>
                  <button className="mt-10">
                    <Link
                      className="text-white bg-[#6F73EE] px-8 rounded-xl py-2"
                      to="/catalog"
                    >
                      Перейти в каталог
                    </Link>
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-4">
                <p>{getTotalItems()} товар</p>
                <div className="justify-center flex">
                  <div className="justify-between w-7xl flex">
                    <div>
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="border rounded-lg p-4 flex justify-between items-center"
                        >
                          <div className="flex items-center gap-4">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                              <h2 className="font-semibold">{item.name}</h2>
                              <p className="text-[#6F73EE] font-bold">
                                {formatPrice(item.price)} ₽
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Удалить
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="grid gap-4 bg-[#F4F7FB] p-5">
                        <div>
                            <p>Итого</p>
                            <h1 className="font-semibold text-[25px] uppercase">{getTotalPrice()} ₽</h1>
                        </div>
                        <div className="border-y border-[#5D6C7B] flex justify-between gap-10 py-5">
                            <div className="grid gap-4">
                                <p>Стоимость товаров</p>
                                <p>Сумма скидки</p>
                                <p>Итого без учета доставки</p>
                            </div>
                            <div className="grid gap-4">
                                <p className="font-semibold">{getTotalPrice()} ₽</p>
                                <p className="font-semibold">{akcia} ₽</p>
                                <p className="font-semibold">{getTotalPrice() - akcia} ₽</p>
                            </div>
                            
                        </div>
                        <div className="grid">
                            <button className="text-white bg-[#6F73EE] py-5 rounded-xl">Оформить заказ</button>
                            <div className="flex gap-4 mt-5">
                                <Checkbox variant="soft" />
                                    <p className='w-59 text-[14px]'>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="" className='text-[#6F73EE]'>политикой конфиденциальности</a></p>
                            </div>
                        </div>
                        
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-20">
            <h1 className="font-semibold text-[35px] uppercase">
              Рекомендуем вам
            </h1>
            <HitProduct />
          </div>
        </div>
      </section>
    </>
  );
}
