import { AlertDialog, Checkbox } from "@radix-ui/themes";
import { useState } from "react";
import { PhoneNumber } from "./PhoneNumber";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface AlertOrderProductProps {
  product: Product;
}

export function AlertOrderProduct({ product }: AlertOrderProductProps) {
    const [phone, setPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isChecked, setIsChecked] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const formatPrice = (price: number) => {
        if (!price) return '';
        let cleanPrice = price.toString()
            .replace(/[,.]00$/, '')
            .replace(/[^\d,.]/g, '');
        cleanPrice = cleanPrice.replace(/[,.]/, '');
        return cleanPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    const handlePhoneChange = (value: string, isValid: boolean) => {
        setPhone(value);
        setIsPhoneValid(isValid);
        setError('');
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setPhone('');
        setIsPhoneValid(false);
        setError('');
        setIsSubmitted(false);
    };

    const handleCallOrder = async () => {
        if (!isPhoneValid || !isChecked) return;
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:3000/api/call-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    phone: phone,
                    type: 'orderProduct',
                    productId: product.id,
                    productName: product.name
                }),
            });

            if (!response.ok) {
                let errorMessage = 'Ошибка при отправке';
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch (jsonError) {
                    const textError = await response.text();
                    errorMessage = textError || errorMessage;
                }
                throw new Error(errorMessage);
            }

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true); 
                setPhone('');
                setIsPhoneValid(false);
                setIsChecked(true);
            } else {
                throw new Error(result.message || 'Произошла ошибка');
            }

        } catch (err) {
            console.error('Ошибка:', err);
            setError(err instanceof Error ? err.message : 'Произошла ошибка при отправке заявки');
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <>
            <AlertDialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialog.Trigger>
                    <button 
                        className="bg-[#F3A712] w-full py-2.5 text-white rounded-[5px] hover:bg-white hover:text-[#F3A712] border hover:border-[#F3A712] transition-colors"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        Оформить предзаказ
                    </button>
                </AlertDialog.Trigger>
                <AlertDialog.Content maxWidth="600px">
                    <div className="p-6">
                        <div className="justify-end flex mb-4">
                            <AlertDialog.Action>
                                <img 
                                    src='./crest.svg' 
                                    className='rotate-45 cursor-pointer'
                                    alt="Закрыть"
                                    onClick={handleCloseDialog}
                                />
                            </AlertDialog.Action>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-1 grid gap-4">
                                <h1 className="text-[25px] font-semibold">
                                    Оформите предзаказ на {product.name}
                                </h1> 
                                <p className="text-gray-600">
                                    Сообщим вам, когда товар появится в наличии
                                </p>
                                <div className="grid gap-4">
                                    <PhoneNumber onPhoneChange={handlePhoneChange} value={phone}/>
                                    {error && (
                                        <div className="text-red-500 text-sm text-center">
                                            {error}
                                        </div>
                                    )}
                                    <button 
                                        className={`py-3 rounded-[5px] text-white transition-colors ${
                                            isSubmitted 
                                                ? 'bg-green-500 cursor-default' 
                                                : !isPhoneValid || !isChecked || isLoading 
                                                    ? 'bg-[#6F73EE] opacity-50 cursor-not-allowed' 
                                                    : 'bg-[#6F73EE] hover:bg-[#5a5fc9]'
                                        }`}
                                        onClick={isSubmitted ? undefined : handleCallOrder}
                                        disabled={isSubmitted || !isPhoneValid || !isChecked || isLoading}
                                    >
                                        {isSubmitted ? 'Отправлено!' : (isLoading ? 'Отправка...' : 'Оформить предзаказ')}
                                    </button>
                                    
                                    <div className='flex items-start gap-3'>
                                        <Checkbox 
                                            variant="soft" 
                                            checked={isChecked}
                                            onCheckedChange={(checked) => setIsChecked(checked === true)}
                                        />
                                        <p className='text-[14px] text-gray-600'>
                                            Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="" className='text-[#6F73EE]'>политикой конфиденциальности</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <img 
                                    src={product.img} 
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <div className="mt-3">
                                    <p className="font-semibold text-lg">{formatPrice(product.price)} ₽</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    );
}