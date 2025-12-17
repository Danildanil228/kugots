
// frontend/src/components/forms/SearchWithLogic.tsx
import { useState, useEffect, useCallback, useRef } from 'react';
import { Everywhere } from "../buttons/Everywhere";
import { API_BASE_URL } from '../../config/api';
import { Link } from 'react-router-dom';
import { formatPrice } from '../format';

interface SearchResult {
    id: number;
    name: string;
    price: number;
    img: string;
    descr?: string;
}

export function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    
    // Debounce для поиска
    const debounce = (func: Function, delay: number) => {
        let timeoutId: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };
    
    // Поиск товаров (без лимита)
    const performSearch = useCallback(async (term: string) => {
        if (!term.trim()) {
            setResults([]);
            setShowResults(false);
            setHasSearched(false);
            return;
        }
        
        setIsLoading(true);
        try {
            const response = await fetch(
                `${API_BASE_URL}/api/products/search?q=${encodeURIComponent(term)}`
            );
            
            if (!response.ok) throw new Error('Ошибка поиска');
            
            const data = await response.json();
            setResults(data);
            setShowResults(true);
            setHasSearched(true);
        } catch (error) {
            console.error('Ошибка при поиске:', error);
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    }, []);
    
    // Автодополнение (без лимита)
    const fetchSuggestions = useCallback(async (term: string) => {
        if (!term.trim() || term.length < 2) {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }
        
        try {
            const response = await fetch(
                `${API_BASE_URL}/api/products/autocomplete?q=${encodeURIComponent(term)}`
            );
            
            if (!response.ok) throw new Error('Ошибка автодополнения');
            
            const data = await response.json();
            setSuggestions(data);
            setShowSuggestions(data.length > 0);
        } catch (error) {
            console.error('Ошибка автодополнения:', error);
            setSuggestions([]);
        }
    }, []);
    
    // Debounced функции
    const debouncedSearch = useCallback(
        debounce((term: string) => {
            performSearch(term);
        }, 500),
        [performSearch]
    );
    
    const debouncedSuggestions = useCallback(
        debounce((term: string) => {
            fetchSuggestions(term);
        }, 300),
        [fetchSuggestions]
    );
    
    // Обработчик изменения текста
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        debouncedSuggestions(value);
        
        if (value.trim() && value.length >= 2) {
            debouncedSearch(value);
        } else {
            setResults([]);
            setSuggestions([]);
            setShowResults(false);
            setShowSuggestions(false);
            setHasSearched(false);
        }
    };
    
    // Поиск по кнопке
    const handleSearchButton = () => {
        if (searchTerm.trim()) {
            performSearch(searchTerm);
            setShowSuggestions(false);
        }
    };
    
    // Поиск по Enter
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            performSearch(searchTerm);
            setShowSuggestions(false);
            // Редирект на страницу результатов поиска
            window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
        }
    };
    
    // Закрытие результатов при клике вне компонента
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
                setShowResults(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    // Обработчик выбора подсказки
    const handleSuggestionClick = (product: SearchResult) => {
        setSearchTerm(product.name);
        setShowSuggestions(false);
        // Перенаправляем на страницу товара
        window.location.href = `/product/${product.id}`;
    };
    
    // Очистка поиска
    const clearSearch = () => {
        setSearchTerm('');
        setResults([]);
        setSuggestions([]);
        setShowResults(false);
        setShowSuggestions(false);
        setHasSearched(false);
    };
    
    // Переход на страницу всех результатов
    const showAllResults = () => {
        if (searchTerm.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
        }
    };
    
    return (
        <div className="relative" ref={searchRef}>
            <div className="search flex border border-[#6F73EE] rounded-[5px] justify-between">
                <div className="search-input-block p-1 flex gap-5 flex-1">
                    <Everywhere/>
                    <input 
                        className="search-input flex-1 outline-none w-150"
                        type="text" 
                        placeholder="Искать самокат KUGO"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyPress={handleKeyPress}
                        onFocus={() => {
                            if (suggestions.length > 0 && searchTerm.length >= 2) {
                                setShowSuggestions(true);
                            }
                        }}
                    />
                    {searchTerm && (
                        <button 
                            onClick={clearSearch}
                            className="px-2 text-gray-500 hover:text-gray-700 transition-colors"
                            title="Очистить поиск"
                        >
                            ✕
                        </button>
                    )}
                </div>
                <div className="search-icon">
                    <button 
                        className="bg-[#6F73EE] w-10 h-10 flex items-center justify-center hover:bg-[#5a5fd8] transition-colors"
                        onClick={handleSearchButton}
                        disabled={isLoading || !searchTerm.trim()}
                        title="Искать"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <img src="/Search.svg" alt="Поиск" />
                        )}
                    </button>
                </div>
            </div>
            
            {/* Подсказки (autocomplete) - показываем все */}
            {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                    <div className="p-3 border-b bg-gray-50">
                        <p className="font-medium text-sm text-gray-600">
                            Подсказки: {suggestions.length}
                        </p>
                    </div>
                    {suggestions.map((product) => (
                        <div
                            key={product.id}
                            className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                            onClick={() => handleSuggestionClick(product)}
                        >
                            <div className="flex items-center gap-3">
                                <img 
                                    src={product.img} 
                                    alt={product.name}
                                    className="w-10 h-10 object-cover rounded"
                                />
                                <div className="flex-1">
                                    <p className="font-medium text-sm">{product.name}</p>
                                    <p className="text-[#6F73EE] font-semibold">{formatPrice(product.price)} ₽</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {/* Результаты поиска - показываем все */}
            {showResults && results.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-[80vh] overflow-y-auto">
                    <div className="p-4 border-b bg-gray-50 sticky top-0">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Найдено товаров: {results.length}</p>
                                <p className="text-sm text-gray-600">По запросу: "{searchTerm}"</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button 
                                    onClick={showAllResults}
                                    className="text-[#6F73EE] hover:text-[#5a5fd8] text-sm font-medium"
                                >
                                    Посмотреть все →
                                </button>
                                <button 
                                    onClick={() => setShowResults(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                    title="Закрыть"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="divide-y">
                        {results.map((product) => (
                            <Link 
                                key={product.id}
                                to={`/product/${product.id}`}
                                className="block hover:bg-gray-50 transition-colors"
                                onClick={() => setShowResults(false)}
                            >
                                <div className="p-4 flex items-center gap-4">
                                    <img 
                                        src={product.img} 
                                        alt={product.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-medium hover:text-[#6F73EE]">
                                                    {product.name}
                                                </h3>
                                                {product.descr && (
                                                    <span className={`inline-block mt-1 px-2 py-1 text-xs rounded ${
                                                        product.descr === 'Хит' ? 'bg-red-500' :
                                                        product.descr === 'Новинка' ? 'bg-green-500' : 'bg-blue-500'
                                                    } text-white`}>
                                                        {product.descr}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-[#6F73EE] font-semibold text-lg">
                                                {formatPrice(product.price)} ₽
                                            </p>
                                        </div>
                                        
                                        <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <img src="/acum.svg" className="w-4 h-4" alt="Батарея" />
                                                <span>{product.acum} mAh</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <img src="/speed.svg" className="w-4 h-4" alt="Скорость" />
                                                <span>{product.speed} км/ч</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    
                    <div className="p-4 border-t bg-gray-50 sticky bottom-0">
                        <button 
                            onClick={showAllResults}
                            className="w-full py-3 bg-[#6F73EE] text-white rounded-lg hover:bg-[#5a5fd8] transition-colors font-medium"
                        >
                            Показать все {results.length} товаров на отдельной странице
                        </button>
                    </div>
                </div>
            )}
            
            {/* Сообщение если ничего не найдено */}
            {hasSearched && results.length === 0 && searchTerm.trim() && !isLoading && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                    <div className="text-center">
                        <p className="text-gray-500 mb-2">По запросу "{searchTerm}" ничего не найдено</p>
                        <p className="text-sm text-gray-400 mb-3">Попробуйте изменить запрос или посмотрите другие товары</p>
                        <Link 
                            to="/catalog"
                            className="inline-block px-4 py-2 bg-[#6F73EE] text-white rounded-lg hover:bg-[#5a5fd8] text-sm"
                        >
                            Перейти в каталог
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}



