import { Breadcrumbs } from "../Breadcrumbs";
import { ScrollToTop } from "../ScrollToTop";

export default function AboutPage(){
  return(
    <>
      <ScrollToTop/>
      <section className="justify-center flex container">
        <div className="grid">
          <div className="mt-10 sm:px-20">
            <Breadcrumbs
              items={[
                {label: 'Главная', path: '/main'},
                {label: 'О магазине'}
              ]}
            />
          </div>
          <div className="justify-center grid">
            <div className="sm:w-[1440px] bg-[url('/bgabout.svg')] py-10 rounded-2xl justify-between gap-30 flex-wrap flex sm:px-20 px-2 bg-center bg-cover bg-no-repeat text-white">
                <div className='grid gap-20 pb-20'>
                    <h1 className="uppercase sm:text-[35px] text-2xl sm:w-130 font-semibold text-center sm:text-start flex-wrap flex">Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</h1>
                    <div className="grid grid-cols-3">
                      <div className="grid">
                        <p className='w-18'>Работаем с</p>
                        <h1 className='text-[25px] font-semibold uppercase'>2017 Г</h1>
                      </div>
                      <div className="grid">
                        <p className='w-30'>Специалистов в штате</p>
                        <p className='text-[25px] font-semibold uppercase'>35</p>
                      </div>
                      <div className="grid">
                        <p className='w-40'>Клиентов по России и странам СНГ</p>
                        <h1 className='text-[25px] font-semibold uppercase'>2000</h1>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          {/* С 2017 г. развиваем тему электротранспорта и освещаем его ценность в современном мире */}
          <div className="justify-center flex mt-20">
            <div className="flex justify-between w-7xl">
                <div className="max-w-160 grid gap-10">
                  <h1 className="uppercase font-semibold text-[35px]">С 2017 г. развиваем тему электротранспорта и освещаем его ценность в современном мире</h1>
                  <div className="grid gap-5">
                    <h3 className="font-semibold">Наша цель</h3>
                    <p>Предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Cтремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                  </div>
                  <div className="grid gap-5">
                    <h3 className="font-semibold">Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</h3>
                    <div className="">
                      <div className="flex gap-3">
                        <img src="/CheckCircle.svg" alt="" />
                        <p>Цены от завода-изготовителя Jilong ;</p>
                      </div>
                      <div className="flex gap-3">
                        <img src="/CheckCircle.svg" alt="" />
                        <p>Бесплатный тест-драйв самокатов;</p>
                      </div>
                      <div className="flex gap-3">
                        <img src="/CheckCircle.svg" alt="" />
                        <p>Фирменную гарантию 1 год;</p>
                      </div>
                      <div className="flex gap-3">
                        <img src="/CheckCircle.svg" alt="" />
                        <p>Ремонт и обслуживание от 1 дня в собственном сервисном центре</p>
                      </div>
                      <div className="flex gap-3">
                        <img src="/CheckCircle.svg" alt="" />
                        <p>Более 1 000 запчастей и аксессуаров в наличии.</p>
                      </div>
                    </div>

                  </div>
                </div>
                <div>
                  <img src="/sertificat.svg" alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}