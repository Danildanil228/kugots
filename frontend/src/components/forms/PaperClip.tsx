import { useState, useRef } from 'react';

export function PaperClip() {
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const removeFile = (event: React.MouseEvent) => {
        event.stopPropagation();
        setFile(null);
    };

    return (
        <div className="w-full">
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
            />
            <button
                type="button"
                onClick={handleButtonClick}
                className={`flex items-center justify-between px-4 py-2 transition-all duration-200 group w-full text-left ${
                    file 
                        ? "text-black"
                        : "text-[#5D6C7B] hover:border-[#6F73EE] hover:text-black" 
                }`}
            >
                <div className="flex items-center gap-2 min-w-0">
                    <img 
                        src={file ? "./PaperClipblue.svg" : "./PaperClip1.svg"} 
                        className={`transition-all duration-200 flex-shrink-0 ${
                            file 
                                ? ""
                                : "filter group-hover:brightness-0" 
                        }`} 
                        alt="Прикрепить файл" 
                    />
                    <span className="truncate">
                        {file ? file.name : "Прикрепите файл"}
                    </span>
                </div>
                {file && (
                    <button
                        type="button"
                        onClick={removeFile}
                        className="p-1 rounded transition-all duration-200"
                    >
                        <img 
                            src="./Deletered.svg" 
                            className='filter brightness-0 saturate-0 opacity-70 hover:brightness-100 hover:saturate-100 hover:opacity-100 transition-all duration-200' 
                            alt="Удалить файл" 
                        />
                    </button>
                )}
            </button>
        </div>
    );
}