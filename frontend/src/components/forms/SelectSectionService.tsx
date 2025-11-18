import { useState } from "react";
import { useApiData } from "../useApiData";

export default function SelectSectionService(){
    const [activeCategory, setActiveCategory] = useState<'samokat' | 'velik' | 'robot' | 'vesi'>('samokat');
    const [activeModel, setActiveModel] = useState<string>('Kugoo Kirin M4');
    const { data, loading } = useApiData<Product>('/product');
    const categories = [
        { id: 'samokat', label: 'Электросамокаты' },
        { id: 'velik', label: 'Электровелики' },
        { id: 'robot', label: 'Робот-пылесосы' },
        { id: 'vesi', label: 'Весы' }
    ];
    
    const models = {
        samokat: [
            { id: 'm4', name: 'Kugoo Kirin M4' },
            { id: 's2', name: 'Kugoo Kirin S2' },
            { id: 'm5', name: 'Kugoo Kirin M5' },
            { id: 'm7', name: 'Kugoo Kirin M7' },
            { id: 'm8', name: 'Kugoo Kirin M8' }
        ],
        velik: [
            { id: 'v1', name: 'Модель велосипеда 1' },
            { id: 'v2', name: 'Модель велосипеда 2' }
        ],
        robot: [
            { id: 'r1', name: 'Модель пылесоса 1' },
            { id: 'r2', name: 'Модель пылесоса 2' }
        ],
        vesi: [
            { id: 've1', name: 'Модель весов 1' },
            { id: 've2', name: 'Модель весов 2' }
        ]
    };

    const repairs = [
        { service: 'Замена/установка контроллера', price: '1500 руб.' },
        { service: 'Замена/установка контроллера', price: '1500 руб.' },
        { service: 'Замена/установка контроллера', price: '1500 руб.' },
        { service: 'Замена/установка контроллера', price: '1500 руб.' },
        { service: 'Замена/установка контроллера', price: '1500 руб.' },
        { service: 'Замена/установка контроллера', price: '1500 руб.' }
    ];

    const activeStyles = "bg-white text-[#6F73EE] border border-[#6F73EE]";
    const inactiveStyles = "bg-[#F4F7FB] text-[#5D6C7B] border border-[#F4F7FB] hover:bg-white hover:text-[#6F73EE] hover:border hover:border-[#6F73EE]";
    const activeModelStyles = "bg-white border-l-4 border-[#6F73EE] text-[#6F73EE] font-medium";
    const inactiveModelStyles = "text-[#5D6C7B] hover:text-[#6F73EE]";

    return (
        <>
            
            <div className="flex justify-center mb-8 lg:mb-12">
                <div className="grid grid-cols-2 lg:flex gap-3 lg:gap-4 w-full max-w-4xl px-4 lg:px-0 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id as any)}
                            className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                                activeCategory === category.id ? activeStyles : inactiveStyles
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-7xl px-4 lg:px-0">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 sm:justify-between sm:w-7xl">
                        <div className="bg-[#F4F7FB] rounded-[5px] lg:w-[300px]">
                            <div className="p-4 lg:p-6 grid gap-3 lg:gap-4">
                                {models[activeCategory]?.map((model) => (
                                    <button
                                        key={model.id}
                                        onClick={() => setActiveModel(model.name)}
                                        className={`text-left py-2 lg:py-3 px-4 lg:px-6 rounded-[5px] transition-all duration-200 text-sm lg:text-base ${
                                            activeModel === model.name ? activeModelStyles : inactiveModelStyles
                                        }`}
                                    >
                                        {model.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="grid gap-4 lg:gap-6">
                                {repairs.map((repair, index) => (
                                    <div key={index} className="border-b border-[#EAEBED] pb-4 lg:pb-6 last:border-b-0">
                                        <div className="flex justify-between items-start lg:items-center">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-base lg:text-[18px] mb-1 lg:mb-2">
                                                    {repair.service}
                                                </h3>
                                                <p className="text-[#5D6C7B] text-sm lg:text-base">
                                                    {activeModel}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold text-base lg:text-[18px] ">
                                                    {repair.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}