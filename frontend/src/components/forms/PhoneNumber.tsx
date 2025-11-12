import React, { useState, useRef } from "react";

interface PhoneNumberProps {
    onPhoneChange?: (phone: string, isValid: boolean) => void;
    value?: string;
}

export function PhoneNumber({ onPhoneChange, value = '' }: PhoneNumberProps) {
    const [internalValue, setInternalValue] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);

    const validatePhone = (phone: string) => {
        const cleanPhone = phone.replace(/\D/g, '');
        return cleanPhone.length === 11; // +7 и 10 цифр
    };

    const handleFocus = () => {
        if (!internalValue && !value) {
            const newValue = '+7 ';
            setInternalValue(newValue);
            onPhoneChange?.(newValue, validatePhone(newValue));
        }
    };

    const handleBlur = () => {
        if ((internalValue === '+7 ' || !internalValue) && !value) {
            setInternalValue('');
            onPhoneChange?.('', false);
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
        
        const currentValue = value || internalValue;
        if (formatted !== currentValue) {
            if (value !== undefined) {
                // Контролируемый режим
                onPhoneChange?.(formatted, validatePhone(formatted));
            } else {
                // Неконтролируемый режим
                setInternalValue(formatted);
                onPhoneChange?.(formatted, validatePhone(formatted));
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(e.key) && 
            !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Escape', 'Enter'].includes(e.key) &&
            !(e.ctrlKey || e.metaKey)) {
            e.preventDefault();
        }
    };

    const displayValue = value !== undefined ? value : internalValue;

    return (
        <input 
            ref={inputRef}
            type="tel" 
            value={displayValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder="+7 (___) __ - __ - __" 
            className="px-[25px] py-3 border! border-[#EAEBED]! rounded-[5px] transition-all duration-200 ease-in-out outline-none hover:border-[#6F73EE]! focus:border-[#6F73EE]!"
        />
    );
}