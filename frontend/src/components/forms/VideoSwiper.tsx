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

    const getVideoSize = (index: number) => {
        return activeVideo === index 
            ? "w-[530px] h-[300px]" 
            : "w-[350px] h-[200px]";
    };

    const getTextWidth = (index: number) => {
        return activeVideo === index 
            ? "w-fit" 
            : "w-45";
    };

    const getTransitionClass = "transition-all duration-500 ease-in-out";

    const videos = [
        { id: 1, title: "Крутой и городской? Обзор Kugoo XS Plus" },
        { id: 2, title: "Крутой и городской? Обзор Kugoo XS Plus" },
        { id: 3, title: "Крутой и городской? Обзор Kugoo XS Plus" }
    ];

    return(
        <>
            <div 
                className="flex justify-between w-7xl gap-6 items-start h-100 mb-20 mt-14"
                onMouseLeave={() => setActiveVideo(0)}
            >
                {videos.map((video, index) => (
                    <div 
                        key={video.id}
                        className={`${getTransitionClass} cursor-pointer flex flex-col`}
                        onMouseEnter={() => handleMouseEnter(index)}
                    >
                        <div className={`${getTransitionClass} min-h-0`}>
                            {!playingStates[index] && (
                                <div 
                                    className={`${getVideoSize(index)} bg-cover bg-center relative rounded-[5px] ${getTransitionClass}`}
                                    style={{ backgroundImage: `url('./videoswiper${video.id}.svg')` }}
                                    onClick={() => handleVideoClick(index)}
                                >
                                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                        <img src="./playicon.svg" alt="Play" className="w-20 h-20" />
                                    </button>
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
                        <div className={`${getTransitionClass} mt-5`}>
                            <p className={`font-semibold ${getTextWidth(index)} ${getTransitionClass}`}>
                                {video.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}