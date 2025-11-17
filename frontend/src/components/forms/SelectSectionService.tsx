import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/api";
import { ScrollArea } from "@radix-ui/themes";

export default function SelectSectionService(){
    const [product, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState<'samokat' | 'velik' | 'robot' | 'vesi'>('samokat');
    const activeStyles = "bg-white text-[#6F73EE] border border-[#6F73EE]";
    const inactiveStyles = "bg-[#F4F7FB] text-[#5D6C7B] border border-[#F4F7FB] hover:bg-white hover:text-[#6F73EE] hover:border hover:border-[#6F73EE]";
    const activeStyleBtn = "bg-white border-l rounded-xs text-[#6F73EE] text-[18px]!";
    const inactiveStyleBtn = "text-[18px]!";
    const [activeTabBtn, setActiveTabBtn] = useState<'item1'|'item2'|'item3'|'item4'|'item5'>('item1');
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/product`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return(
        <>
            <div className="flex justify-center mt-10">
                <div className="sm:flex grid grid-cols-2  gap-4">
                    <button
                    onClick={() => setActiveTab('samokat')}
                    className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'samokat' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Электросамокаты
                    </button>
                    <button 
                        onClick={() => setActiveTab('velik')}
                        className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'velik' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Электровелики
                    </button>
                    <button 
                        onClick={() => setActiveTab('robot')}
                        className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'robot' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Роботы-пылесосы
                    </button>
                    <button 
                        onClick={() => setActiveTab('vesi')}
                        className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'vesi' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Роботы-пылесосы
                    </button>
                </div>
            </div>
            <div className="flex justify-center sm:justify-between mt-10">
                {activeTab === 'samokat' && (
                    <>
                        <div className="flex">
                            <div className="bg-[#F4F7FB] justify-start w-auto sm:w-[300px] py-4 grid gap-3">
                                <button
                                    onClick={()=> setActiveTabBtn('item1')}
                                    className={` pl-8 border-[#6F73EE] ${
                                        activeTabBtn === 'item1' ? activeStyleBtn : inactiveStyleBtn
                                    }`}
                                    >Kugoo Kirin M4
                                </button>
                                <button
                                    onClick={()=> setActiveTabBtn('item2')}
                                    className={`pl-8 border-[#6F73EE] ${
                                        activeTabBtn === 'item2' ? activeStyleBtn : inactiveStyleBtn
                                    }`}
                                    >Kugoo Kirin M4
                                </button>
                            </div>
                            <div className="flex">
                                <p>fsdfsd</p>
                                <p>fdfsdf</p>
                            </div>
                        </div>
                       
                    </>
                )}
            </div>




            {/* <div className="justify-center pt-10">
                <div className="flex-wrap sm:flex gap-4">
                    <button
                    onClick={() => setActiveTab('samokat')}
                    className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'samokat' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Электросамокаты
                    </button>
                    <button 
                        onClick={() => setActiveTab('velik')}
                        className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'velik' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Электровелики
                    </button>
                    <button 
                        onClick={() => setActiveTab('robot')}
                        className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'robot' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Роботы-пылесосы
                    </button>
                    <button 
                        onClick={() => setActiveTab('vesi')}
                        className={`py-3 lg:py-4 px-4 lg:px-6 rounded-[5px] transition-colors text-sm lg:text-base ${
                            activeTab === 'vesi' ? activeStyles : inactiveStyles
                        }`}
                    >
                        Роботы-пылесосы
                    </button>
                </div>
                <div className="flex justify-center">
                    {activeTab === 'samokat' && (
                        <div className="flex justify-between w-7xl">
                            <div className="grid sm:bg-[#F4F7FB] sm:py-4 sm:px-8 px-2">
                                <button
                                onClick={()=> setActiveTabBtn('item1')}
                                className={` ${
                                    activeTabBtn === 'item1' ? activeStyleBtn : inactiveStyleBtn
                                }`}
                                >Kugoo Kirin M4</button>
                                <button
                                onClick={()=> setActiveTabBtn('item2')}
                                className={` ${
                                    activeTabBtn === 'item2'
                                }`}
                                >Kugoo Kirin M4</button>
                                <button
                                onClick={()=> setActiveTabBtn('item3')}
                                className={` ${
                                    activeTabBtn === 'item3'
                                }`}
                                >Kugoo Kirin M4</button>
                                <button
                                onClick={()=> setActiveTabBtn('item4')}
                                className={` ${
                                    activeTabBtn === 'item4'
                                }`}
                                >Kugoo Kirin M4</button>
                                <button
                                onClick={()=> setActiveTabBtn('item5')}
                                className={` ${
                                    activeTabBtn === 'item5'
                                }`}
                                >Kugoo Kirin M4</button>

                            </div>
                            <div>
                                {activeTabBtn === 'item1' && (
                                    <div>
                                        Item1
                                    </div>
                                )}
                                {activeTabBtn === 'item2' && (
                                    <div>Item2</div>
                                )}
                            </div>
                        </div>
                    )}
                    {activeTab === 'velik' && (
                        <div>fds</div>
                    )}
                    {activeTab === 'robot' && (
                        <div>fsdf</div>
                    )}
                    {activeTab === 'vesi' && (
                        <div>fsdf</div>
                    )}
                </div>
            </div> */}
        </>
    )
}