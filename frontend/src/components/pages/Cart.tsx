import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { Breadcrumbs } from "../Breadcrumbs";
import { formatPrice } from "../format";
import { ScrollToTop } from "../ScrollToTop";
import { HitProduct } from "../forms/HitProduct";
import { AlertDialog, Button, Checkbox, Flex } from "@radix-ui/themes";
import { IconButton } from "@mui/material";

export default function Compare() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();
  let akcia = 8000;

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
                <div className="flex justify-between items-center w-7xl mx-auto">
                  <p>{getTotalItems()} товара</p>
                  
                </div>
                <div className="justify-center flex">
                  <div className="justify-between w-7xl flex gap-8">
                    <div className="flex-1">
                      {/* Заголовки таблицы */}
                      <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 rounded-t-lg border-b">
                        <div className="col-span-6 font-medium">Товар</div>
                        <div className="col-span-3 font-medium text-center">Количество</div>
                        <div className="col-span-2 font-medium text-center">Сумма</div>
                        <div className="col-span-1"><AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <Button variant="ghost" color="gray" className="text-gray-500 hover:text-gray-700">
                        Удалить все
                      </Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content>
                      <AlertDialog.Title>Удалить все?</AlertDialog.Title>
                      <AlertDialog.Description>
                        После удаления все товары пропадут из корзины!
                      </AlertDialog.Description>
                      <Flex gap="3" justify="end" mt="4">
                        <AlertDialog.Cancel>
                          <Button variant="soft" color="gray">
                            Отмена
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button
                            variant="solid"
                            color="red"
                            onClick={() => clearCart()}
                          >
                            Удалить
                          </Button>
                        </AlertDialog.Action>
                      </Flex>
                    </AlertDialog.Content>
                  </AlertDialog.Root></div>
                      </div>

                      {/* Список товаров */}
                      <div className="divide-y">
                        {cartItems.map((item) => (
                          <div key={item.id} className="py-6">
                            <div className="grid grid-cols-12 gap-4 items-start">
                              {/* Товар */}
                              <div className="col-span-6">
                                <div className="flex gap-4">
                                  <img
                                    className="w-20 h-20 object-cover rounded"
                                    src={item.img}
                                    alt=""
                                  />
                                  <div>
                                    <p className="font-semibold text-lg mb-2">{item.name}</p>
                                    <div className="flex gap-4 mb-3">
                                      {item.count > 0 && (
                                        <p className="text-green-600">В наличии</p>
                                      )}
                                      <p className="text-blue-600">+2 подарка</p>
                                    </div>
                                    <div className="text-sm text-gray-600 space-y-1">
                                      <div className="flex gap-8">
                                        <span>Комплектация: <strong>стандартная</strong></span>
                                        <span>Подарочная упаковка:</span>
                                      </div>
                                      <div className="flex gap-8">
                                        <span>Гарантия: <strong>1 год</strong></span>
                                        <span>Тип покрышки: <strong>шоссейная</strong></span>
                                      </div>
                                      <div>
                                        <span>Доп. услуги: <strong>гидроизоляция</strong></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Количество */}
                              <div className="col-span-3">
                                <div className="flex justify-center">
                                  <div className="flex bg-[#F4F7FB] items-center rounded-lg">
                                    <div>
                                      <button
                                        className="p-4 hover:bg-gray-200 rounded-l-lg"
                                        onClick={() =>
                                          updateQuantity(item.id, item.quantity - 1)
                                        }
                                      >
                                        -
                                      </button>
                                    </div>
                                    <div>
                                      <p className="px-4">{item.quantity}</p>
                                    </div>
                                    <div>
                                      <button
                                        className="p-4 hover:bg-gray-200 rounded-r-lg"
                                        onClick={() =>
                                          updateQuantity(item.id, item.quantity + 1)
                                        }
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Сумма */}
                              <div className="col-span-2">
                                <div className="text-center">
                                  <p className="font-semibold text-lg">
                                    {formatPrice
                                      ? formatPrice(item.price * item.quantity)
                                      : `${item.price * item.quantity} ₽`}
                                  </p>
                                </div>
                              </div>

                              {/* Удалить */}
                              <div className="col-span-1 flex justify-center">
                                <IconButton
                                  aria-label="delete"
                                  onClick={() => removeFromCart(item.id)}
                                  size="small"
                                >
                                  <img
                                    src="/Delete.svg"
                                    alt="delete"
                                    className="w-5 h-5"
                                  />
                                </IconButton>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Правая панель */}
                    <div className="w-96">
                      <div className="grid gap-4 bg-[#F4F7FB] p-5 rounded-xl">
                        <div>
                          <p className="text-gray-600">Итого</p>
                          <h1 className="font-semibold text-[25px] uppercase">
                            {getTotalPrice() - akcia} ₽
                          </h1>
                        </div>
                        <div className="border-y border-[#5D6C7B] space-y-4 py-5">
                          <div className="flex justify-between">
                            <p>Стоимость товаров</p>
                            <p className="font-semibold">{getTotalPrice()} ₽</p>
                          </div>
                          <div className="flex justify-between">
                            <p>Сумма скидки</p>
                            <p className="font-semibold text-green-600">{akcia} ₽</p>
                          </div>
                          <div className="flex justify-between pt-4 border-t border-[#5D6C7B]">
                            <p className="font-medium">Итого без учета доставки</p>
                            <p className="font-semibold">{getTotalPrice() - akcia} ₽</p>
                          </div>
                        </div>
                        <div className="grid">
                          <button className="text-white bg-[#6F73EE] py-4 rounded-xl hover:bg-[#5a5fd3]">
                            Оформить заказ
                          </button>
                          <div className="flex gap-4 mt-5">
                            <Checkbox variant="soft" />
                            <p className="text-sm text-gray-600">
                              Нажимая на кнопку, вы соглашаетесь на обработку
                              персональных данных и{" "}
                              <a href="" className="text-[#6F73EE]">
                                политикой конфиденциальности
                              </a>
                            </p>
                          </div>
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