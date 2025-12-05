import { Breadcrumbs } from "../Breadcrumbs";
import { ScrollToTop } from "../ScrollToTop";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Navigation } from "swiper/modules";

export default function Actions() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const swiperRef = useRef(null);

  return (
    <>
      <ScrollToTop />
      <section className="flex container justify-center min-h-screen">
        <div>
          <div className="mt-10 sm:px-20">
            <Breadcrumbs
              items={[{ label: "Главная", path: "/main" }, { label: "Акции" }]}
            />
          </div>
          <div className="flex sm:w-[1440px] bg-[url('/ac.svg')] bg-no-repeat bg-center bg-cover py-12 rounded-xl">
            <div className="grid gap-3 px-20">
              <div className="flex text-white gap-5">
                <p className="px-2 py-1 bg-[#EE685F] rounded-xl">До 01.09</p>
                <p className="px-2 py-1 bg-[#75D14A] rounded-xl">+ 2 подарка</p>
              </div>
              <p className="w-160 font-semibold uppercase text-white text-[35px]">
                выгода 2880 RUB при покупке Kugoo Kirin M4 Pro 13 Ah
              </p>
            </div>
          </div>

          {/* СВАЙПЕР */}
          <div className="flex justify-center mt-14">
            <div className="w-7xl px-4">
              <Swiper
                modules={[Grid, Pagination, Navigation]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setCurrentPage(swiper.activeIndex + 1);
                }}
                onAfterInit={(swiper) => {
                  const pages = Math.ceil(swiper.slides.length / 4); 
                  setTotalPages(pages);
                }}
                grid={{ rows: 2, fill: "row" }}
                slidesPerView={2}
                spaceBetween={40}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                className="pb-20"
                breakpoints={{
                  320: { slidesPerView: 1, grid: { rows: 1 } },
                  768: { slidesPerView: 2, grid: { rows: 2 } },
                }}
              >
                

                <SwiperSlide className="rounded-3xl">
                  <div className="flex bg-[#F4F7FB] rounded-2xl overflow-hidden">
                    <img className="w-[280px]!" src="/sw1.svg" alt="" />
                    <div className="grid px-10 py-5">
                      <p>Срок проведения: 15.08 - 01.09</p>
                      <h2 className="font-semibold max-w-60">
                        До 01.09 выгода 2880 RUB при покупке Kugoo Kirin M4 Pro
                        13
                      </h2>
                      <p>+ 4 подарка к покупке</p>
                      <button className="text-white bg-[#6F73EE] mt-3 py-2 px-4 rounded-xl">
                        Принять участие в акции
                      </button>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-3xl">
                  <div className="flex bg-[#F4F7FB] rounded-2xl overflow-hidden">
                    <img src="/sw2.svg" alt="" />
                    <div className="grid px-10 py-5">
                      <p>Срок проведения: 15.08 - 01.09</p>
                      <h2 className="font-semibold max-w-60">
                        05.09 розыгрыш набора аксессуаров
                      </h2>
                      <p>
                        Купите любой электросамокат… становитесь участником
                        розыгрыша!
                      </p>
                      <button className="text-white bg-[#6F73EE] mt-3 py-2 px-4 rounded-xl">
                        Принять участие в акции
                      </button>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-3xl">
                  <div className="flex bg-[#F4F7FB] rounded-2xl overflow-hidden">
                    <img src="/sw2.svg" alt="" />
                    <div className="grid px-10 py-5">
                      <p>Срок проведения: 15.08 - 01.09</p>
                      <h2 className="font-semibold max-w-60">
                        05.09 розыгрыш набора аксессуаров
                      </h2>
                      <p>
                        Купите любой электросамокат… становитесь участником
                        розыгрыша!
                      </p>
                      <button className="text-white bg-[#6F73EE] mt-3 py-2 px-4 rounded-xl">
                        Принять участие в акции
                      </button>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-3xl">
                  <div className="flex bg-[#F4F7FB] rounded-2xl overflow-hidden">
                    <img className="w-[280px]!" src="/sw1.svg" alt="" />
                    <div className="grid px-10 py-5">
                      <p>Срок проведения: 15.08 - 01.09</p>
                      <h2 className="font-semibold max-w-60">
                        До 01.09 выгода 2880 RUB при покупке Kugoo Kirin M4 Pro
                        13
                      </h2>
                      <p>+ 4 подарка к покупке</p>
                      <button className="text-white bg-[#6F73EE] mt-3 py-2 px-4 rounded-xl">
                        Принять участие в акции
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
