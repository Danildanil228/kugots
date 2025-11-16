import { useState } from 'react';

interface InputEmailProps {
    onEmailChange: (email: string, isValid: boolean) => void;
    value?: string;
}

export function InputEmail({ onEmailChange, value = '' }: InputEmailProps) {
    const [localEmail, setLocalEmail] = useState(value);
    
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocalEmail(value);
        const isValid = validateEmail(value);
        onEmailChange(value, isValid);
    };
    
    return(
        <>
            <input 
                value={value || localEmail} 
                onChange={handleChange} 
                type="email" 
                placeholder="Введите Ваш email" 
                className="py-3 lg:py-4 px-4 lg:px-6 bg-[#FFFFFF33] text-white rounded-[5px] w-full lg:w-[450px] placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
        </>
    )
}