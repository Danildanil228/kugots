import { useState } from "react";

interface ServicePrice {
  id: string;
  name: string;
  price: string;
}

export default function SelectSectionServicePrice() {
    const [activeTab, setActiveTab] = useState<'hydro' | 'setup' | 'combo'>('hydro');
    
    const activeStyles = "bg-white text-[#6F73EE] border border-[#6F73EE]";
    const inactiveStyles = "bg-[#F4F7FB] text-[#5D6C7B] border border-[#F4F7FB] hover:bg-white hover:text-[#6F73EE] hover:border hover:border-[#6F73EE]";

    const hydroServices: ServicePrice[] = [
        { id: 's3', name: 'Kugoo S3', price: '2 790 ₽' },
        { id: 's3-pro', name: 'Kugoo S3 Pro', price: '2 790 ₽' },
        { id: 's1', name: 'Kugoo S1', price: '2 790 ₽' },
        { id: 'm2-pro', name: 'Kugoo M2 Pro', price: '2 790 ₽' },
        { id: 'hx', name: 'Kugoo HX', price: '2 790 ₽' },
        { id: 'hx-pro', name: 'Kugoo HX Pro', price: '2 790 ₽' },
        { id: 'es3', name: 'Kugoo ES3', price: '3 490 ₽' },
        { id: 'g-max', name: 'Kugoo G-Max', price: '3 490 ₽' },
        { id: 'c1', name: 'Kugoo C1', price: '3 490 ₽' }
    ];

    const setupServices: ServicePrice[] = [
        { id: 'm2', name: 'Kugoo M2', price: '2 790 ₽' },
        { id: 'max-speed', name: 'Kugoo Max Speed', price: '2 790 ₽' },
        { id: 'm4', name: 'Kugoo M4', price: '2 790 ₽' },
        { id: 'm4-pro', name: 'Kugoo M4 Pro 13/17/18 Ah', price: '2 790 ₽' },
        { id: 'm5', name: 'Kugoo M5', price: '2 790 ₽' },
        { id: 'g1', name: 'Kugoo G1', price: '2 790 ₽' },
        { id: 'g2-pro', name: 'Kugoo G2 Pro', price: '3 490 ₽' },
        { id: 'g-booster', name: 'Kugoo G-Booster', price: '3 490 ₽' },
        { id: 'gx', name: 'Kugoo GX', price: '3 490 ₽' }
    ];

    const comboServices: ServicePrice[] = [
        { id: 's3-combo', name: 'Kugoo S3', price: '4 990 ₽' },
        { id: 'm4-combo', name: 'Kugoo M4', price: '4 990 ₽' },
        { id: 'g2-combo', name: 'Kugoo G2 Pro', price: '5 990 ₽' },
        { id: 'gx-combo', name: 'Kugoo GX', price: '5 990 ₽' }
    ];

    const getCurrentServices = () => {
        switch (activeTab) {
            case 'hydro': return hydroServices;
            case 'setup': return setupServices;
            case 'combo': return comboServices;
            default: return hydroServices;
        }
    };

    const getButtonText = () => {
        switch (activeTab) {
            case 'hydro': return 'Заказать гидроизоляцию';
            case 'setup': return 'Заказать настройку';
            case 'combo': return 'Заказать гидроизоляцию + настройку';
            default: return 'Заказать услугу';
        }
    };

    return (
        <>
            <div className="flex justify-center mb-6 lg:mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 w-full max-w-4xl px-4 lg:px-0">
                    <button
                        onClick={() => setActiveTab('hydro')}
                        className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'hydro' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Гидроизоляция
                    </button>
                    <button
                        onClick={() => setActiveTab('setup')}
                        className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'setup' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Настройка
                    </button>
                    <button
                        onClick={() => setActiveTab('combo')}
                        className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'combo' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Гидроизоляция + настройка
                    </button>
                </div>
            </div>

            <div className="flex justify-center mb-6 lg:mb-8">
                <div className="w-full max-w-4xl px-4 lg:px-0">
                    <p className="text-center text-[#5D6C7B] text-sm lg:text-base">
                        Для версии MAX и VIP гидроизоляция и настройка — бесплатно
                    </p>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-4xl px-4 lg:px-0">
                    <div className="bg-white border border-[#EAEBED] rounded-[5px] overflow-hidden">
                        <div className="grid divide-y divide-[#EAEBED]">
                            {getCurrentServices().map((service) => (
                                <div key={service.id} className="flex justify-between items-center py-4 lg:py-6 px-4 lg:px-6 hover:bg-[#F4F7FB] transition-colors">
                                    <span className="font-medium text-sm lg:text-base text-gray-900">
                                        {service.name}
                                    </span>
                                    <span className="font-semibold text-sm lg:text-base text-[#6F73EE]">
                                        {service.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-6 lg:mt-8 mb-20">
                <button className="bg-[#6F73EE] text-white py-3 lg:py-4 px-8 lg:px-12 rounded-[5px] hover:bg-[#5a5fd8] transition-colors text-sm lg:text-base font-medium">
                    {getButtonText()}
                </button>
            </div>
        </>
    );
}