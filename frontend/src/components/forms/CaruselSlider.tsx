import './maincarusel.css';

const StarRating = ({ rating = 5 }: { rating?: number }) => (
    <div className="flex text-yellow-400">
        {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
        ))}
    </div>
);

const ReviewCard = ({ imageSrc, profileSrc = "./profile1.svg", name = "Имя", level = "Уровень", date = "01.01.2023", text = "Текст отзыва будет отображаться здесь. Очень доволен обслуживанием!" }: {
    imageSrc: string;
    profileSrc?: string;
    name?: string;
    level?: string;
    date?: string;
    text?: string;
}) => (
    <div className="card group relative">
        <img 
            src={imageSrc} 
            alt="Отзыв" 
            className="transition-all duration-300 group-hover:blur-[10px] w-full h-auto"
        />
        <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 p-4 grid gap-3  bg-opacity-70">
            <div className="flex items-center">
                <img src={profileSrc} className="w-10 h-10 rounded-full mr-3" alt="Profile" />
                <div className="grid">
                    <span className="font-bold text-white">{name}</span>
                    <span className="text-sm text-gray-300">{level}</span>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <StarRating />
                <span className="text-sm text-gray-300">{date}</span>
            </div>
            <div className="text-white text-sm">
                {text}
            </div>
        </div>
    </div>
);

export function CaruselSlider() {
    const reviewImages = [
        "./otziv1.svg", "./otziv2.svg", "./otziv3.svg", "./otziv4.svg", 
        "./otziv5.svg", "./otziv6.svg", "./otziv7.svg", "./otziv8.svg", "./otziv10.svg"
    ];

    const doubledImages = [...reviewImages, ...reviewImages];

    return (
        <div className="caroisel-container grid gap-5 mt-15 mb-20">
           
            <div className="carousel-track">
                {doubledImages.map((image, index) => (
                    <ReviewCard 
                        key={`top-${index}`}
                        imageSrc={image}
                        name={`Имя ${(index % reviewImages.length) + 1}`}
                    />
                ))}
            </div>
            
            <div className="carousel-track-down">
                {doubledImages.map((image, index) => (
                    <ReviewCard 
                        key={`bottom-${index}`}
                        imageSrc={image}
                        name={`Имя ${(index % reviewImages.length) + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}