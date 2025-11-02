import { DropdownMenu, Button, Flex, Text, ChevronDownIcon } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export function CatalogDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger >
        <Button 
          variant="ghost" 
          className="catalog-btn text-[15px] font-normal text-gray-900 hover:bg-gray-100 data-[state=open]:bg-blue-50 data-[state=open]:text-blue-600 data-[state=open]:font-medium transition-all duration-200"
        >
          Каталог
          <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-200 data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenu.Trigger>
      
      <DropdownMenu.Content 
        className="w-[600px] p-6 bg-white shadow-xl rounded-lg border border-gray-200"
        sideOffset={8}
        align="start"
      >
        <Flex gap="8">
          {/* Левая колонка - Каталог */}
          <Flex direction="column" gap="3" className="flex-1">
            <Text weight="bold" size="3" className="text-gray-900 mb-2">Каталог</Text>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              Электросамокаты
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              Электроскейты
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              Электровелосипеды
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              Робот-пылесосы
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              Весы
            </DropdownMenu.Item>
          </Flex>

          {/* Средняя колонка - Особенности */}
          <Flex direction="column" gap="3" className="flex-1">
            <Text weight="bold" size="3" className="text-gray-900 mb-2">Особенности</Text>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              Внедорожный
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              Городской
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              Зимний
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              С сиденьем
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              Без сиденья
            </DropdownMenu.Item>
          </Flex>

          {/* Правая колонка - Для кого */}
          <Flex direction="column" gap="3" className="flex-1">
            <Text weight="bold" size="3" className="text-gray-900 mb-2">Для кого</Text>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              Для детей и подростков
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              Для взрослых
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-2 py-1.5 rounded cursor-pointer">
              Для пенсионеров
            </DropdownMenu.Item>
          </Flex>
        </Flex>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}