import { DropdownMenu, Button } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
export function ChooseCity(){
    return(
        <>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger className="">
                    <Button className="bg-transparent! w-50! px-4! py-3! justify-between! flex! text-black! font-normal! border! border-[#EAEBED]! hover:border-[#6F73EE]! focus:border-[#6F73EE]!  [&[data-state=open]_.trig]:rotate-180" variant="soft">
                        Веберите свой город
                        <DropdownMenu.TriggerIcon className="trig transition-transform duration-200 ease-in-out"/>
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className='price-drop bg-[#F4F7FB]! border-none! rounded-lg!'>
                    <DropdownMenu.Item className='item bg-[#F4F7FB]! text-[#5D6C7B] transition-all duration-200 ease-in-out hover:bg-transparent! hover:text-[#6F73EE]! cursor-pointer'>
                        Москва
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='item bg-[#F4F7FB]! text-[#5D6C7B] transition-all duration-200 ease-in-out hover:bg-transparent! hover:text-[#6F73EE]! cursor-pointer'>
                        Питер
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='item bg-[#F4F7FB]! text-[#5D6C7B] transition-all duration-200 ease-in-out hover:bg-transparent! hover:text-[#6F73EE]! cursor-pointer'>
                        Город региона
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </>
    )
}