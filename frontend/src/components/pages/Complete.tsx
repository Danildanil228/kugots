import { Link } from "react-router-dom";
import { Breadcrumbs } from "../Breadcrumbs";
import { ScrollToTop } from "../ScrollToTop";

export default function Complete(){
    return(
        <section className="flex container justify-center mb-20!">
        <ScrollToTop />
        <div>
          <div className="mx-20 mt-10 justify-between w-7xl">
            <Breadcrumbs
              items={[
                { label: "Вернуться в каталог", path: "/main" }
              ]}
            />
          </div>
          <div className="justify-center flex bg-[url('/bgs.svg')] bg-cover bg-no-repeat bg-center rounded-xl">
              <div className="justify-between flex w-[1440px] px-20 py-14">
                <div className="grid max-w-[350px] text-white gap-4">
                    <h1 className="uppercase font-semibold text-[35px]">Спасибо, Ваш заказ принят</h1>
                    <p>Менеджер свяжется с Вами в течение 5 минут в рабочее время. Если Вы оставили заявку в нерабочее время — начнем следующий день со звонка Вам.</p>
                    <p>А пока ожидаете — ознакомьтесь с товарами, которые могут дополнить ваш заказ.</p>
                    <button className="text-[#75D14A] bg-white rounded-[5px] w-fit px-5 py-3"><Link to='/catalog'>Перейти в каталог</Link></button>
                </div>
                <div className="grid max-w-[300px]">
                    <p className="font-semibold text-white text-[20px]">Отслеживайте свой заказ в фирменном приложении Kugoo-Russia</p>
                    <div className="flex gap-4">
                        <img className="w-[150px]" src="/gog.svg" alt="" />
                        <img className="w-[150px]" src="/ap.svg" alt="" />
                    </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    )
}