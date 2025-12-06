import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { Breadcrumbs } from "../Breadcrumbs";
import { formatPrice } from "../format";
import { ScrollToTop } from "../ScrollToTop";
import { HitProduct } from "../forms/HitProduct";
import {
  AlertDialog,
  Button,
  Checkbox,
  Flex,
  RadioCards,
  Select,
  TextArea,
} from "@radix-ui/themes";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { PhoneNumber } from "../forms/PhoneNumber";
import { PhoneForCart } from "../forms/PhoneForCart";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(true);
  const [isOrderForm, setIsOrderForm] = useState(false);
  const [activeDelivery, setActiveDelivery] = useState<string | null>(null);
  let akcia = 8000;

  const handleOrderClick = () => {
    if (!isOrderForm) {
      setIsOrderForm(true);
    }
  };

  const handleBackClick = () => {
    setIsOrderForm(false);
    setActiveDelivery(null);
  };

  const handleDeliverySelect = (type: string) => {
    setActiveDelivery(type);
  };
  const handlePhoneChange = (value: string, isValid: boolean) => {
    setPhone(value);
    setIsPhoneValid(isValid);
  };
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);

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
                      {!isOrderForm ? (
                        <>
                          <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 rounded-t-lg border-b">
                            <div className="col-span-6 font-medium">Товар</div>
                            <div className="col-span-3 font-medium text-center">
                              Количество
                            </div>
                            <div className="col-span-2 font-medium text-center">
                              Сумма
                            </div>
                            <div className="col-span-1">
                              <AlertDialog.Root>
                                <AlertDialog.Trigger>
                                  <Button
                                    variant="ghost"
                                    color="gray"
                                    className="text-gray-500 hover:text-gray-700"
                                  >
                                    Удалить все
                                  </Button>
                                </AlertDialog.Trigger>
                                <AlertDialog.Content>
                                  <AlertDialog.Title>
                                    Удалить все?
                                  </AlertDialog.Title>
                                  <AlertDialog.Description>
                                    После удаления все товары пропадут из
                                    корзины!
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
                              </AlertDialog.Root>
                            </div>
                          </div>
                          <div className="divide-y">
                            {cartItems.map((item) => (
                              <div key={item.id} className="py-6">
                                <div className="grid grid-cols-12 gap-4 items-start">
                                  <div className="col-span-6">
                                    <div className="flex gap-4">
                                      <img
                                        className="w-20 h-20 object-cover rounded"
                                        src={item.img}
                                        alt=""
                                      />
                                      <div>
                                        <p className="font-semibold text-lg mb-2">
                                          {item.name}
                                        </p>
                                        <div className="flex gap-4 mb-3">
                                          {item.count > 0 && (
                                            <p className="text-green-600">
                                              В наличии
                                            </p>
                                          )}
                                          <p className="text-blue-600">
                                            +2 подарка
                                          </p>
                                        </div>
                                        <div className="text-sm text-gray-600 space-y-1">
                                          <div className="flex gap-8">
                                            <span>
                                              Комплектация:{" "}
                                              <strong>стандартная</strong>
                                            </span>
                                            <span>Подарочная упаковка:</span>
                                          </div>
                                          <div className="flex gap-8">
                                            <span>
                                              Гарантия: <strong>1 год</strong>
                                            </span>
                                            <span>
                                              Тип покрышки:{" "}
                                              <strong>шоссейная</strong>
                                            </span>
                                          </div>
                                          <div>
                                            <span>
                                              Доп. услуги:{" "}
                                              <strong>гидроизоляция</strong>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-span-3">
                                    <div className="flex justify-center">
                                      <div className="flex bg-[#F4F7FB] items-center rounded-lg">
                                        <div>
                                          <button
                                            className="p-4 hover:bg-gray-200 rounded-l-lg"
                                            onClick={() =>
                                              updateQuantity(
                                                item.id,
                                                item.quantity - 1
                                              )
                                            }
                                          >
                                            -
                                          </button>
                                        </div>
                                        <div>
                                          <p className="px-4">
                                            {item.quantity}
                                          </p>
                                        </div>
                                        <div>
                                          <button
                                            className="p-4 hover:bg-gray-200 rounded-r-lg"
                                            onClick={() =>
                                              updateQuantity(
                                                item.id,
                                                item.quantity + 1
                                              )
                                            }
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-span-2">
                                    <div className="text-center">
                                      <p className="font-semibold text-lg">
                                        {formatPrice
                                          ? formatPrice(
                                              item.price * item.quantity
                                            )
                                          : `${item.price * item.quantity} ₽`}
                                      </p>
                                    </div>
                                  </div>
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
                        </>
                      ) : (
                        /* Контент после нажатия "Оформить заказ" */
                        <div className="">
                          <div className="flex items-center mb-6">
                            <button
                              onClick={handleBackClick}
                              className="flex items-center text-gray-600 hover:text-gray-800 mr-6"
                            >
                              <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                              </svg>
                              Вернуться назад
                            </button>
                            <h2 className="text-xl font-semibold">
                              Форма оформления заказа
                            </h2>
                          </div>

                          <div className="space-y-8">
                            <div className="grid">
                              <div>
                                <div className="flex gap-4 text-[20px] font-semibold mb-10">
                                  <p className="text-[#6F73EE]">Шаг 1.</p>
                                  <p>Выберите способ доставки</p>
                                </div>
                                <div className="flex flex-wrap gap-6">
                                  {/* Самовывоз из магазина */}
                                  <button
                                    onClick={() =>
                                      handleDeliverySelect("pickup")
                                    }
                                    className={`p-6 rounded-xl ${
                                      activeDelivery === "pickup"
                                        ? "bg-white border border-[#6F73EE]"
                                        : "bg-[#F4F7FB]"
                                    }`}
                                  >
                                    <div className="grid gap-5">
                                      <p className="font-semibold">
                                        Самовывоз из магазина
                                      </p>
                                      <Select.Root defaultValue="в Москве">
                                        <Select.Trigger className="w-full" />
                                        <Select.Content>
                                          <Select.Item value="в Москве">
                                            В Москве
                                          </Select.Item>
                                          <Select.Item value="Санкт-Петербург и Ленобласть">
                                            Санкт-Петербург и Ленобласть
                                          </Select.Item>
                                          <Select.Item value="Краснодар">
                                            Краснодар
                                          </Select.Item>
                                          <Select.Item value="Минск">
                                            Минск
                                          </Select.Item>
                                        </Select.Content>
                                      </Select.Root>
                                      <div className="flex gap-4">
                                        <div>
                                          <img src="/point.svg" alt="" />
                                        </div>
                                        <div className="grid">
                                          <p>ул. Ткацкая, 5 стр. 16.</p>
                                          <p>Пн - Вс 10:00 - 20:00.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </button>

                                  {/* ДОСТАВКА КУРЬЕРОМ */}
                                  <button
                                    onClick={() =>
                                      handleDeliverySelect("courier")
                                    }
                                    className={`p-6 rounded-xl ${
                                      activeDelivery === "courier"
                                        ? "bg-white border border-[#6F73EE]"
                                        : "bg-[#F4F7FB]"
                                    }`}
                                  >
                                    <div className="grid gap-5">
                                      <p className="font-semibold">
                                        Доставка курьером
                                      </p>
                                      <div className="grid">
                                        <div className="flex items-center gap-4">
                                          <img src="/el.svg" alt="" />
                                          <p>Москва</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                          <img src="/el.svg" alt="" />
                                          <p>Санкт-Петербург</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                          <img src="/el.svg" alt="" />
                                          <p>Краснодар</p>
                                        </div>
                                      </div>
                                      <p className="text-left bg-[#75D14A] w-fit text-white px-3 py-1 rounded-xl">
                                        Бесплатно
                                      </p>
                                    </div>
                                  </button>

                                  {/* Срочная доставка курьером */}
                                  <button
                                    onClick={() =>
                                      handleDeliverySelect("express")
                                    }
                                    className={`p-6 rounded-xl text-left ${
                                      activeDelivery === "express"
                                        ? "bg-white border border-[#6F73EE]"
                                        : "bg-[#F4F7FB]"
                                    }`}
                                  >
                                    <div className="grid gap-5">
                                      <p className="font-semibold">
                                        Срочная доставка курьером
                                      </p>
                                      <div className="grid">
                                        <p>Только по Москве</p>
                                      </div>
                                      <p className="max-w-60 text-left">
                                        Стоимость уточняйте у менеджера + 7
                                        (800) 505 54 61
                                      </p>
                                    </div>
                                  </button>

                                  {/* Служба доставки CDEK */}
                                  <button
                                    onClick={() => handleDeliverySelect("cdek")}
                                    className={`p-6 rounded-xl text-left ${
                                      activeDelivery === "cdek"
                                        ? "bg-white border border-[#6F73EE]"
                                        : "bg-[#F4F7FB]"
                                    }`}
                                  >
                                    <div className="grid gap-5">
                                      <p className="font-semibold">
                                        Служба доставки CDEK
                                      </p>
                                      <div className="grid">
                                        <p>Регионы России</p>
                                      </div>
                                      <p className="max-w-60 text-left">
                                        Стоимость уточняйте у менеджера + 7
                                        (800) 505 54 61
                                      </p>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                            {activeDelivery && (
                              <div className="grid gap-6">
                                <div className="flex gap-4 text-[20px] font-semibold">
                                  <p className="text-[#6F73EE]">Шаг 2.</p>
                                  <p>
                                    {activeDelivery === "pickup" &&
                                      "Укажите данные получателя"}
                                    {activeDelivery === "courier" &&
                                      "Укажите адрес доставки"}
                                    {activeDelivery === "express" &&
                                      "Данные для срочной доставки"}
                                    {activeDelivery === "cdek" &&
                                      "Данные для доставки CDEK"}
                                  </p>
                                </div>
                                {/* Здесь будет форма для ввода данных */}
                                <div>
                                  {activeDelivery === "pickup" && (
                                    <div className="grid">
                                      {/* ШАГ 2 */}
                                      <div>
                                        <div className="grid grid-cols-2 gap-5">
                                          <div className="grid ">
                                            <p>Ваша Фамилия</p>
                                            <input
                                              className="inpt"
                                              placeholder="Введите фамилию"
                                              type="name"
                                            />
                                          </div>
                                          <div className="grid">
                                            <p>Ваше Имя</p>
                                            <input
                                              className="inpt"
                                              placeholder="Введите имя"
                                              type="name"
                                            />
                                          </div>
                                          <div>
                                            <p>Ваш телефон</p>
                                            <PhoneForCart
                                              onPhoneChange={handlePhoneChange}
                                              value={phone}
                                            />
                                          </div>
                                          <div>
                                            <p>Ваш email</p>
                                            <input
                                              type="email"
                                              placeholder="Введите email"
                                              className="inpt w-full"
                                            />
                                          </div>
                                        </div>
                                        <div className="mt-10">
                                          <div className="grid items-start">
                                            <p>Комментрий</p>
                                            <TextArea
                                              placeholder="Оставьте пожелание или комментарий к заказу "
                                              size="2"
                                              className="text-[20px]!"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      {/* ШАГ 3 */}
                                      <div className="mt-10 grid items-center">
                                        <div className="flex gap-4 font-semibold text-[20px]">
                                          <p className="text-[#6F73EE]">
                                            Шаг 3.
                                          </p>
                                          <p>Выберите способ оплаты</p>
                                        </div>
                                        <div className="">
                                          <RadioCards.Root defaultValue="1">
                                            <div className="grid grid-cols-3 gap-5 mt-10 text-[20px]">
                                              <RadioCards.Item value="1">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Картой
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <img
                                                      src="/PM4.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/PM3.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/PM2.svg"
                                                      alt=""
                                                    />
                                                    <img src="/PM.svg" alt="" />
                                                    <img
                                                      src="/PM5.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/webmoney.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/qiwi.svg"
                                                      alt=""
                                                    />
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="2">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Наличными
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      Курьеру, в магазине или
                                                      при доставке CDEK
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="3">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Через интернет-банкинг по
                                                    счету
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      Менеджер свяжется с вами,
                                                      чтобы выставить счет
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="4">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Онлайн на сайте
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      После оформления заказа вы
                                                      будете перенаправлены на
                                                      страницу оплаты
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="5">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    В рассрочку
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      После оформления заказа c
                                                      вами свяжется менеджер.
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="6">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    В кредит от «Сбербанка»
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      С условиями можно
                                                      ознакомиться на сайте
                                                      банка
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                            </div>
                                          </RadioCards.Root>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  {/* КУРЬЕР */}
                                  {activeDelivery === "courier" && (
                                    <div className="grid">
                                      {/* ШАГ 2 */}
                                      <div>
                                        <div className="grid grid-cols-2 gap-5">
                                          <div className="grid ">
                                            <p>Город/населенный пункт*</p>
                                            <input
                                              className="inpt"
                                              placeholder="Например, Воронеж"
                                              type="name"
                                            />
                                          </div>
                                          <div className="grid">
                                            <p>Название улицы*</p>
                                            <input
                                              className="inpt"
                                              placeholder="Например, Сурганова"
                                              type="name"
                                            />
                                          </div>
                                          <div className="flex justify-between">
                                            <div className="grid">
                                              <p>Номер дома</p>
                                              <input
                                                className="inpt max-w-50"
                                                placeholder="Введите число"
                                                type="name"
                                              />
                                            </div>
                                            <div className="grid text-[16px]">
                                              <p>Корпус</p>
                                              <input
                                                className="inpt max-w-50"
                                                placeholder="Введите число"
                                                type="name"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex justify-between">
                                            <div className="grid">
                                              <p>Квартира</p>
                                              <input
                                                className="inpt max-w-50"
                                                placeholder="Введите число"
                                                type="name"
                                              />
                                            </div>
                                            <div className="grid text-[16px]">
                                              <p>Индекс</p>
                                              <input
                                                className="inpt max-w-50"
                                                placeholder="Введите число"
                                                type="name"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        {/* ШАГ 3 */}
                                        <div className="my-10 text-[20px] font-semibold flex gap-4">
                                          <p className="text-[#6F73EE] ">
                                            Шаг 3.
                                          </p>
                                          <p>Выберите способ оплаты</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-5">
                                          <div className="grid ">
                                            <p>Ваша Фамилия</p>
                                            <input
                                              className="inpt"
                                              placeholder="Введите фамилию"
                                              type="name"
                                            />
                                          </div>
                                          <div className="grid">
                                            <p>Ваше Имя</p>
                                            <input
                                              className="inpt"
                                              placeholder="Введите имя"
                                              type="name"
                                            />
                                          </div>
                                          <div>
                                            <p>Ваш телефон</p>
                                            <PhoneForCart
                                              onPhoneChange={handlePhoneChange}
                                              value={phone}
                                            />
                                          </div>
                                          <div>
                                            <p>Ваш email</p>
                                            <input
                                              type="email"
                                              placeholder="Введите email"
                                              className="inpt w-full"
                                            />
                                          </div>
                                        </div>
                                        <div className="mt-10">
                                          <div className="grid items-start">
                                            <p>Комментрий</p>
                                            <TextArea
                                              placeholder="Оставьте пожелание или комментарий к заказу "
                                              size="2"
                                              className="text-[20px]!"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      {/* ШАГ 4 */}
                                      <div className="mt-10 grid items-center">
                                        <div className="flex gap-4 font-semibold text-[20px]">
                                          <p className="text-[#6F73EE]">
                                            Шаг 4.
                                          </p>
                                          <p>Выберите способ оплаты</p>
                                        </div>
                                        <div className="">
                                          <RadioCards.Root defaultValue="1">
                                            <div className="grid grid-cols-3 gap-5 mt-10 text-[20px]">
                                              <RadioCards.Item value="1">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Картой
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <img
                                                      src="/PM4.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/PM3.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/PM2.svg"
                                                      alt=""
                                                    />
                                                    <img src="/PM.svg" alt="" />
                                                    <img
                                                      src="/PM5.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/webmoney.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/qiwi.svg"
                                                      alt=""
                                                    />
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="2">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Наличными
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      Курьеру, в магазине или
                                                      при доставке CDEK
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="3">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Через интернет-банкинг по
                                                    счету
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      Менеджер свяжется с вами,
                                                      чтобы выставить счет
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="4">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Онлайн на сайте
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      После оформления заказа вы
                                                      будете перенаправлены на
                                                      страницу оплаты
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="5">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    В рассрочку
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      После оформления заказа c
                                                      вами свяжется менеджер.
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="6">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    В кредит от «Сбербанка»
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      С условиями можно
                                                      ознакомиться на сайте
                                                      банка
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                            </div>
                                          </RadioCards.Root>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  {/* СРОЧНАЯ ДОСТ КУРЬЕРОМ */}
                                  {activeDelivery === "express" && (
                                    <div className="grid">
                                      {/* ШАГ 2 */}
                                      <div>
                                        <div className="grid grid-cols-2 gap-5">
                                          <div className="grid ">
                                            <p>Город/населенный пункт*</p>
                                            <input
                                              className="inpt"
                                              placeholder="Например, Воронеж"
                                              type="name"
                                            />
                                          </div>
                                          <div className="grid">
                                            <p>Название улицы*</p>
                                            <input
                                              className="inpt"
                                              placeholder="Например, Сурганова"
                                              type="name"
                                            />
                                          </div>
                                          <div className="flex justify-between">
                                            <div className="grid">
                                              <p>Номер дома</p>
                                              <input
                                                className="inpt max-w-50"
                                                placeholder="Введите число"
                                                type="name"
                                              />
                                            </div>
                                            <div className="grid text-[16px]">
                                              <p>Корпус</p>
                                              <input
                                                className="inpt max-w-50"
                                                placeholder="Введите число"
                                                type="name"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex justify-between">
                                            <div className="grid">
                                              <p>Квартира</p>
                                              <input
                                                className="inpt max-w-50"
                                                placeholder="Введите число"
                                                type="name"
                                              />
                                            </div>
                                            <div className="grid text-[16px]">
                                              <p>Индекс</p>
                                              <input
                                                className="inpt max-w-50"
                                                placeholder="Введите число"
                                                type="name"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        {/* ШАГ 3 */}
                                        <div className="my-10 text-[20px] font-semibold flex gap-4">
                                          <p className="text-[#6F73EE] ">
                                            Шаг 3.
                                          </p>
                                          <p>Укажите данные получателя</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-5">
                                          <div className="grid ">
                                            <p>Ваша Фамилия</p>
                                            <input
                                              className="inpt"
                                              placeholder="Введите фамилию"
                                              type="name"
                                            />
                                          </div>
                                          <div className="grid">
                                            <p>Ваше Имя</p>
                                            <input
                                              className="inpt"
                                              placeholder="Введите имя"
                                              type="name"
                                            />
                                          </div>
                                          <div>
                                            <p>Ваш телефон</p>
                                            <PhoneForCart
                                              onPhoneChange={handlePhoneChange}
                                              value={phone}
                                            />
                                          </div>
                                          <div>
                                            <p>Ваш email</p>
                                            <input
                                              type="email"
                                              placeholder="Введите email"
                                              className="inpt w-full"
                                            />
                                          </div>
                                        </div>
                                        <div className="mt-10">
                                          <div className="grid items-start">
                                            <p>Комментрий</p>
                                            <TextArea
                                              placeholder="Оставьте пожелание или комментарий к заказу "
                                              size="2"
                                              className="text-[20px]!"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      {/* ШАГ 4 */}
                                      <div className="mt-10 grid items-center">
                                        <div className="flex gap-4 font-semibold text-[20px]">
                                          <p className="text-[#6F73EE]">
                                            Шаг 4.
                                          </p>
                                          <p>Выберите способ оплаты</p>
                                        </div>
                                        <div className="">
                                          <RadioCards.Root defaultValue="1">
                                            <div className="grid grid-cols-3 gap-5 mt-10 text-[20px]">
                                              <RadioCards.Item value="1">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Картой
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <img
                                                      src="/PM4.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/PM3.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/PM2.svg"
                                                      alt=""
                                                    />
                                                    <img src="/PM.svg" alt="" />
                                                    <img
                                                      src="/PM5.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/webmoney.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/qiwi.svg"
                                                      alt=""
                                                    />
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="2">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Наличными
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      Курьеру, в магазине или
                                                      при доставке CDEK
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="3">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Через интернет-банкинг по
                                                    счету
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      Менеджер свяжется с вами,
                                                      чтобы выставить счет
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="4">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Онлайн на сайте
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      После оформления заказа вы
                                                      будете перенаправлены на
                                                      страницу оплаты
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="5">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    В рассрочку
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      После оформления заказа c
                                                      вами свяжется менеджер.
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="6">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    В кредит от «Сбербанка»
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      С условиями можно
                                                      ознакомиться на сайте
                                                      банка
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                            </div>
                                          </RadioCards.Root>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  {/* CDEK */}
                                  {activeDelivery === "cdek" && (
                                    <div className="grid">
                                      {/* ШАГ 2 */}
                                      <div>
                                        <div className="grid grid-cols-2 gap-5">
                                          <div className="grid ">
                                            <p>Город/населенный пункт*</p>
                                            <input
                                              className="inpt"
                                              placeholder="Например, Воронеж"
                                              type="name"
                                            />
                                          </div>
                                          <div className="grid">
                                            <p>Название улицы*</p>
                                            <input
                                              className="inpt"
                                              placeholder="Например, Сурганова"
                                              type="name"
                                            />
                                          </div>
                                          <div className="flex justify-between">
                                            <div className="grid">
                                              <p>Номер дома</p>
                                              <input
                                                className="inpt max-w-50"
                                                placeholder="Введите число"
                                                type="name"
                                              />
                                            </div>
                                            <div className="grid text-[16px]">
                                              <p>Корпус</p>
                                              <input
                                                className="inpt max-w-50"
                                                placeholder="Введите число"
                                                type="name"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex justify-between">
                                            <div className="grid">
                                              <p>Квартира</p>
                                              <input
                                                className="inpt max-w-50"
                                                placeholder="Введите число"
                                                type="name"
                                              />
                                            </div>
                                            <div className="grid text-[16px]">
                                              <p>Индекс</p>
                                              <input
                                                className="inpt max-w-50"
                                                placeholder="Введите число"
                                                type="name"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        {/* ШАГ 3 */}
                                        <div className="my-10 text-[20px] font-semibold flex gap-4">
                                          <p className="text-[#6F73EE] ">
                                            Шаг 3.
                                          </p>
                                          <p>Укажите данные получателя</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-5">
                                          <div className="grid ">
                                            <p>Ваша Фамилия</p>
                                            <input
                                              className="inpt"
                                              placeholder="Введите фамилию"
                                              type="name"
                                            />
                                          </div>
                                          <div className="grid">
                                            <p>Ваше Имя</p>
                                            <input
                                              className="inpt"
                                              placeholder="Введите имя"
                                              type="name"
                                            />
                                          </div>
                                          <div>
                                            <p>Ваш телефон</p>
                                            <PhoneForCart
                                              onPhoneChange={handlePhoneChange}
                                              value={phone}
                                            />
                                          </div>
                                          <div>
                                            <p>Ваш email</p>
                                            <input
                                              type="email"
                                              placeholder="Введите email"
                                              className="inpt w-full"
                                            />
                                          </div>
                                        </div>
                                        <div className="mt-10">
                                          <div className="grid items-start">
                                            <p>Комментрий</p>
                                            <TextArea
                                              placeholder="Оставьте пожелание или комментарий к заказу "
                                              size="2"
                                              className="text-[20px]!"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      {/* ШАГ 4 */}
                                      <div className="mt-10 grid items-center">
                                        <div className="flex gap-4 font-semibold text-[20px]">
                                          <p className="text-[#6F73EE]">
                                            Шаг 4.
                                          </p>
                                          <p>Выберите способ оплаты</p>
                                        </div>
                                        <div className="">
                                          <RadioCards.Root defaultValue="1">
                                            <div className="grid grid-cols-3 gap-5 mt-10 text-[20px]">
                                              <RadioCards.Item value="1">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Картой
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <img
                                                      src="/PM4.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/PM3.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/PM2.svg"
                                                      alt=""
                                                    />
                                                    <img src="/PM.svg" alt="" />
                                                    <img
                                                      src="/PM5.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/webmoney.svg"
                                                      alt=""
                                                    />
                                                    <img
                                                      src="/qiwi.svg"
                                                      alt=""
                                                    />
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="2">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Наличными
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      Курьеру, в магазине или
                                                      при доставке CDEK
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="3">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Через интернет-банкинг по
                                                    счету
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      Менеджер свяжется с вами,
                                                      чтобы выставить счет
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="4">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    Онлайн на сайте
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      После оформления заказа вы
                                                      будете перенаправлены на
                                                      страницу оплаты
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="5">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    В рассрочку
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      После оформления заказа c
                                                      вами свяжется менеджер.
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                              <RadioCards.Item value="6">
                                                <div className="grid gap-3 p-3">
                                                  <p className="font-semibold">
                                                    В кредит от «Сбербанка»
                                                  </p>
                                                  <div className="flex flex-wrap max-w-50 gap-3">
                                                    <p className="text-[16px]">
                                                      С условиями можно
                                                      ознакомиться на сайте
                                                      банка
                                                    </p>
                                                  </div>
                                                </div>
                                              </RadioCards.Item>
                                            </div>
                                          </RadioCards.Root>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
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
                            <p className="font-semibold text-green-600">
                              {akcia} ₽
                            </p>
                          </div>
                          <div className="flex justify-between pt-4 border-t border-[#5D6C7B]">
                            <p className="font-medium">
                              Итого без учета доставки
                            </p>
                            <p className="font-semibold">
                              {getTotalPrice() - akcia} ₽
                            </p>
                          </div>
                        </div>
                        <div className="grid">
                          {isOrderForm ? (
                            <Link
                              to="/complete"
                              className="text-white bg-[#6F73EE] py-4 rounded-xl hover:bg-[#5a5fd3] text-center font-medium"
                            >
                              Подтвердить заказ
                            </Link>
                          ) : (
                            <button
                              onClick={handleOrderClick}
                              disabled={!isCheckboxChecked}
                              className={`py-4 rounded-xl font-medium transition-colors ${
                                isCheckboxChecked
                                  ? "text-white bg-[#6F73EE] hover:bg-[#5a5fd3] cursor-pointer"
                                  : "text-gray-400 bg-gray-300 cursor-not-allowed"
                              }`}
                            >
                              Оформить заказ
                            </button>
                          )}

                          <div className="flex gap-4 mt-5">
                            <Checkbox
                              variant="soft"
                              checked={isCheckboxChecked}
                              onCheckedChange={(checked) =>
                                setIsCheckboxChecked(checked === true)
                              }
                            />
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
