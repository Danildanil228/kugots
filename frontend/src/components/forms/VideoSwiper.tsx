import { useState } from "react";

export function VideoSwiper(){
    const [activeVideo, setActiveVideo] = useState(0);
    const [playingStates, setPlayingStates] = useState([false, false, false]);

    const handleVideoClick = (index: number) => {
        const newPlayingStates = [...playingStates];
        newPlayingStates[index] = true;
        setPlayingStates(newPlayingStates);
    };

    const handleMouseEnter = (index: number) => {
        setActiveVideo(index);
    };

    // Адаптивные размеры для разных устройств
    const getVideoSize = (index: number) => {
        if (window.innerWidth < 1024) { // mobile
            return "w-full h-[200px]";
        } else if (window.innerWidth < 1280) { // tablet
            return activeVideo === index 
                ? "w-full h-[250px]" 
                : "w-full h-[180px]";
        } else { // desktop
            return activeVideo === index 
                ? "w-[530px] h-[300px]" 
                : "w-[350px] h-[200px]";
        }
    };

    const getTransitionClass = "transition-all duration-500 ease-in-out";

    const videos = [
        { id: 1, title: "Крутой и городской? Обзор Kugoo XS Plus" },
        { id: 2, title: "Крутой и городской? Обзор Kugoo XS Plus" },
        { id: 3, title: "Крутой и городской? Обзор Kugoo XS Plus" }
    ];

    return(
        <>
            {/* Desktop версия - горизонтальная с анимацией ТОЛЬКО видео */}
            <div className="hidden lg:flex justify-between w-full max-w-7xl gap-6 items-start h-100 mb-20 mt-14 mx-auto"
                onMouseLeave={() => setActiveVideo(0)}
            >
                {videos.map((video, index) => (
                    <div 
                        key={video.id}
                        className={`${getTransitionClass} cursor-pointer flex flex-col flex-1`}
                        onMouseEnter={() => handleMouseEnter(index)}
                    >
                        {/* Блок видео с анимацией */}
                        <div className={`${getTransitionClass} min-h-0`}>
                            {!playingStates[index] && (
                                <div 
                                    className={`${getVideoSize(index)} bg-cover bg-center relative rounded-[5px] ${getTransitionClass}`}
                                    style={{ backgroundImage: `url('./videoswiper${video.id}.svg')` }}
                                    onClick={() => handleVideoClick(index)}
                                >
                                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                        <img src="./playicon.svg" alt="Play" className="w-12 lg:w-20 h-12 lg:h-20" />
                                    </button>
                                    <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors rounded-[5px]"></div>
                                </div>
                            )}
                            
                            {playingStates[index] && (
                                <iframe
                                    width={activeVideo === index ? "530" : "350"}
                                    height={activeVideo === index ? "300" : "200"}
                                    src="https://www.youtube.com/embed/6n-wJGHyIE0?autoplay=1"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className={`${getVideoSize(index)} ${getTransitionClass}`}
                                ></iframe>
                            )}
                        </div>
                        
                        {/* Заголовок БЕЗ анимации */}
                        <div className="mt-4 lg:mt-5">
                            <p className="font-semibold text-sm lg:text-base text-center lg:text-left">
                                {video.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile & Tablet версия - вертикальная карусель БЕЗ пагинации */}
            <div className="lg:hidden w-full px-4">
                <div className="grid gap-6 md:gap-8">
                    {videos.map((video, index) => (
                        <div 
                            key={video.id}
                            className="cursor-pointer"
                            onClick={() => handleVideoClick(index)}
                        >
                            <div className="w-full">
                                {!playingStates[index] && (
                                    <div 
                                        className="w-full h-[200px] md:h-[250px] bg-cover bg-center relative rounded-[5px]"
                                        style={{ backgroundImage: `url('./videoswiper${video.id}.svg')` }}
                                    >
                                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                            <img src="./playicon.svg" alt="Play" className="w-12 h-12 md:w-16 md:h-16" />
                                        </button>
                                        <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors rounded-[5px]"></div>
                                    </div>
                                )}
                                
                                {playingStates[index] && (
                                    <iframe
                                        width="100%"
                                        height="200"
                                        src="https://www.youtube.com/embed/6n-wJGHyIE0?autoplay=1"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-[200px] md:h-[250px] rounded-[5px]"
                                    ></iframe>
                                )}
                            </div>
                            <div className="mt-3 md:mt-4">
                                <p className="font-semibold text-base md:text-lg text-center">
                                    {video.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Пагинация УБРАНА */}
            </div>
        </>
    )
}