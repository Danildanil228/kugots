import { Breadcrumbs } from "../Breadcrumbs";
import { useCompare } from "../../contexts/CompareContext";

export default function Compare() {
    const { compareItems, removeFromCompare } = useCompare();

    const formatPrice = (price: number) => {
        if (!price) return '';
        let cleanPrice = price.toString()
            .replace(/[,.]00$/, '')
            .replace(/[^\d,.]/g, '');
        cleanPrice = cleanPrice.replace(/[,.]/, '');
        return cleanPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    return (
        <>
            <Breadcrumbs items={[
                { label: 'Главная', path: '/main' },
                { label: 'Сравнение товаров' }
            ]} />
            
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Сравнение товаров</h1>
                
                {compareItems.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">Нет товаров для сравнения</p>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {compareItems.map((item) => (
                            <div key={item.id} className="border rounded-lg p-4 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <img 
                                        src={item.img} 
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div>
                                        <h2 className="font-semibold">{item.name}</h2>
                                        <p className="text-[#6F73EE] font-bold">{formatPrice(item.price)} ₽</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => removeFromCompare(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Удалить
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}