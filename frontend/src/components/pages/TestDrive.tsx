import { useState } from "react";
import { Breadcrumbs } from "../Breadcrumbs";
import { HitProduct } from "../forms/HitProduct";
import { ScrollToTop } from "../ScrollToTop";
import { useApiData } from "../useApiData";
import { useFormSubmit } from "../forms/useFormSubmit";
import { PhoneNumber } from "../forms/PhoneNumber";
import { Checkbox } from "@radix-ui/themes";

export default function TestDrive(){
    const [phone, setPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { data: submesData } = useApiData('/submes');

    const { submit: submitCallOrder, isLoading: isCallLoading, error: callError } = useFormSubmit({
        endpoint: '/api/call-order',
        onSuccess: () => {
            setIsSubmitted(true);
            setPhone('');
            setIsPhoneValid(false);
            setIsChecked(true);
        }
    });

    const handlePhoneChange = (value: string, isValid: boolean) => {
        setPhone(value);
        setIsPhoneValid(isValid);
    };

    const handleCallOrder = async () => {
        if (!isPhoneValid || !isChecked) return;
        await submitCallOrder({ 
            phone: phone,
            type: 'callback-consult'
        });
    };
    return(
        <>
        <ScrollToTop/>
            <section className="flex justify-center container">
                <div className="grid">
                    <div className=" mt-10 items-start justify-start flex sm:px-20">
                        <Breadcrumbs items={[{label: 'Главная', path: '/main'}, {label: 'Тест-драйв'}]}/> 
                    </div>

                    <div className="flex justify-center pt-8 ">
                        <div className="hidden lg:block bg-[url('./bgtest.svg')] bg-center bg-cover bg-no-repeat items-center w-[1440px] rounded-[5px]">
                            <div className="justify-start px-20 w-7xl grid gap-9 py-[67px]">
                                <div>
                                    <div className="flex gap-3 text-white">
                                        <img src="./pin2.svg" alt="" />
                                        <p>Восточно-Кругликовская улица, 86</p>
                                        <p>Вт - Сб 10:00 - 20:00</p>
                                    </div>
                                    <h1 className="uppercase font-semibold text-[35px] text-white w-130">Запишитесь на бесплатный тест-драйв электросамокатов</h1>
                                    <p className="text-white">в Москве без ограничения по времени</p>
                                </div>
                                <div className="flex gap-10 text-white items-center">
                                    <div className="flex gap-3 w-70">
                                        <img className="" src="./samoc.svg" alt="" />
                                        <p>Поймете, какая модель вам подходит</p>
                                    </div>
                                    <div className="flex gap-3 w-50">
                                        <img className="" src="./energy.svg" alt="" />
                                        <p>Проверите лучшие самокаты в деле</p>
                                    </div>
                                </div>
                                <button className="w-fit px-[25px] py-[15px] bg-white text-[#6F73EE] rounded-[5px]">Записаться</button>
                            </div>
                        </div>

                        <div className="lg:hidden bg-[url('./bgtest.svg')] bg-center bg-cover bg-no-repeat rounded-[5px] w-full max-w-[95vw] min-h-[200px] text-white">
                            <div className="flex flex-col justify-start text-left items-start gap-4 py-6 px-4 h-full">
                                <div>
                                    <h1 className="uppercase font-semibold text-lg ">Запишитесь на бесплатный тест-драйв электросамокатов</h1>
                                    <p>в Москве без ограничения по времени</p>
                                </div>
                                <button className="px-4 py-2 bg-white text-[#6F73EE] rounded-[5px] text-[14px]! font-medium ">
                                    Записаться
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Определите максимально подходящую вам модель     */}
                    <div className="flex justify-center my-20">
                        <div className="grid gap-20">
                            <div className="sm:flex justify-between sm:w-7xl grid">
                                <div className="grid">
                                    <div>
                                        <h1 className="uppercase font-semibold text-2xl sm:text-[35px] text-center sm:text-start">Определите максимально подходящую вам модель не теоретически, а на практике</h1>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Тест-драйв поможет:</p>
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex gap-3 items-center">
                                            <img src="./CheckCircle.svg" className="w-[22px]" alt="" />
                                            <p>Понять подходит ли вам конкретная модель;</p>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <img src="./CheckCircle.svg" className="w-[22px]" alt="" />
                                            <p>Испытать самокат в «реальной жизни»;</p>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <img src="./CheckCircle.svg" className="w-[22px]" alt="" />
                                            <p>Оценить удобство хранения и эксплуатации;</p>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <img src="./CheckCircle.svg" className="w-[22px]" alt="" />
                                            <p>Узнать реальные характеристики и возможности модели.</p>
                                        </div>
                                    </div>
                                </div>
                                <img className="hidden md:block" src="./max.svg" alt="" />
                            </div>
                            <div className="sm:flex justify-between sm:w-7xl gap-20 grid">
                                <img className="hidden md:block" src="./max2.svg" alt="" />
                                <div className="grid">
                                    <div>
                                        <h1 className="uppercase font-semibold text-2xl sm:text-[35px] text-center sm:text-start">Научим правильной и безопасной езде в городе вас или вашего ребенка</h1>
                                    </div>
                                    <div>
                                        <p className="font-semibold">На обучении специалист расскажет:</p>
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex gap-3 items-center">
                                            <img src="./CheckCircle.svg" className="w-[22px]" alt="" />
                                            <p>Как подготовить самокат к поездке;</p>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <img src="./CheckCircle.svg" className="w-[22px]" alt="" />
                                            <p>Как «завести» самокат;</p>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <img src="./CheckCircle.svg" className="w-[22px]" alt="" />
                                            <p>Как вести себя во время поездки и обезопасить себя и окружающих;</p>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <img src="./CheckCircle.svg" className="w-[22px]" alt="" />
                                            <p>Как складывать и раскладывать электросамокат;</p>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <img src="./CheckCircle.svg" className="w-[22px]" alt="" />
                                            <p>Как ухаживать за своим девайсом.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Сейчас для тест-драйва и обучения доступны следующие модели */}
                    <div>
                        <div className="justify-center flex uppercase text-2xl font-semibold  text-center sm:text-[35px]">
                            <h1 className="sm:w-180">Сейчас для тест-драйва и обучения доступны следующие модели</h1>
                        </div>
                        <div className="justify-center flex mt-10 sm:mt-0">
                            <HitProduct/>
                        </div>
                    </div>
                    {/* Нет нужной модели, которую хотите протестировать? */}
                    <div className="flex bg-[url('./bgtest2.svg')] bg-center bg-cover bg-no-repeat my-20">
                        <div className="py-[130px] sm:px-20 grid text-center sm:text-start">
                            <h1 className="uppercase font-semibold text-2xl sm:text-[35px] sm:w-155">Нет нужной модели, которую хотите протестировать?</h1>
                            <p className="font-semibold mt-10 mb-5">Оставьте заявку, и менеджер подберет нужный самокат</p>
                            <div className="sm:flex gap-5 grid">
                                <PhoneNumber onPhoneChange={handlePhoneChange} value={phone}/>
                                <button 
                                    className={`px-5 py-4 rounded-[5px] text-white bg-[#6F73EE] transition-colors ${
                                        isSubmitted 
                                            ? 'bg-green-500 cursor-default' 
                                            : !isPhoneValid || !isChecked || isCallLoading 
                                                ? 'bg-[#6F73EE] opacity-50 cursor-not-allowed' 
                                                : 'bg-[#6F73EE]'
                                    }`}
                                    onClick={isSubmitted ? undefined : handleCallOrder}
                                    disabled={isSubmitted || !isPhoneValid || !isChecked || isCallLoading}
                                >
                                    {isSubmitted ? 'Отправлено!' : (isCallLoading ? 'Отправка...' : 'Оставить заявку на тест-драйв')}
                                </button>
                            </div>
                            <div className='flex gap-3 items-center mt-5'>
                                <Checkbox checked={isChecked} onCheckedChange={(checked) => setIsChecked(checked === true)} />
                                <p className='sm:text-start text-[14px] sm:w-100'>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="" className='underline!'>политикой конфиденциальности</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}