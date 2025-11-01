import { useState, useRef } from 'react';

export function PaperClip() {
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files);
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full">
            {/* Скрытый input */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                multiple
            />
            
            {/* Кастомная кнопка */}
            <button
                type="button"
                onClick={handleButtonClick}
                className="flex items-center gap-2 px-4 py-2  text-[#5D6C7B] hover:border-[#6F73EE] hover:text-black transition-all duration-200 group"
            >
                <img 
                    src="./PaperClip1.svg" 
                    className="transition-all duration-200 filter group-hover:brightness-0" 
                    alt="Прикрепить файл" 
                />
                Прикрепите файл
            </button>

            {/* Список прикрепленных файлов */}
            {files.length > 0 && (
                <div className="mt-3 space-y-2">
                    {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-[5px]">
                            <div className="flex items-center gap-2">
                                
                                <span className="text-sm text-gray-700">{file.name}</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                                <img src="./Deletered.svg" className='filter brightness-0 saturate-0 opacity-70 hover:brightness-100 hover:saturate-100 hover:opacity-100 transition-all duration-200' alt="" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}