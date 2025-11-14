import { Select } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export function Everywhere() {
  return (
    <>
        <Select.Root defaultValue="Везде">
          <Select.Trigger className="bg-[#F4F7FB]!"/>
          <Select.Content>
            <Select.Group>
              <Select.Item className='group! transition-all! duration-200! hover:bg-transparent! hover:text-[#6F73EE]! text-[#5D6C7B]! bg-[#F4F7FB]! font-normal! focus:outline-none! focus:ring-0! focus:shadow-none!' value="Везде">Везде</Select.Item>
              <Select.Item className='group! transition-all! duration-200! hover:bg-transparent! hover:text-[#6F73EE]! text-[#5D6C7B]!' value="Самокаты">Самокаты</Select.Item>
              <Select.Item className='group! transition-all! duration-200! hover:bg-transparent! hover:text-[#6F73EE]! text-[#5D6C7B]!' value="Аксессуары">Аксессуары</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>

    </>
  )
}