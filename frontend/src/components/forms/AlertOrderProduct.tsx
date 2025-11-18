import { AlertDialog, Checkbox } from "@radix-ui/themes";
import { useState } from "react";
import { PhoneNumber } from "./PhoneNumber";
import { Modal, ModalClose } from "../ui/Modal";
import { formatPrice } from "../format";
import { useFormSubmit } from "./useFormSubmit";

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
    const [isChecked, setIsChecked] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { submit, isLoading, error } = useFormSubmit({
      endpoint: '/api/call-order',
      onSuccess: () => {
        setIsSubmitted(true);
        setPhone('');
        setIsPhoneValid(false);
        setIsChecked(true);
      }
    });

    const handlePhoneChange = (value: string, isValid: boolean) => {
        setPhone(value);
        setIsPhoneValid(isValid);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setPhone('');
        setIsPhoneValid(false);
        setIsSubmitted(false);
    };

    const handleCallOrder = async () => {
        if (!isPhoneValid || !isChecked) return;
        
        await submit({ 
          phone: phone,
          type: 'orderProduct',
          productId: product.id,
          productName: product.name
        });
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
                <Modal open={isDialogOpen} onOpenChange={setIsDialogOpen} maxWidth="600px">
                    <div className="p-6">
                        <ModalClose onClick={handleCloseDialog} />
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
                </Modal>
            </AlertDialog.Root>
        </>
    );
}