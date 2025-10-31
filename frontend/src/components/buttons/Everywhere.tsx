import { DropdownMenu, Button } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export function Everywhere() {
  return (
    <>
        <DropdownMenu.Root>
                <DropdownMenu.Trigger className="bg-[#F4F7FB]">
                    <Button className="everywhere text-black! bg-[#F4F7FB]! font-normal! focus:outline-none! focus:ring-0! focus:shadow-none! [&[data-state=open]_.arrow]:rotate-180" variant="soft">
                        Везде<img className="arrow transition-transform ease-in-out duration-200" src="./down.svg" alt="" />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className='drop bg-[#F4F7FB]! border-none!'>
                    <DropdownMenu.Item className='group transition-all duration-200 hover:bg-transparent! hover:text-[#6F73EE]! text-[#5D6C7B]'>Самокаты</DropdownMenu.Item>
                    <DropdownMenu.Item className='group transition-all duration-200 hover:bg-transparent! hover:text-[#6F73EE]! text-[#5D6C7B]'>Аксессуары</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
    </>
  )
}