import "@radix-ui/themes/styles.css";
import { RadioGroup } from "@radix-ui/themes";
import { useState, useRef, useEffect } from "react";

export function Wallet(){
    const [selectedValue, setSelectedValue] = useState<string>("");
    const radioRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (radioRef.current && !radioRef.current.contains(event.target as Node)) {
                setSelectedValue("");
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <div ref={radioRef}>
            <RadioGroup.Root 
                value={selectedValue} 
                onValueChange={setSelectedValue}
                name="payment-method"
            >
                <label className={`flex items-center justify-between w-60 p-4 border rounded-[5px] transition-all duration-200 cursor-pointer ${
                    selectedValue === "1" 
                        ? "border-[#6F73EE] bg-white" 
                        : "border-[#EAEBED] hover:border-[#6F73EE]"
                }`}>
                    <div className="flex items-start gap-3 ">
                        <RadioGroup.Item 
                            value="1" 
                            className="w-5 h-5 border-2 border-[#EAEBED] data-[state=checked]:border-[#6F73EE] data-[state=checked]:bg-[#6F73EE] rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer" 
                        />
                        <div className="grid gap-3">
                            <div className=" font-medium">Картой</div>
                            <div className="grid gap-2">
                                <div className="flex gap-1">
                                    <img src="./PM4.svg" alt="" className="h-6" />
                                    <img src="./PM3.svg" alt="" className="h-6" />
                                    <img src="./PM2.svg" alt="" className="h-6" />
                                </div>
                                <div className="flex gap-1">
                                    <img src="./PM.svg" alt="" className="h-6" />
                                    <img src="./PM5.svg" alt="" className="h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </RadioGroup.Root>
        </div>
    );
}