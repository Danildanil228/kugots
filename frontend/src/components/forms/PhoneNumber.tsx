import React, { useState, useRef } from "react";

export function PhoneNumber() {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        if (!value) {
            setValue('+7 ');
        }
    };

    const handleBlur = () => {
        if (value === '+7 ' || !value) {
            setValue('');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value;
        
        if (!input.startsWith('+7')) {
            input = '+7 ' + input.replace(/[^\d]/g, '');
        }
        
        const digits = input.replace(/[^\d]/g, '').substring(1); 
        
        const limitedDigits = digits.substring(0, 10);
        
        let formatted = '+7 ';
        
        if (limitedDigits.length > 0) {
            formatted += `(${limitedDigits.substring(0, 3)}`;
        }
        if (limitedDigits.length > 3) {
            formatted += `) ${limitedDigits.substring(3, 6)}`;
        }
        if (limitedDigits.length > 6) {
            formatted += `-${limitedDigits.substring(6, 8)}`;
        }
        if (limitedDigits.length > 8) {
            formatted += `-${limitedDigits.substring(8, 10)}`;
        }
        
        setValue(formatted);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(e.key) && 
            !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Escape', 'Enter'].includes(e.key) &&
            !(e.ctrlKey || e.metaKey)) {
            e.preventDefault();
        }
        
    };

    return (
        
            <input 
                ref={inputRef}
                type="tel" 
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                placeholder="+7 (___) __ - __ - __" 
                className="px-[25px] py-3 border! border-[#EAEBED]! rounded-[5px] transition-all duration-200 ease-in-out outline-none hover:border-[#6F73EE]! focus:border-[#6F73EE]!"
            />
        
    );
}