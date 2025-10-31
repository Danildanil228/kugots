
import "@radix-ui/themes/styles.css";
import {Button, DropdownMenu } from "@radix-ui/themes";

export function Price(){
    

    return(
        <>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button className="price text-[#6F73EE]! bg-transparent! font-normal! px-5 py-[10px] border border-[#6F73EE] rounded-lg transition-all duration-200! ease-in-out hover:text-white! hover:bg-[#6F73EE]! focus:outline-none! focus:ring-0! focus:shadow-none! [&[data-state=open]]:text-white! [&[data-state=open]]:bg-[#6F73EE]! [&[data-state=open]_.trig]:rotate-180" variant="soft">
                        По цене 
                        <DropdownMenu.TriggerIcon className="trig transition-transform duration-200 ease-in-out"/>
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className='price-drop bg-[#F4F7FB]! border-none! rounded-lg!'>
                    <DropdownMenu.Item className='item bg-[#F4F7FB]! text-[#5D6C7B] transition-all duration-200 ease-in-out hover:bg-transparent! hover:text-[#6F73EE]! cursor-pointer'>
                        Сначала дорогие
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='item bg-[#F4F7FB]! text-[#5D6C7B] transition-all duration-200 ease-in-out hover:bg-transparent! hover:text-[#6F73EE]! cursor-pointer'>
                        Сначала дешёвые
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </>
        
    )
}