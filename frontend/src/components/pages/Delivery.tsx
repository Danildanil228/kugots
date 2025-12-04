import { Checkbox, RadioCards } from "@radix-ui/themes";
import { Breadcrumbs } from "../Breadcrumbs";
import { ScrollToTop } from "../ScrollToTop";
import { PhoneNumber } from "../forms/PhoneNumber";
import { useState } from "react";
import { useApiData } from "../useApiData";
import { useFormSubmit } from "../forms/useFormSubmit";

export default function Delivery() {
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { data: submesData } = useApiData("/submes");
  const {
    submit: submitCallOrder,
    isLoading: isCallLoading,
    error: callError,
  } = useFormSubmit({
    endpoint: "/api/call-order",
    onSuccess: () => {
      setIsSubmitted(true);
      setPhone("");
      setIsPhoneValid(false);
      setIsChecked(true);
    },
  });

  const handlePhoneChange = (value: string, isValid: boolean) => {
    setPhone(value);
    setIsPhoneValid(isValid);
  };

  const handleCallOrder = async () => {
    if (!isPhoneValid || !isChecked) return;
    await submitCallOrder({
      phone: phone,
      type: "callback-consult",
    });
  };
  return (
    <>
      <ScrollToTop />
      <section className="container justify-center flex min-h-screen">
        <div className="">
          <div className="mt-10 sm:px-20">
            <Breadcrumbs
              items={[
                { label: "Главная", path: "/main" },
                { label: "Доставка" },
              ]}
            />
          </div>
          <div className="flex sm:w-[1440px] bg-[url('/bgdel.svg')] bg-no-repeat bg-center bg-cover py-12 rounded-xl">
            <p className="px-20 w-190 font-semibold uppercase text-white text-[35px]">
              Оплата и доставка любыми удобными способами
            </p>
          </div>
          <div className="px-20 mt-20">
            <div className="grid gap-10">
              <h1 className="text-[35px] uppercase font-semibold">
                Отправляем по России в день заказа
              </h1>
              <div className="grid gap-2">
                <p>Выберите свой регион</p>
                <RadioCards.Root defaultValue="1">
                  <RadioCards.Item value="1">
                    <p>Москва и МО</p>
                  </RadioCards.Item>
                  <RadioCards.Item value="2">
                    <p>Санкт-Петербург и Ленобласть</p>
                  </RadioCards.Item>
                  <RadioCards.Item value="3">
                    <p>Краснодар</p>
                  </RadioCards.Item>
                  <RadioCards.Item value="4">
                    <p>Регионы России</p>
                  </RadioCards.Item>
                  <RadioCards.Item value="5">
                    <p>Казахстан, РБ, Армения, Киргизия</p>
                  </RadioCards.Item>
                </RadioCards.Root>
              </div>
              <div className="grid grid-cols-3 border-b pb-10 border-[#EAEBED]">
                <div className="grid gap-10">
                  <p className="font-semibold">Способ доставки</p>
                  <p>Курьером</p>
                </div>
                <div className="grid gap-10">
                  <p className="font-semibold">Время доставки</p>
                  <p>В течение дня при заказе до 11:00</p>
                </div>
                <div className="grid gap-10">
                  <p className="font-semibold">Стоимость</p>
                  <p>Бесплатная доставка</p>
                </div>
              </div>
              <div className="grid grid-cols-3 border-b pb-10 border-[#EAEBED]">
                <div>
                  <p>Срочная доставка</p>
                </div>
                <div className="grid gap-2">
                  <p>
                    За 2-4 часа в день заказа. Заказы на срочную доставку
                    принимаются до 17:00, в пятницу — до 13:00.
                  </p>
                  <p>
                    При заказе дополнительных услуг (гидроизоляция, настройка)
                    время может быть увеличено.
                  </p>
                </div>
                <div>
                  <p>
                    Стоимость срочной доставки
                    <br />
                    <span className="text-[#6F73EE]">
                      <a href="">уточняйте у менеджера</a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid gap-2 pb-10 border-[#EAEBED] border-b">
                <p>
                  Самовывоз из магазина ул. Ткацкая, 5 стр. 16. (Пн - Вс 10:00 -
                  20:00)
                </p>
                <p>
                  Перед посещением магазина уточняйте наличие рассматриваемой
                  вами модели по телефону +7 (499) 406-15-79
                </p>
              </div>
              <div className="grid gap-10">
                <h3 className="font-semibold">
                  Выбирайте подходящий способ оплаты
                </h3>
                <div className="grid grid-cols-3">
                  <p>Наличными в магазине или курьеру</p>
                  <div className="grid gap-2.5">
                    <p>Картой в магазине</p>
                    <div className="flex gap-2">
                      <img src="/PM4.svg" alt="" />
                      <img src="/PM3.svg" alt="" />
                      <img src="/PM2.svg" alt="" />
                      <img src="/PM.svg" alt="" />
                      <img src="/PM5.svg" alt="" />
                      <img src="/webmoney.svg" alt="" />
                      <img src="/qiwi.svg" alt="" />
                    </div>
                  </div>
                  <p>Онлайн на сайте через корзину</p>
                </div>
                <div className="grid grid-cols-3">
                  <p className="max-w-75">
                    Через интернет-банкинг по счету, который вам выставит
                    менеджер
                  </p>
                  <p className="max-w-60">
                    В рассрочку от Сбербанка, Тинькофф банка или по карте
                    "Халва" от Совкомбанка
                  </p>
                  <p>
                    В рассрочку — только для электрсоамокатов версии MAX{" "}
                    <span className="text-[#6F73EE]">
                      <a href="">Узнать подробнее</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[url('/bgdel2.svg')] bg-cover bg-center bg-no-repeat mt-20">
            <div className="grid px-20 text-white gap-10 py-20">
              <h1 className="uppercase font-semibold text-[35px] max-w-150">
                Отслеживайте свои заказы в фирменном приложении Kugoo-Russia
              </h1>
              <div className="grid gap-3">
                <div className="flex gap-3">
                  <img className="w-5" src="/CheckCirclew.svg" alt="" />
                  <p>Узнавайте первыми об акциях и спецпредложениях﻿</p>
                </div>
                <div className="flex gap-3">
                  <img className="w-5" src="/CheckCirclew.svg" alt="" />
                  <p>
                    Получите доступ к секретным распродажам и полезной
                    информации
                  </p>
                </div>
                <div className="flex gap-3">
                  <img className="w-5" src="/CheckCirclew.svg" alt="" />
                  <p>Держите наши контакты всегда под рукой</p>
                </div>
              </div>
              <div className="flex gap-5">
                <img src="/gog.svg" alt="" />
                <img src="/ap.svg" alt="" />
              </div>
            </div>
          </div>
          {/* Остались вопросы */}
          <div className="flex bg-[url('./bgtest2.svg')] bg-center bg-cover bg-no-repeat my-20">
            <div className="py-[130px] sm:px-20 grid text-center sm:text-start">
              <h1 className="uppercase font-semibold text-2xl sm:text-[35px] sm:w-155">
                Остались вопросы?
              </h1>
              <p className="max-w-140 mt-10 mb-5">
                Наши консультанты рассчитают сроки и стоимость доставки, ответят
                на вопросы, касающиеся выбора и приобретения продуктов Kugoo.
              </p>
              <div className="sm:flex gap-5 grid">
                <PhoneNumber onPhoneChange={handlePhoneChange} value={phone} />
                <button
                  className={`px-5 py-4 rounded-[5px] text-white bg-[#6F73EE] transition-colors ${
                    isSubmitted
                      ? "bg-green-500 cursor-default"
                      : !isPhoneValid || !isChecked || isCallLoading
                      ? "bg-[#6F73EE] opacity-50 cursor-not-allowed"
                      : "bg-[#6F73EE]"
                  }`}
                  onClick={isSubmitted ? undefined : handleCallOrder}
                  disabled={
                    isSubmitted || !isPhoneValid || !isChecked || isCallLoading
                  }
                >
                  {isSubmitted
                    ? "Отправлено!"
                    : isCallLoading
                    ? "Отправка..."
                    : "Проконсультироваться"}
                </button>
              </div>
              <div className="flex gap-3 items-center mt-5 text-start">
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={(checked) => setIsChecked(checked === true)}
                />
                <p className="sm:text-start text-[14px] sm:w-100">
                  Нажимая на кнопку, вы соглашаетесь на обработку персональных
                  данных и{" "}
                  <a href="" className="underline!">
                    политикой конфиденциальности
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
