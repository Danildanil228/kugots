import { RadioCards } from "@radix-ui/themes";
import { Breadcrumbs } from "../Breadcrumbs";
import { ScrollToTop } from "../ScrollToTop";
import { HitProduct } from "../forms/HitProduct";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <ScrollToTop />
      <section className="flex container justify-center">
        <div>
          <div className="mt-10 sm:px-20">
            <Breadcrumbs
              items={[{ label: "Главная", path: "/main" }, { label: "Блог" }]}
            />
          </div>
          <div className="flex sm:w-[1440px] bg-[url('/bgbl.svg')] bg-no-repeat bg-center bg-cover py-20 rounded-xl">
            <p className="px-20 w-160 font-semibold uppercase text-white text-[35px]">
              Блог Kugoo
            </p>
          </div>
          <div className="justify-center grid mt-20">
            <div className="justify-between w-7xl flex">
              <div>
                <RadioCards.Root defaultValue="1" className="flex!">
                  <RadioCards.Item value="1">
                    <p>Все</p>
                  </RadioCards.Item>
                  <RadioCards.Item value="2">
                    <p>Видео</p>
                  </RadioCards.Item>
                  <RadioCards.Item value="3">
                    <p>Советы</p>
                  </RadioCards.Item>
                  <RadioCards.Item value="4">
                    <p>Сравнения</p>
                  </RadioCards.Item>
                  <RadioCards.Item value="5">
                    <p>Топ</p>
                  </RadioCards.Item>
                </RadioCards.Root>
              </div>
              <div className="flex gap-3">
                <button className="p-2.5 border rounded-[7px] border-[#EAEBED]"><img className="w-7" src="/vksub.svg" alt="" /></button>
                <button className="p-2.5 border rounded-[7px] border-[#EAEBED]"><img className="w-7" src="/instsub.svg" alt="" /></button>
                <button className="p-2.5 border rounded-[7px] border-[#EAEBED]"><img className="w-7" src="/youtubesub.svg" alt="" /></button>
                <button className="p-2.5 border rounded-[7px] border-[#EAEBED]"><img className="w-7" src="/tg.svg" alt="" /></button>
               
              </div>
            </div>
            {/* карточки */}
            <div className="grid grid-cols-3 gap-10 mt-20">
              <Link to="/news">
              <div className="grid">
                <img src="/swiperblog1.svg" className="w-full" alt="" />
                <div className="bg-[#F4F7FB] grid gap-3 p-5">
                  <h2 className="font-semibold">Как правильно заряжать электросамокат</h2>
                  <p>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-10">
                    <div className='flex gap-2 items-center'>
                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
              <Link to="/news">
              <div className="grid">
                <img src="/swiperblog2.svg" className="w-full" alt="" />
                <div className="bg-[#F4F7FB] grid gap-3 p-5">
                  <h2 className="font-semibold">Как правильно заряжать электросамокат</h2>
                  <p>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-10">
                    <div className='flex gap-2 items-center'>
                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                    </div>
                  </div>
                </div>
              </div></Link>
              <Link to="/news"><div className="grid">
                <img src="/swiperblog3.svg" className="w-full" alt="" />
                <div className="bg-[#F4F7FB] grid gap-3 p-5">
                  <h2 className="font-semibold">Как правильно заряжать электросамокат</h2>
                  <p>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-10">
                    <div className='flex gap-2 items-center'>
                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                    </div>
                  </div>
                </div>
              </div></Link>
              <Link to="/news"><div className="grid">
                <img src="/swiperblog2.svg" className="w-full" alt="" />
                <div className="bg-[#F4F7FB] grid gap-3 p-5">
                  <h2 className="font-semibold">Как правильно заряжать электросамокат</h2>
                  <p>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-10">
                    <div className='flex gap-2 items-center'>
                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                    </div>
                  </div>
                </div>
              </div></Link>
              <Link to="/news"><div className="grid">
                <img src="/swiperblog1.svg" className="w-full" alt="" />
                <div className="bg-[#F4F7FB] grid gap-3 p-5">
                  <h2 className="font-semibold">Как правильно заряжать электросамокат</h2>
                  <p>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-10">
                    <div className='flex gap-2 items-center'>
                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                    </div>
                  </div>
                </div>
              </div></Link>
              <Link to="/news"><div className="grid">
                <img src="/swiperblog2.svg" className="w-full" alt="" />
                <div className="bg-[#F4F7FB] grid gap-3 p-5">
                  <h2 className="font-semibold">Как правильно заряжать электросамокат</h2>
                  <p>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-10">
                    <div className='flex gap-2 items-center'>
                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                    </div>
                  </div>
                </div>
              </div></Link>
              <Link to="/news"><div className="grid">
                <img src="/swiperblog3.svg" className="w-full" alt="" />
                <div className="bg-[#F4F7FB] grid gap-3 p-5">
                  <h2 className="font-semibold">Как правильно заряжать электросамокат</h2>
                  <p>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-10">
                    <div className='flex gap-2 items-center'>
                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                    </div>
                  </div>
                </div>
              </div></Link>
              <Link to="/news"><div className="grid">
                <img src="/swiperblog2.svg" className="w-full" alt="" />
                <div className="bg-[#F4F7FB] grid gap-3 p-5">
                  <h2 className="font-semibold">Как правильно заряжать электросамокат</h2>
                  <p>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-10">
                    <div className='flex gap-2 items-center'>
                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                    </div>
                  </div>
                </div>
              </div></Link>
              <Link to="/news"><div className="grid">
                <img src="/swiperblog1.svg" className="w-full" alt="" />
                <div className="bg-[#F4F7FB] grid gap-3 p-5">
                  <h2 className="font-semibold">Как правильно заряжать электросамокат</h2>
                  <p>Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-10">
                    <div className='flex gap-2 items-center'>
                        <img src="./calendar.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>01.09.2021</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src="./eye.svg" alt="" className='w-3 h-3 lg:w-4 lg:h-4' />
                        <p className='text-xs lg:text-sm text-gray-500'>53</p>
                    </div>
                  </div>
                </div>
              </div></Link>
            </div>
              <p className="mt-20 uppercase font-semibold text-[35px]">Вы смотрели</p>
            <div className="justify-center flex">
              <HitProduct/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
