import { Flex, RadioCards } from "@radix-ui/themes";
import { Breadcrumbs } from "../Breadcrumbs";
import { ScrollToTop } from "../ScrollToTop";
import { useApiData } from "../useApiData";

export default function Contacts() {
  const { data: submesData } = useApiData("/submes");
  return (
      <section className="flex justify-center container">
        <ScrollToTop/>
        <div>
          <div className="mt-10 sm:px-20">
            <Breadcrumbs items={[{label: 'Главная', path: '/main'},{label: 'Контакты'}]}/>
          </div>
          <div className="flex sm:w-[1440px] bg-[url('/kon.svg')] bg-no-repeat bg-center bg-cover py-20 rounded-xl">
            <p className="px-20 text-white text-[35px] uppercase font-semibold">Контакты и адреса</p>
          </div>
          <div className="justify-center flex mt-15">
            <RadioCards.Root defaultValue="1">
              <Flex className="gap-10">
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
                  <p>Минск</p>
                </RadioCards.Item>
                <RadioCards.Item value="5">
                  <p>Пункты выдачи CDEK</p>
                </RadioCards.Item>
              </Flex>
            </RadioCards.Root>
          </div>
          <div className="justify-center flex mt-20">
            <div className="justify-between w-7xl flex">
              <div className="grid gap-5">
                <h1 className="text-[20px] font-semibold">Адрес магазина и сервисного центра:</h1>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#F4F7FB] h-full items-center flex rounded-[5px] px-2.5"><img src="/point.svg" alt="" /></div>
                  <div className="grid gap-2">
                    <div className="flex gap-5">
                      <p>ул. Ткацкая, 5 стр. 16 (м. Семеновская)</p>
                      <a className="items-start text-[#6F73EE]">Как пройти</a>
                    </div>
                    <div>
                      <p className="text-[#5D6C7B]">Пн-Вс 10:00 - 20:00 (магазин)</p>
                      <p className="text-[#5D6C7B]">Пн-Вс 10:00 - 20:00 (сервисный центр)</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#F4F7FB] h-full items-center flex rounded-[5px] px-2.5"><img src="/pho.svg" alt="" /></div>
                  <div className="flex gap-5">
                    <div className="grid">
                      <p className="text-[#5D6C7B]">Магазин</p>
                      <p>+7 (499) 406-15-79</p>
                    </div>
                    <div className="grid">
                      <p className="text-[#5D6C7B]">Сервисный центр</p>
                      <p>+7 (499) 350-76-92</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#F4F7FB] h-full items-center flex rounded-[5px] px-2.5"><img src="/war.svg" alt="" /></div>
                  <div className="grid gap-7 max-w-130">
                    <p>Бесплатная парковка (для въезда предварительно запросите у менеджера пропуск)</p>
                    <p>Перед посещением магазина, пожалуйста, уточняйте наличие рассматриваемой вами модели по телефону у менеджера.</p>
                    <p>Возьмите с собой паспорт или другой документ, удостоверяющий личность – он может понадобиться для прохождения через пропускной пункт.</p>
                  </div>
                </div>
              </div>
              <div>
                <img src="/map2.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#F4F7FB] w-full mt-20 py-10 rounded-xl">
            <div className="grid grid-cols-4 px-20">
              <div className="grid gap-5 items-start">
                <h2 className="uppercase font-semibold text-[20px]">Отдел рекламаций и претензий</h2>
                <div className="flex gap-4">
                  <img className="w-[18px]" src="/arr.svg" alt="" />
                  <p>claim@kugoo-russia.ru</p>
                </div>
                <div className="flex gap-4">
                  <img className="w-[18px]" src="/pho.svg" alt="" />
                  <div className="grid">
                    <p>+7 (499) 350-76-92</p>
                    <p>Ср-Вс 10:00 - 19:00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img className="w-[18px]" src="/wp.svg" alt="" />
                  <div className="grid">
                    <p>+7 (911) 284-53-19</p>
                    <p>Ср-Вс 10:00 - 19:00</p>
                    <p>Скачать шаблон обращения</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-5 items-start">
                <h2 className="uppercase font-semibold text-[20px]">Оптовый отдел</h2>
                <div className="flex gap-4">
                  <img className="w-[18px]" src="/arr.svg" alt="" />
                  <p>opt@kugoo-russia.ru</p>
                </div>
                <div className="flex gap-4">
                  <img className="w-[18px]" src="/pho.svg" alt="" />
                  <div className="grid">
                    <p>+7 (499) 281-64-52</p>
                    <p>Ср-Вс 10:00 - 19:00</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-5 items-start">
                <h2 className="uppercase font-semibold text-[20px]">Отдел маркетинга и рекламы</h2>
                <div className="flex gap-4">
                  <img className="w-[18px]" src="/arr.svg" alt="" />
                  <p>marketing@kugoo-russia.ru</p>
                </div>
              </div>
              <div className="grid gap-5 items-start">
                <h2 className="uppercase font-semibold text-[20px]">Написать директору</h2>
                <div className="flex gap-4">
                  <p>Если у вас возникли предложения или пожелания, которые помогут улучшить работу нашей компании, вы можете написать через специальную форму напрямую руководителю компании.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center flex my-20">
          <div className="justify-between sm:w-7xl sm:flex grid">
            <div className="grid text-center sm:text-start">
              <h1 className="text-2xl sm:text-[35px] font-semibold uppercase sm:w-180">
                Подписывайтесь и первыми узнавайте о новых скидках, акциях и
                розыгрышах подарков
              </h1>
              <p>Станьте частью сообщества Kugoo-Russia</p>
            </div>
            <div className="bg-[#F4F7FB] p-8 sm:w-[300px] text-white rounded-2xl grid gap-3">
              <div className="justify-between flex  bg-[#4B729F] p-4 rounded-2xl">
                <div className="flex gap-5">
                  <img src="./vkser.svg" alt="" />
                  <p>{submesData[0]?.mes}</p>
                </div>
                <p>{submesData[0]?.sub}</p>
              </div>
              <div className="justify-between flex  bg-linear-to-r from-amber-500 via-red-500 to-purple-600 p-4 rounded-2xl">
                <div className="flex gap-5">
                  <img src="./instser.svg" alt="" />
                  <p>{submesData[1]?.mes}</p>
                </div>
                <p>{submesData[1]?.sub}</p>
              </div>
              <div className="justify-between flex  bg-[#E53935] p-4 rounded-2xl">
                <div className="flex gap-5">
                  <img src="./yser.svg" alt="" />
                  <p>{submesData[2]?.mes}</p>
                </div>
                <p>{submesData[2]?.sub}</p>
              </div>
              <div className="justify-between flex  bg-[#039BE5] p-4 rounded-2xl">
                <div className="flex gap-5">
                  <img src="./tgser.svg" alt="" />
                  <p>{submesData[3]?.mes}</p>
                </div>
                <p>{submesData[3]?.sub}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

  );
}