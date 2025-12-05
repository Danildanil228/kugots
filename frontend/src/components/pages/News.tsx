import { Link } from "react-router-dom";
import { Breadcrumbs } from "../Breadcrumbs";
import { BlogSwiper } from "../forms/BlogSwiper";
import { ScrollToTop } from "../ScrollToTop";
import { useApiData } from "../useApiData";

export default function News() {
  const { data: submesData } = useApiData("/submes");
  return (
    <section className="flex container justify-center">
      <ScrollToTop />
      <div>
        <div className="mt-10 sm:px-20">
          <Breadcrumbs
            items={[
              { label: "Главная", path: "/main" },
              { label: "Блог", path: "/blog" },
              { label: "Как правильно заряжать самокат?" },
            ]}
          />
        </div>
        <div className="flex sm:w-[1440px] bg-[url('/bgsa.svg')] bg-no-repeat bg-center bg-cover py-60 rounded-xl"></div>
        <div className="grid gap-10 justify-center my-20">
          <p className="max-w-150">
            История. Как мы за 1000 евро обустроили арендную квартиру мебелью,
            купленной за 2000 евро, на эти деньги купили пылесос, а на
            оставшиеся две тысячи купили продуктов на месяц. И у нас еще
            остались деньги на дорогу домой в Москву. У вас же не было выбора,
            вы приехали и работали за еду, иначе бы не выжили бы. Не нужно было
            бы покупать мебель, если бы вы поехали домой! Вы правы, я приехал в
            Украину работать не имея даже регистрации и был вынужден жить с
            женщиной которая меня не видела ни разу в жизни. И то я купил машину
            за 100 000 руб.
          </p>
          <p className="max-w-150">
            История. Как мы за 1000 евро обустроили арендную квартиру мебелью,
            купленной за 2000 евро, на эти деньги купили пылесос, а на
            оставшиеся две тысячи купили продуктов на месяц.
          </p>
          <p className="font-semibold max-w-150 text-[20px]">
            Как мы за 1000 евро обустроили арендную квартиру
          </p>
          <p className="max-w-150">
            История. Как мы за 1000 евро обустроили арендную квартиру мебелью,
            купленной за 2000 евро, на эти деньги купили пылесос, а на
            оставшиеся две тысячи купили продуктов на месяц. И у нас еще
            остались деньги на дорогу домой в Москву.
          </p>
        </div>
        <div className="justify-center flex">
          <img src="/blof.svg" alt="" />
        </div>
        <div className="grid gap-10 justify-center my-20">
          <p className="max-w-150 font-semibold">
            Как мы за 1000 евро обустроили арендную квартиру
          </p>
          <p className="max-w-150">
            История. Как мы за 1000 евро обустроили арендную квартиру мебелью,
            купленной за 2000 евро, на эти деньги купили пылесос, а на
            оставшиеся две тысячи купили продуктов на месяц. И у нас еще
            остались деньги на дорогу домой в Москву.
          </p>
          <button className="py-4 bg-[#6F73EE] rounded-xl text-white w-fit px-6">
            <Link to='/catalog'>Перейти в католог</Link>
          </button>
          <p className=" max-w-150 text-[20px]">
            История. Как мы за 1000 евро обустроили арендную квартиру мебелью,
            купленной за 2000 евро, на эти деньги купили пылесос, а на
            оставшиеся две тысячи купили продуктов на месяц. И у нас еще
            остались деньги на дорогу домой в Москву. У вас же не было выбора,
            вы приехали и работали за еду, иначе бы не выжили бы. Не нужно было
            бы покупать мебель, если бы вы поехали домой! Вы правы, я приехал в
            Украину работать не имея даже регистрации и был вынужден жить с
            женщиной которая меня не видела ни разу в жизни. И то я купил машину
            за 100 000 руб.
          </p>
          <p className="max-w-150">
            История. Как мы за 1000 евро обустроили арендную квартиру мебелью,
            купленной за 2000 евро, на эти деньги купили пылесос, а на
            оставшиеся две тысячи купили продуктов на месяц.
          </p>
        </div>
        <div className="justify-center flex">
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
        <div className="justify-center my-8 lg:my-20">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 mb-6 lg:mb-8">
              <div className="text-center lg:text-left lg:flex-1">
                <h1 className="uppercase font-semibold text-xl lg:text-[35px] leading-tight">
                  Вам также может быть интересно
                </h1>
              </div>
            </div>
            <div>
              <BlogSwiper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
