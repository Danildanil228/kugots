import { Link } from "react-router-dom";
import { useLike } from "../../contexts/LikeContext";
import { Breadcrumbs } from "../Breadcrumbs";
import { formatPrice, getTagColor } from "../format";
import { ScrollToTop } from "../ScrollToTop";
import { ActionIcon } from "../buttons/ActionIcon";
import { AlertOrderProduct } from "../forms/AlertOrderProduct";

export default function Likes() {
  const { likeItems, removeFromLike } = useLike();

  return (
    <>
      <section className="flex container justify-center mb-20!">
        <ScrollToTop />
        <div>
          <div className="mt-10 justify-between w-7xl">
            <Breadcrumbs
              items={[
                { label: "Главная", path: "/main" },
                { label: "Избранное" },
              ]}
            />
          </div>
          <div className="mb-10">
            <p className="font-semibold uppercase text-[35px]">Избранное</p>
          </div>
          <div className="">
            {likeItems.length === 0 ? (
              <>
                <div className="">
                  <div className="justify-center grid w-full text-center items-center bg-[#F4F7FB] gap-3 py-12 rounded-xl">
                    <div className="justify-center flex">
                      <img src="/bgimc.svg" alt="" />
                    </div>
                    <h1 className="font-semibold text-[25px] uppercase">
                      В избранном пусто
                    </h1>
                    <p>
                      Добавьте товары в избранное, чтобы просмотреть или купить
                      их позже
                    </p>
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
              </>
            ) : (
              <div className="grid gap-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[30px]">
                  {likeItems.map((product) => (
                    <div
                      key={product.id}
                      className="border-[#EAEBED] border rounded-xl w-full"
                    >
                      <div
                        className="img w-full h-[180px] lg:h-[230px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${product.img})` }}
                      >
                        <div className="flex items-center justify-between px-2.5 pt-1">
                          <div
                            className={`py-1 px-2 rounded-[5px] text-white gap-[30px] text-[12px] ${getTagColor(
                              "Хит"
                            )}`}
                          >
                            Хит
                          </div>
                          <ActionIcon
                            type="compare"
                            product={{
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              img: product.img,
                            }}
                          />
                        </div>
                      </div>
                      <div className="desc">
                        <div className="px-4 lg:px-6 py-4 lg:py-6 grid gap-4 lg:gap-5">
                          <div>
                            <h3 className="text-[16px] lg:text-[18px] font-semibold leading-tight">
                              {product.name}
                            </h3>
                          </div>
                          <div className="flex justify-between">
                            <div className="grid gap-3 lg:gap-4">
                              <div className="flex gap-2 lg:gap-2.5 items-center">
                                <img
                                  className="w-4 lg:w-5"
                                  src="./acum.svg"
                                  alt=""
                                />
                                <p className="text-[#5D6C7B] text-sm lg:text-base">
                                  10 000 mAh
                                </p>
                              </div>
                              <div className="flex gap-2 lg:gap-2.5 items-center">
                                <img
                                  className="w-4 lg:w-5"
                                  src="./speed.svg"
                                  alt=""
                                />
                                <p className="text-[#5D6C7B] text-sm lg:text-base">
                                  25 км/ч
                                </p>
                              </div>
                            </div>
                            <div className="grid gap-3 lg:gap-4">
                              <div className="flex gap-2 lg:gap-2.5 items-center">
                                <img
                                  className="w-4 lg:w-5"
                                  src="./power.svg"
                                  alt=""
                                />
                                <p className="text-[#5D6C7B] text-sm lg:text-base">
                                  0.35кВт
                                </p>
                              </div>
                              <div className="flex gap-2 lg:gap-2.5 items-center">
                                <img
                                  className="w-4 lg:w-5"
                                  src="./time.svg"
                                  alt=""
                                />
                                <p className="text-[#5D6C7B] text-sm lg:text-base">
                                  2 ч
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="line-through! text-[#5D6C7B] text-[10px] lg:text-[12px]">
                                {formatPrice(product.price + 5000)} ₽
                              </p>
                              <p className="text-[16px] lg:text-[20px] font-semibold">
                                {formatPrice(product.price)} ₽
                              </p>
                            </div>
                            <div className="sm:flex gap-2 lg:gap-2.5 grid">
                              <ActionIcon
                                type="cart"
                                product={{
                                  id: product.id,
                                  name: product.name,
                                  price: product.price,
                                  img: product.img,
                                }}
                              />
                              <ActionIcon
                                type="like"
                                product={{
                                  id: product.id,
                                  name: product.name,
                                  price: product.price,
                                  img: product.img,
                                }}
                              />
                            </div>
                          </div>
                          <div className="justify-center flex">
                            <AlertOrderProduct
                              product={{
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                img: product.img,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
