import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useLike } from '../contexts/LikeContext';
import { useCompare } from '../contexts/CompareContext';

export function MobileNavigation() {
    const location = useLocation();
    const { getTotalItems } = useCart();
    const { likeItems } = useLike();
    const { compareItems } = useCompare();

    const navItems = [
        { 
            path: '/main', 
            label: 'Главная', 
            icon: './HomeNav.svg'
        },
        { 
            path: '/catalog', 
            label: 'Каталог', 
            icon: './SearchNav.svg'
        },
        { 
            path: '/cart', 
            label: 'Корзина', 
            icon: './CartNav.svg',
            badge: getTotalItems() 
        },
        { 
            path: '/like', 
            label: 'Лайки', 
            icon: './HeartNav.svg',
            badge: likeItems.length 
        },
        { 
            path: '/compare', 
            label: 'Сравнить', 
            icon: './CompareNav.svg',
            badge: compareItems.length 
        },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
            <div className="flex justify-around">
                {navItems.map((item) => {
                    const active = isActive(item.path);
                    
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex flex-col items-center justify-center py-2 px-1 flex-1 min-w-0 ${
                                active ? 'text-[#6F73EE]' : 'text-gray-500'
                            }`}
                        >
                            <div className="relative mb-1">
                                <img 
                                    src={item.icon} 
                                    alt={item.label}
                                    className={`w-6 h-6 transition-all duration-200 ${
                                        active 
                                            ? 'filter brightness-0 saturate-100 invert-30 sepia-90 saturate-3000 hue-rotate-220' 
                                            : 'filter brightness-0 opacity-60'
                                    }`}
                                />
                                {item.badge > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-[#6F73EE] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}